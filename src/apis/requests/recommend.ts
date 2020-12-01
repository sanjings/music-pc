import { ajaxGet } from '../ajax';
import { GET_BANNERS, GET_HOT_PLAYLIST, GET_NEW_EST, GET_HOT_SINGER } from './../url';

export enum BannerTypeEnum {
  PC = 0,
  ANDROID = 1,
  IPHONE = 2,
  IPAD = 3
}

/**
 * 请求banner数据
 * @param {Enum} type 终端类型
 */
const getBannersRequest = (type: BannerTypeEnum) => {
  return ajaxGet(GET_BANNERS, { type });
}

/**
 * 请求热门歌单数据
 * @param {Number} limit 列表长度
 */
const getHotPlayListRequest = (limit: number) => {
  return ajaxGet(GET_HOT_PLAYLIST, { limit });
}

/**
 * 请求最新专辑数据
 */
const getNewEstRequest = () => {
  return ajaxGet(GET_NEW_EST);
}

/**
 * 请求热门歌手数据
 * @param {Number} limit 列表长度
 */
const getHotSingerRequest = (limit: number) => {
  return ajaxGet(GET_HOT_SINGER, { limit });
}

export {
  getBannersRequest,
  getHotPlayListRequest,
  getNewEstRequest,
  getHotSingerRequest
}