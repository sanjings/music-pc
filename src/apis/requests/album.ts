import { IQueryParams } from 'pages/Discover/Album/typing';
import { ajaxGet } from '../ajax';
import { GET_HOT_ALBUM, GET_ALBUM_BY_AREA } from './../url';

/**
 * 请求热门专辑数据
 */
const getHotAlbumRequest = () => {
  return ajaxGet(GET_HOT_ALBUM);
}

/**
 * 请求最新专辑数据
 */
const getNewAlbumListRequest = (params: IQueryParams) => {
  return ajaxGet(GET_ALBUM_BY_AREA, params);
}

export {
  getHotAlbumRequest,
  getNewAlbumListRequest
}