import { IQueryParams } from './../../pages/Discover/Singers/typing';
import { ajaxGet } from '../ajax';
import { GET_RECOM_SINGERS, GET_SINGER_LIST, GET_SINGER_DETAIL } from './../url';

/**
 * 请求推荐歌手数据
 * @param limit 列表长度
 */
const getRecomSingersRequest = (limit: number) => {
  return ajaxGet(GET_RECOM_SINGERS, { limit });
}

/**
 * 请求歌手列表数据
 */
const getSingerListRequest = (params: IQueryParams) => {
  return ajaxGet(GET_SINGER_LIST, params);
}

/**
 * 请求歌手详情数据
 */
const getSingerDetailRequest = (id: number) => {
  return ajaxGet(GET_SINGER_DETAIL, { id });
}

export {
  getRecomSingersRequest,
  getSingerListRequest,
  getSingerDetailRequest
}