import { isRef, ref } from 'vue';
import moment from 'moment';
/**
 * 清楚请求参数中为空，并返回
 * @param params
 * @returns {*}
 */
export function clearReqEmptyField(params) {
  // eslint-disable-next-line no-restricted-syntax,guard-for-in
  for (const i in params) {
    const data = params[i];
    // eslint-disable-next-line no-mixed-operators
    if (data === '' || Array.isArray(data) && data.length === 0) {
      // eslint-disable-next-line no-param-reassign
      delete params[i];
    }
  }
}

export function getRef(value) {
  return isRef(value) ? value : ref(value);
}


export function formatDate(list) {
  // eslint-disable-next-line no-restricted-syntax,guard-for-in
  for (const i in list) {
    // eslint-disable-next-line no-restricted-syntax
    for (const j in list[i]) {
      if (j.includes('time') || j.includes('Time')) {
        if (list[i][j] && !list[i][j].toString().includes(':')) {
          list[i][j] = moment(list[i][j]).format('YYYY-MM-DD HH:mm:ss');
        }
      }
    }
  }
}