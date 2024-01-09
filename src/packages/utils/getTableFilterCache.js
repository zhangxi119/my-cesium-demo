import { sessionStorage } from './storage';
import { isShouldCache } from './searchCache';
const CACHE_NAME = 'YUN-TABLE-CACHE';
const backfillFilter = (props, currentInstance) => {
  if(!isShouldCache(currentInstance)) return;
  // 是否内嵌
  const pathKey = window.location.href;
  let cacheFields = {};
  let returnCache = {};
  const cacheVal = sessionStorage.getItem(CACHE_NAME);
  // console.log(cacheVal);
  if (cacheVal) {
    if (props.filterCacheName && cacheVal[pathKey]) {
      cacheFields = cacheVal[pathKey][props.filterCacheName];
    } else {
      cacheFields = cacheVal[pathKey];
    }
    if (cacheFields && Object.keys(cacheFields).length) {
      returnCache = cacheFields;
    }
  }
  return returnCache;
};
export default backfillFilter;
