import { cacheFilter } from 'packages/utils/searchCache';
import backfillFilter from 'packages/utils/getTableFilterCache';
const CACHE_NAME = 'YUN-TABLE-CACHE';
const useCacheFilter = (props, filterData, currentInstance) =>
  cacheFilter(props, filterData, currentInstance, CACHE_NAME);
const useBackfillFilter = (props, emit, currentInstance) => {
  const cacheFields = backfillFilter(props, currentInstance);
  if (cacheFields && Object.keys(cacheFields).length) {
    emit('update:modelValue', cacheFields);
  }
};
export { useCacheFilter, useBackfillFilter };
