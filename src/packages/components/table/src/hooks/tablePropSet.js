import { cloneDeep } from "lodash";

/**
 *
 * @param {表格列对象} columns
 * @param {filterData和searchData} filterData
 */
export function useTablePropMerge(columns, filterSearchData) {
  if(!columns || columns.length === 0) {
    return {};
  }
  if(!filterSearchData || filterSearchData.length === 0){
    return {};
  }
  let obj = {...filterSearchData};
  const localColumns = cloneDeep(columns);
  const localData = cloneDeep(filterSearchData);
  Object.keys(localData).forEach(itemKey => {
    let keyValue = localData[itemKey];
    localColumns.forEach((item) => {
      if(item?.prop === itemKey) {
        if(item?.overProp){
          obj[item.overProp] = keyValue;
        } else {
          obj[item.prop] = keyValue;
        }
      }
    });
  });
  return obj;
}
