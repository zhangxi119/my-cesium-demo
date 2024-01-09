import { computed, ref, toRefs, watchEffect } from 'vue';
import cloneDeep from 'lodash/cloneDeep';
export default function useColum(props, emit) {
  const { columns, checkedColumns, size } = toRefs(props);

  const checkedList = ref([]); // 要显示的列key
  const sortList = ref([]); // 所有排序好后的列key
  const setListColumns = ref([]); // 抽屉展示的操作列
  const tableSize = ref(''); // 表格高度大小
  tableSize.value = size.value;
  watchEffect(() => {
    checkedList.value =
      checkedColumns.value.length > 0 ? [...checkedColumns.value] : columns.value.map((item) => item.prop); // 未设置默认展示所有列
  });
  // 变动的列属性--接收来自操作对列的设置和恢复默认设置
  const handleSubmit = (columnsProp, sortKeys, size) => {
    // console.log('columnsProp',columnsProp);
    // console.log('columnsProp sortKeys',sortKeys);
    // console.log('columnsProp size',size);
    // debugger;
    checkedList.value = columnsProp; // 要显示的列的key即prop
    sortList.value = sortKeys; // 所有排序好的key--包含显示和不显示的
    tableSize.value = size;
    emit('columnsChange', columnsProp);
  };
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

  // 实际渲染的table列
  const actualColumns = computed(() => {
    const oldColumns = cloneDeep(columns.value);
    const formatColumns = columnsformatter(oldColumns);
    const columnTypes = ['index', 'selection'];
    const columnTypesArr = formatColumns.filter((i) => columnTypes.includes(i.type));
    const columnPropsArr = formatColumns.filter((i) => !columnTypes.includes(i.type));
    // console.log('所有列数据--columnPropsArr',columnPropsArr);
    // console.log('所有排序好的key --sortList',sortList.value);

    setListColumns.value = columnPropsArr.sort((a, b) => {
      return sortList.value.indexOf(a.prop) - sortList.value.indexOf(b.prop);
    });
    // watch(()=> setListColumns.value ,(newValue)=>{
    //   console.log('watch',newValue);
    //   // debugger;
    // });

    const list = setListColumns.value.filter((item) => checkedList.value.includes(item.prop));
    // console.log('checkedList.value',checkedList.value);
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
  return {
    handleSubmit,
    actualColumns,
    flatActuakColumns,
    slotKeys,
    setListColumns,
    tableSize,
    selectedFieldKeys: checkedList,
  };
}
