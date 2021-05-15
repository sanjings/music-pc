import { IQueryParams } from 'pages/Discover/Album/typing';
import { ajaxGet } from '@/utils/http';
import { GET_HOT_ALBUM, GET_ALBUM_BY_AREA } from '@/configs/api';

/**
 * 请求热门专辑数据
 */
export const httpGetHotAlbum = () => {
  return ajaxGet(GET_HOT_ALBUM);
};

/**
 * 请求最新专辑数据
 */
export const httpGetNewAlbumList = (params: IQueryParams) => {
  return ajaxGet(GET_ALBUM_BY_AREA, params);
};
