import { ajaxGet } from '@/utils/http';
import { GET_BANNERS, GET_HOT_PLAYLIST } from '@/configs/api';
import { IAlbumData } from '@/typings';

export enum BannerTypeEnum {
  PC = 0,
  ANDROID = 1,
  IPHONE = 2,
  IPAD = 3
}

/**
 * 请求banner数据
 * @param type 终端类型
 */
export const httpGetBanners = (type: BannerTypeEnum) => {
  return ajaxGet(GET_BANNERS, { type });
};

/**
 * 请求热门歌单数据
 * @param limit 列表长度
 */
export const httpGetHotPlayList = async (limit: number) => {
  const res = await ajaxGet(GET_HOT_PLAYLIST, { limit });
  return {
    ...res,
    result: res.result.map((item: IAlbumData) => {
      return {
        ...item,
        coverImgUrl: item.picUrl
      };
    })
  };
};
