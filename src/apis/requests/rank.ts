import { ajaxGet } from '../ajax';
import { GET_PLAYLIST_DETAIL } from '../url';

/**
 * 请求排行榜详情数据
 * @param {Number} id 排行榜id
 */
const getRankDetailRequest = (id: number) => {
  return ajaxGet(GET_PLAYLIST_DETAIL, { id });
}

export {
  getRankDetailRequest
}