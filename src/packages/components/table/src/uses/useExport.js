const exportFucName = [
  'clearSelection',
  'getSelectionRows',
  'toggleRowSelection',
  'toggleAllSelection',
  'toggleRowExpansion',
  'setCurrentRow',
  'clearSort',
  'clearFilter',
  'doLayout',
  'sort',
  'scrollTo',
  'setScrollTop',
  'setScrollLeft',
];

export default (table, props, section) => {
  const functions = exportFucName.reduce((result, funcName) => {
    result[funcName] = (...rest) => {
      return table.value[funcName]?.apply(table.value, rest);
    };
    return result;
  }, {});
  return functions;
};
