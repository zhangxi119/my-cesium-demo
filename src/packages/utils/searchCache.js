// 抽屉、弹框内的不缓存
const DOM_NAME = ['ElDialog', 'YunDialog', 'YunDrawer', 'ElDrawer'];
import { sessionStorage } from './storage';

const isShouldCache = (currentInstance) => {
  if (!currentInstance) return true;
  let isFlag = true;
  const getParentClassName = (parentInstance) => {
    if (!parentInstance) return;
    const type = parentInstance.type;
    if (!type.name)
      return;
    if (type.name) {
      if (DOM_NAME.includes(type.name)) {
        isFlag = false;
      } else {
        getParentClassName(parentInstance.parent);
      }
    }
  };
  getParentClassName(currentInstance);
  return isFlag;
};
const cacheFilter = (props, filterData, currentInstance, CACHE_NAME) => {
  if(!isShouldCache(currentInstance)) return;
  const pathKey = window.location.href;
  const cacheVal = sessionStorage.getItem(CACHE_NAME) || {};
  if (props.filterCacheName) {
    if (cacheVal[pathKey]) {
      cacheVal[pathKey][props.filterCacheName] = filterData.value;
    } else {
      cacheVal[pathKey] = {};
      cacheVal[pathKey][props.filterCacheName] = filterData.value;
    }
  } else {
    cacheVal[pathKey] = filterData.value;
  }
  sessionStorage.setItem(CACHE_NAME, cacheVal);
};
export {
  isShouldCache,
  cacheFilter,
};
