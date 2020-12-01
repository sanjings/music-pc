import { ajaxGet } from '../ajax';
import { GET_NEW_ALBUM } from './../url';

/**
 * 请求最新专辑数据
 */
const getNewAlbumRequest = () => {
  return ajaxGet(GET_NEW_ALBUM);
}

export {
  getNewAlbumRequest
}