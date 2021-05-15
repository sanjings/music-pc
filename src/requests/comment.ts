import { IQueryParams } from 'pages/Discover/Rank/typing';
import { ajaxGet } from '@/utils/http';
import { GET_PLAYLIST_COMMENT } from '@/configs/api';

/**
 * 请求歌单评论数据
 */
export const httpGetPlaylistComment = (params: IQueryParams) => {
  return ajaxGet(GET_PLAYLIST_COMMENT, params);
};
