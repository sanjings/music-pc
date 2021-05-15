import { ajaxGet } from '@/utils/http';
import { GET_RANK_LIST } from '@/configs/api';

/**
 * 请求排行榜数据
 */
export const httpGetRankList = () => {
  return ajaxGet(GET_RANK_LIST);
};
