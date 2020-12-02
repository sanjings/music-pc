import { ajaxGet } from '../ajax';
import { GET_RANK_LIST } from '../url';

/**
 * 请求排行榜数据
 */
const getRankListRequest = () => {
  return ajaxGet(GET_RANK_LIST);
}

export {
  getRankListRequest
}