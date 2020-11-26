import { ajaxGet } from '../ajax';
import { GET_BANNERS } from './../url';

export enum EBannerType {
  PC = 0,
  ANDROID = 1,
  IPHONE = 2,
  IPAD = 3
}

/**
 * 请求banner数据
 * @param {Enum} type 终端类型
 */
const getBannersRequest = (type: EBannerType) => {
  return ajaxGet(GET_BANNERS, { type });
}

export {
  getBannersRequest
}