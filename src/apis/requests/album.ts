import { IQueryParams } from './../../pages/Discover/Album/typing';
import { ajaxGet } from '../ajax';
import { GET_HOT_ALBUM, GET_ALBUM_BY_AREA, GET_ALBUM_DETAIL } from './../url';

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

/**
 * 请求歌单详情数据
 * @param {Number} id 歌单id
 */
const getAlbumDetailRequest = (id: number) => {
  return ajaxGet(GET_ALBUM_DETAIL, { id });
}

export {
  getHotAlbumRequest,
  getNewAlbumListRequest,
  getAlbumDetailRequest
}