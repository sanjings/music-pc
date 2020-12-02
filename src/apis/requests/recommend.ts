import { ajaxGet } from '../ajax';
import { GET_BANNERS, GET_HOT_PLAYLIST } from './../url';
import { IAlbumData } from '/@/typings';

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
  return ajaxGet(GET_HOT_PLAYLIST, { limit }).then(res => {
    return {
      ...res,
      result: res.result.map((item: IAlbumData) => {
        return {
          ...item,
          coverImgUrl: item.picUrl
        }
      })
    }
  });
}

export {
  getBannersRequest,
  getHotPlayListRequest
}