// idb.js
import { openDB } from 'idb';

const dbPromise = openDB('yourDatabase', 1, {
  upgrade(db) {
    const store = db.createObjectStore('yourStore', {
      keyPath: 'id',
      autoIncrement: true,
    });
    store.createIndex('name', 'name', { unique: false });
    // 创建其他索引
  },
});

export default {
  async get(key) {
    return (await dbPromise).get('yourStore', key);
  },
  async set(key, val) {
    return (await dbPromise).put('yourStore', val, key);
  },
  async delete(key) {
    return (await dbPromise).delete('yourStore', key);
  },
  async clear() {
    return (await dbPromise).clear('yourStore');
  },
  async keys() {
    return (await dbPromise).getAllKeys('yourStore');
  },
};
