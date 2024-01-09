import { computed } from 'vue';
import { cloneDeep, isEmpty } from 'lodash';
export default function useTableSearchHeader(props, searchForm) {
  const searchData = computed(() => {
    const searchColums = props.columns.filter((item) => !!item.header);
    const searchFormData = cloneDeep(searchForm.value);
    const arr = [];
    // 过滤掉所有为空的数据
    Object.entries(searchFormData)
      .filter(([key, value]) => {
        if (typeof value === 'object') {
          return !isEmpty(value);
        } else if (typeof value === 'boolean') {
          return true;
        } else if (typeof value === 'number') {
          return true;
        } else {
          return !!value;
        }
      })
      .forEach(([key, value]) => {
        const searchColum = searchColums.find((item) => item.prop === key);
        if (searchColum) {
          let valueObj = {};
          valueObj[key] = value;
          const formatter = (obj) => {
            if (searchColum.header?.formatter) {
              return searchColum.header?.formatter(obj[key]);
            } else if (searchColum.formatter) {
              return searchColum.formatter(obj);
            } else if (searchColum.header.options) {
              return Array.isArray(obj[key])
                ? obj[key].map(
                    (item) =>
                      // eslint-disable-next-line max-nested-callbacks
                      searchColum.header.options.find((i) => i.value === item)?.label,
                  )
                : searchColum.header.options.find((i) => i.value === obj[key])?.label;
            } else {
              return obj[key];
            }
          };
          // 特殊处理，如果选项多选，则需要拼接返回值
          let setValue = null;
          if (value instanceof Array) {
            if (searchColum.header?.componentAttrs?.type === 'daterange') {
              setValue = value.map((val) => formatter({ [key]: val }));
              setValue = searchColum.rangeSeparator ? setValue.join(searchColum.rangeSeparator) : setValue.join(' - ');
            } else {
              setValue = formatter({ [key]: value });
            }
          } else {
            setValue = formatter({ [key]: value });
          }
          arr.push({
            key: key,
            value: Array.isArray(setValue) ? setValue.join('、') : setValue,
            label: searchColum.label,
          });
        }
      });
    return arr;
  });

  return {
    searchData,
  };
}
