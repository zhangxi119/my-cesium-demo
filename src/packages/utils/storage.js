export default {
  setItem(key, item) {
    let stringifyItem;
    try {
      stringifyItem = JSON.stringify(item);
    } catch (error) {
      stringifyItem = '';
    } finally {
      window.localStorage.setItem(key, stringifyItem);
    }
  },
  getItem(key) {
    let item;
    try {
      const stringifyItem = window.localStorage.getItem(key);
      item = JSON.parse(stringifyItem);
    } catch (erorr) {
      item = null;
    }
    return item;
  },
  removeItem(key) {
    window.localStorage.removeItem(key);
  },
};
export const sessionStorage = {
  setItem(key, item) {
    let stringifyItem;
    try {
      stringifyItem = JSON.stringify(item);
    } catch (error) {
      stringifyItem = '';
    } finally {
      window.sessionStorage.setItem(key, stringifyItem);
    }
  },
  getItem(key) {
    let item;
    try {
      const stringifyItem = window.sessionStorage.getItem(key);
      item = JSON.parse(stringifyItem);
    } catch (erorr) {
      item = null;
    }
    return item;
  },
  removeItem(key) {
    window.sessionStorage.removeItem(key);
  },
};
