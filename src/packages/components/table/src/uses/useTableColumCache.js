import { watchEffect, ref, toRefs, nextTick, watch, computed } from 'vue';
import storage from 'packages/utils/storage';
import LRUCache from 'packages/utils/cache';
import difference from 'lodash/difference';
import cloneDeep from 'lodash/cloneDeep';
import { sortBy, findIndex } from 'lodash';
import { getConfig } from 'packages/utils/config';

const STORAGE_KEYS = {
  DEFAULT: 'defaultKeys', // 所有列key
  SELECTED: 'selectedKeys', // 显示的列key
  ALLWORD: 'allWrodKeys', // 全字段保留缓存
  SIZE: 'tableSize', // 表格高度
};

export default function useTableColumCache(props, emit) {
  const STORAGE_KEY_SUFFIX = getConfig('table').storageKey;
  const { columns, tableHeaderKey, size, checkedColumns } = toRefs(props);
  const selectedFieldKeys = ref([]); // 要显示的列key
  const defaultSortKeys = ref([]); // 所有排序好的列key
  const storageItemKey = ref('');
  const tableSize = ref('');
  const setListColumns = ref([]); // 表格显示设置抽屉展示的操作列

  // 存储表格列key用于setItem保存
  const headerKeys = {};
  // 默认显示的表头keys
  let defaultShowKeys = [];
  // 保存全部的fields key，用于过滤
  const tableFieldMap = {};
  // 初始化缓存操作类
  let lruCache = LRUCache.getInstance(getConfig('table').cacheSize);

  const columnsformatter = (col) => {
    return col.map((item) => {
      const newItem = {
        ...item,
        header: item.header
          ? {
              ...item.header,
              component: item.header.component || 'el-input',
            }
          : item.header,
      };
      if (item.children) {
        newItem.children = columnsformatter(item.children);
      }
      return newItem;
    });
  };

  const flatColumns = (list) => {
    return list.reduce((result, item) => {
      if (item.children) {
        return [...result, item, ...flatColumns(item.children)];
      } else {
        return [...result, item];
      }
    }, []);
  };
  watchEffect(() => {
    const columnTypes = ['index', 'selection'];
    const columnPropsArr = columns.value.filter((i) => !columnTypes.includes(i.type) && i.visible !== false);
    selectedFieldKeys.value =
      checkedColumns.value && checkedColumns.value.length > 0
        ? checkedColumns.value
        : columnPropsArr.map((item) => item.prop);
    nextTick(() => {
      init();
    });
  });
  watch(tableSize, (newValue, oldValue) => {
    // 开启缓存后 表格高度变换后重新缓存
    if (newValue !== oldValue) {
      // 获取localStorage缓存的item
      const cachedHeader = getStorageItem() || {};
      // console.log('watch cachedHeader >>',cachedHeader);
      if (Object.keys(cachedHeader).length > 0) {
        const tmpHeaderKeys = {};
        tmpHeaderKeys[STORAGE_KEYS.DEFAULT] = cachedHeader[STORAGE_KEYS.DEFAULT];
        tmpHeaderKeys[STORAGE_KEYS.SELECTED] = cachedHeader[STORAGE_KEYS.SELECTED];
        tmpHeaderKeys[STORAGE_KEYS.ALLWORD] = cachedHeader[STORAGE_KEYS.ALLWORD];
        tmpHeaderKeys[STORAGE_KEYS.SIZE] = newValue;
        // storage.setItem(storageItemKey.value, tmpHeaderKeys);
        // console.log('watch tmpHeaderKeys >>',tmpHeaderKeys);
        lruCache.set(storageItemKey.value, tmpHeaderKeys);
        setStorageItem();
      }
    }
  });

  const getStorageItemKey = () => {
    storageItemKey.value = `${tableHeaderKey.value}_TABLE_HEADER_KEYS`.replace(/^_/, '');
  };
  const getStorageItem = () => {
    const cacheData = new Map(storage.getItem(STORAGE_KEY_SUFFIX));
    lruCache.setData(cacheData);
    // console.log(3333333,lruCache.get(storageItemKey.value));
    return lruCache.get(storageItemKey.value);
    // return storage.getItem(storageItemKey.value);
  };
  const setDefaultShowKeysAsSelectedKeys = () => {
    // console.log('setDefaultShowKeysAsSelectedKeys >>');
    selectedFieldKeys.value =
      checkedColumns.value && checkedColumns.value.length > 0 ? checkedColumns.value : defaultShowKeys;
    // console.log('selectedFieldKeys',selectedFieldKeys.value);
    const tmpHeaderKeys = {};
    tmpHeaderKeys[STORAGE_KEYS.DEFAULT] = defaultShowKeys;
    tmpHeaderKeys[STORAGE_KEYS.SELECTED] = selectedFieldKeys.value;
    tmpHeaderKeys[STORAGE_KEYS.ALLWORD] = defaultShowKeys;
    tmpHeaderKeys[STORAGE_KEYS.SIZE] = size.value;

    lruCache.set(storageItemKey.value, tmpHeaderKeys);
    // console.log('setDefaultShowKeysAsSelectedKeys lruCache set after >>',lruCache);
    setStorageItem();
  };

  // diff 算法
  const combineSelectedKeys = (defaultHeaderKeys, selectedHeaderKeys, tableHeightSize) => {
    // console.log('combineSelectedKeys >>');
    const cachedHeaderKeys = getStorageItem() || {};
    let cachedAllWordKeys = cachedHeaderKeys[STORAGE_KEYS.ALLWORD];

    // 相比较之前的缓存keys，看是否有新增
    const newKeys = difference(defaultShowKeys, defaultHeaderKeys);

    // 是否缓存了显示keys
    if (Array.isArray(selectedHeaderKeys)) {
      // 如果存在删除的字段, 优先级以用户选中的key最高，只过滤不存在的selectKey
      let currentHeaderKeys = selectedHeaderKeys.filter((key) => tableFieldMap[key]);
      // 存在新增字段则自动追加
      if (newKeys.length) {
        currentHeaderKeys = [...new Set(currentHeaderKeys.concat(newKeys))];
      }
      selectedFieldKeys.value = currentHeaderKeys;
      headerKeys[STORAGE_KEYS.SELECTED] = currentHeaderKeys;
    } else {
      selectedFieldKeys.value = defaultShowKeys;
    }

    // new diff
    // 规则1: 当前为组件更新时，对表头的diff，以传入cloums字段为准，以缓存中的排序为辅，重新生成表头顺序
    // 规则2: 当出现新增字段时，如何处理

    // 获取全缓存keys，用来对当前传入的字段做排序
    const newCatchHeaderKeys = sortBy(defaultShowKeys, (x) => findIndex(cachedAllWordKeys, (y) => x === y));
    // 比之前，有新增，不确定排哪。那么按配置item在columns的位置做插入
    const addCatchAllKeys = difference(defaultShowKeys, cachedAllWordKeys);

    if (addCatchAllKeys.length > 0) {
      addCatchAllKeys.forEach((item) => {
        const indexKey = defaultShowKeys.indexOf(item);
        const indexNowKey = newCatchHeaderKeys.indexOf(item);
        if (indexKey >= 0) {
          newCatchHeaderKeys.splice(indexNowKey, 1);
          newCatchHeaderKeys.splice(indexKey, 0, item);
          cachedAllWordKeys.splice(indexKey, 0, item);
        }
      });
    }

    headerKeys[STORAGE_KEYS.DEFAULT] = newCatchHeaderKeys;
    defaultSortKeys.value = headerKeys[STORAGE_KEYS.DEFAULT];
    headerKeys[STORAGE_KEYS.ALLWORD] = [...new Set(cachedAllWordKeys)];
    headerKeys[STORAGE_KEYS.SIZE] = tableHeightSize || size.value;
    // storage.setItem(storageItemKey.value, headerKeys);
    lruCache.set(storageItemKey.value, headerKeys);
    setStorageItem();
  };

  const setStorageItem = () => {
    // console.log('STORAGE_KEY_SUFFIX 111',STORAGE_KEY_SUFFIX);
    // console.log('STORAGE_KEY_SUFFIX 222',getConfig('table').storageKey);
    storage.setItem(STORAGE_KEY_SUFFIX, Array.from(lruCache.getData().entries()));
  };
  // 设置后更新存储
  const handleHeaderSetChange = (sortKeys, visiblekeys, size) => {
    selectedFieldKeys.value = visiblekeys;
    defaultSortKeys.value = sortKeys;
    tableSize.value = size;
    const headerKeys = {};
    headerKeys[STORAGE_KEYS.DEFAULT] = sortKeys;
    headerKeys[STORAGE_KEYS.SELECTED] = visiblekeys;

    // 获取缓存
    const cachedHeaderKeys = getStorageItem() || {};
    const allWrodKeysCatch = [...new Set(sortKeys.concat(cachedHeaderKeys[STORAGE_KEYS.ALLWORD]))];
    const newCatchHeaderKeys = sortBy(allWrodKeysCatch, (x) => findIndex(sortKeys, (y) => x === y));
    // 更新ALLWORD全缓存code，保持他的顺序永久最新，字段最全
    headerKeys[STORAGE_KEYS.ALLWORD] = newCatchHeaderKeys;
    headerKeys[STORAGE_KEYS.SIZE] = size;
    // storage.setItem(storageItemKey.value, headerKeys);
    lruCache.set(storageItemKey.value, headerKeys);
    setStorageItem();
  };

  // 变动的列属性--接收来自操作对列的设置和恢复默认设置
  const handleSubmit = (columnsProp, sortKeys, size) => {
    // console.log('columnsProp',columnsProp); // 要显示的列的key即prop
    // console.log('columnsProp sortKeys',sortKeys); // 所有排序好的key--包含显示和不显示的
    // console.log('columnsProp size',size); // 表格高度大小
    handleHeaderSetChange(sortKeys, columnsProp, size);
    emit('columnsChange', columnsProp);
  };
  // 实际渲染的table列
  const actualColumns = computed(() => {
    const oldColumns = cloneDeep(columns.value);
    const formatColumns = columnsformatter(oldColumns);
    const columnTypes = ['index', 'selection', 'expand'];
    const columnTypesArr = formatColumns.filter((i) => columnTypes.includes(i.type));

    const columnPropsArr = formatColumns.filter((i) => !columnTypes.includes(i.type));
    // console.log('所有列数据--columnPropsArr',columnPropsArr);
    // console.log('所有排序好的key --defaultSortKeys',defaultSortKeys.value);

    setListColumns.value = columnPropsArr.sort((a, b) => {
      return defaultSortKeys.value.indexOf(a.prop) - defaultSortKeys.value.indexOf(b.prop);
    });

    const list = setListColumns.value.filter((item) => selectedFieldKeys.value.includes(item.prop));
    // console.log('selectedFieldKeys.value',selectedFieldKeys.value);
    return [...columnTypesArr, ...list];
  });

  const flatActuakColumns = computed(() => {
    return flatColumns(actualColumns.value);
  });
  const slotKeys = computed(() => {
    return flatActuakColumns.value
      .map((item) => {
        const map = [];
        if (item.type) {
          map.push(item.type, item.type + '-header');
        }
        if (item.prop) {
          map.push(item.prop, item.prop + '-header');
        }
        return map;
      })
      .flat();
  });
  function init() {
    // console.log('init');
    // 获取starage item key
    getStorageItemKey();
    // 初始化数据
    const columnTypes = ['index', 'selection'];
    const columnPropsArr = columns.value.filter((i) => !columnTypes.includes(i.type));
    defaultShowKeys = [];
    columnPropsArr.forEach(({ visible, prop }) => {
      visible !== false && defaultShowKeys.push(prop);
      tableFieldMap[prop] = true;
    });
    // 获取localStorage缓存的item
    const cachedHeaderKeys = getStorageItem() || {};
    // 默认存储所有表格列的keys
    const defaultHeaderKeys = cachedHeaderKeys[STORAGE_KEYS.DEFAULT];
    // 获取历史开启显示的selectedKeys
    const selectedHeaderKeys = cachedHeaderKeys[STORAGE_KEYS.SELECTED];
    // 获取历史的表格高度大小
    const tableHeightSize = cachedHeaderKeys[STORAGE_KEYS.SIZE];
    tableSize.value = tableHeightSize || size.value;

    try {
      if (Array.isArray(defaultHeaderKeys)) {
        // 合并之前存储的已选中的key
        combineSelectedKeys(defaultHeaderKeys, selectedHeaderKeys, tableHeightSize);
      } else {
        setDefaultShowKeysAsSelectedKeys();
        tableSize.value = size.value;
      }
    } catch (error) {
      setDefaultShowKeysAsSelectedKeys();
      tableSize.value = tableHeightSize || size.value;
    }
  }

  return {
    defaultSortKeys,
    selectedFieldKeys,
    tableSize,
    setStorageItem,
    handleHeaderSetChange,
    handleSubmit,
    actualColumns,
    flatActuakColumns,
    slotKeys,
    setListColumns,
  };
}
