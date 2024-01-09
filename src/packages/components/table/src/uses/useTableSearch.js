import { ref, watch, nextTick } from 'vue';
import { getConfig } from 'packages/utils/config';
import cloneDeep from 'lodash/cloneDeep';
import { useCacheFilter } from './useCacheFilter';
export const InputComponent = ['el-autocomplete', 'el-input-number', 'el-input'];
export const SelectComponent = ['el-cascader', 'el-select', 'el-select-v2', 'el-date-picker', 'el-time-picker'];
export default function useTableSearch(props, emit) {
  const searchForm = ref([]);
  watch(
    () => props.modelValue,
    (value) => {
      searchForm.value = value;
    },
    {
      deep: true,
      immediate: true,
    },
  );
  // 调用时优先处理配置中的单选和多选框初始数据
  const handleSearch = (obj, props, currentInstance) => {
    if (obj && obj.length > 0) {
      const searchObj = cloneDeep(searchForm.value);
      searchForm.value = {
        ...searchObj,
        ...obj,
      };
    }
    nextTick(() => {
      if (props.filterCache) {
        useCacheFilter(props, searchForm, currentInstance);
      }
      emit('search', searchForm.value);
      emit('update:modelValue', searchForm.value);
    });
  };

  // 调用时优先处理配置中的单选和多选框初始数据
  const handleCheckBoxSearch = (key, value, options) => {
    const searchObj = cloneDeep(searchForm.value);
    delete searchObj[key];

    // 获取筛选列表
    const optionsKeyValue = [];
    options.forEach((item) => {
      optionsKeyValue.push(item.value);
    });

    if (value) {
      // 用户勾选了全选
      searchForm.value = {
        ...searchObj,
      };
      searchForm.value[key] = optionsKeyValue;
    } else {
      // 点了取消全选时触发
      searchForm.value = {
        ...searchObj,
      };
      searchForm.value[key] = [];
    }
    nextTick(() => {
      emit('search', searchForm.value);
      emit('update:modelValue', searchForm.value);
    });
  };

  // 清除或删除选项
  const clearSearch = (key) => {
    if (key) {
      const searchObj = cloneDeep(searchForm.value);
      delete searchObj[key];
      searchForm.value = {
        ...searchObj,
      };
      nextTick(() => {
        emit('search', searchForm.value);
      });
    } else {
      searchForm.value = {};
      nextTick(() => {
        emit('reset', searchForm.value);
      });
    }
    nextTick(() => {
      useCacheFilter(props, searchForm);
      emit('update:modelValue', searchForm.value);
    });
  };

  // 字段属性
  const getFormFieldProps = (fieldName, props, label) => {
    const formFieldConfig = getConfig('tableHeader');
    // 处理日期选择器范围筛选时，endtime为23:59:59
    let propsData = { ...props };
    if (fieldName === 'el-date-picker') {
      if ((props.type === 'daterange' || props.type === 'daterange') && !props.defaultTime) {
        propsData.defaultTime = [new Date(2000, 1, 1, 0, 0, 0), new Date(2000, 2, 1, 23, 59, 59)];
      }
    }
    propsData.placeholder =
      propsData.placeholder || (SelectComponent.includes(fieldName) ? `请选择${label}` : `请输入${label}`);

    return {
      ...formFieldConfig[fieldName],
      ...propsData,
    };
  };

  return {
    searchForm,
    clearSearch,
    handleSearch,
    getFormFieldProps,
    handleCheckBoxSearch,
  };
}
