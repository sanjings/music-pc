import { IQueryParams } from 'pages/Discover/Singers/typing';
import { ajaxGet } from '@/utils/http';
import { GET_RECOM_SINGERS, GET_SINGER_LIST, GET_SINGER_DETAIL } from '@/configs/api';

/**
 * 请求推荐歌手数据
 * @param limit 列表长度
 */
export const httpGetRecomSingers = (limit: number) => {
  return ajaxGet(GET_RECOM_SINGERS, { limit });
};

/**
 * 请求歌手列表数据
 */
export const httpGetSingerList = (params: IQueryParams) => {
  return ajaxGet(GET_SINGER_LIST, params);
};

/**
 * 请求歌手详情数据
 */
export const httpGetSingerDetail = (id: number) => {
  return ajaxGet(GET_SINGER_DETAIL, { id });
};
