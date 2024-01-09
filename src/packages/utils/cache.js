export default class LRUCache {
  constructor(length=1) {
    if (length < 1) throw new Error('长度不能小于1');
    this.length = length; // 存储长度
    this.data = new Map(); // 存储数据
  }
  // 单例模式
  static getInstance(length) {
    if (!LRUCache._instance) {
      LRUCache._instance = new LRUCache(length);
    }
    return LRUCache._instance;
  }
  setData(data){
    this.data = data;
  }
  getData(){
    return this.data;
  }
  set(key, value) {
    const data = this.data;
    // 如果存在该对象,则直接删除
    if (data.has(key)) {
      data.delete(key);
    }
    // 将数据对象添加到map中
    data.set(key, value);
    if (data.size > this.length) {
      // 如果map长度超过最大值,则取出map中的第一个元素,然后删除
      const delKey = data.keys().next().value;
      data.delete(delKey);
    }
  }
  get(key) {
    const data = this.data;
    // 数据map中没有key对应的数据,则返回null
    if (!data.has(key)) return null;
    const value = data.get(key);
    // 返回数据前,先删除原数据,然后在添加,就可以保持在最新
    data.delete(key);
    data.set(key, value);
    return value;
  }
}
