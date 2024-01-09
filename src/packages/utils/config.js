import { isObject, mergeDeep } from './util';

let defaultConfig = {
  table: {
    filterCache: false,
    yunPagination: false,
    storageKey: 'TABLE_HEADER_KEYS', // 表格操作列缓存的key
    cacheSize:25, // LRU 缓存容量动态值
    serverCacheOn:false, //  是否开启服务端缓存
    axiosInstance:null, // 传入封装的axios实例-开启服务端缓存时必传
    userId:null, // serverCacheOn为true时必传
    systemCode:null,// serverCacheOn 为true开启服务端缓存时必传
  },
  tableHeader: {
    'el-date-picker': {
      valueFormat: 'x',
      clearable: true,
    },
    'el-input': {
      clearable: true,
    },
    'el-select': {
      clearable: true,
    },
    'el-cascader': {
      clearable: true,
    },
  },
  pagination: {
    pageSize: 10,
  },
  filter: {
    filterCache: false,
  },
  proTable: {
    filterCache: false,
  },
};

export function setConfig(opt) {
  if (!isObject(opt)) return;
  defaultConfig = mergeDeep(defaultConfig, opt);
}

export function getConfig(key) {
  return defaultConfig[key];
}
