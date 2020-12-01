import { ajaxGet } from '../ajax';
import { GET_HOT_SINGER } from './../url';

/**
 * 请求热门歌手数据
 * @param {Number} limit 列表长度
 */
const getHotSingerRequest = (limit: number) => {
  return ajaxGet(GET_HOT_SINGER, { limit });
}

export {
  getHotSingerRequest
}