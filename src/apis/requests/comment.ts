import { IQueryParams } from '/pages/Discover/Rank/typing';
import { ajaxGet } from '../ajax';
import { GET_PLAYLIST_COMMENT } from '../url';

/**
 * 请求歌单评论数据
 */
const getPlaylistCommentRequest = (params: IQueryParams) => {
  return ajaxGet(GET_PLAYLIST_COMMENT, params);
}



export {
  getPlaylistCommentRequest
}