/**
 * @description 修改/添加--tableconfig--服务端存储缓存操作列
 * @param http  axios实例
 * @param data  请求参数
 * @api https://yapi.ops.yunlizhi.cn/project/10/interface/api/47624
 */
export function updateTableConfig(http, data) {
  return http.request({
    url: `/bfs-user/memory/upsert`,
    method: 'POST',
    data,
  });
}
