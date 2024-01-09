export default class IndexDB {
  constructor(name) {
    this.databaseName = name;
    this.db = null;
  }

  initIndexDB(callback) {
    const request = window.indexedDB.open(this.databaseName, 1);
    request.onerror = (event) => {
      console.log(event, '数据库打开报错');
    };
    // 数据库升级触发的事件，创建数据库也会触发这个事件
    request.onupgradeneeded = (event) => {
      console.log(event, 'onupgradeneeded');
      this.db = event.target?.result || null;
      // 新建数据库以后，第一件事是新建对象仓库，先判断是否存在
      if (!this.db?.objectStoreNames.contains('webgl')) {
        this.db?.createObjectStore('webgl', { keyPath: 'id' });
      }
    };
    request.onsuccess = () => {
      this.db = request.result;
      console.log(this.db, '数据库创建成功');
      this.db?.transaction(['webgl']);
      if (typeof callback === 'function') {
        console.log('执行回调成功');
        callback();
      }
    };
  }

  setData(key, value) {
    if (!key) return;
    const objStore = this.db?.transaction(['webgl'], 'readwrite').objectStore('webgl');
    if (objStore) {
      const data = { ...value, id: key };
      const insertRequest = objStore.add({ ...data });
      insertRequest.onsuccess = function () {
        console.log('数据写入成功');
      };
      insertRequest.onerror = function () {
        console.log('数据写入失败');
      };
    }
  }

  updateData(key, value) {
    if (!key) return;
    const objStore = this.db?.transaction(['webgl'], 'readwrite').objectStore('webgl');
    if (objStore) {
      const data = { ...value, id: key };
      const insertRequest = objStore.put({ ...data });
      insertRequest.onsuccess = function () {
        console.log('数据写入成功');
      };
      insertRequest.onerror = function () {
        console.log('数据写入失败');
      };
    }
  }

  getData(key) {
    if (!key) return;
    const objStore = this.db?.transaction(['webgl'], 'readonly').objectStore('webgl');
    const res = objStore?.get(key);
    if (!res) return undefined;
    return new Promise((resolve) => {
      res.onerror = function () {
        resolve(undefined);
      };
      res.onsuccess = function (e) {
        resolve(e);
      };
    });
  }

  close() {
    console.log('断开连接缓存数据库！');
    this.db?.close();
  }
}
