import { ajaxGet } from '../ajax';
import { GET_PLAYLIST_CATLIST, GET_PLAYLIST_BY_CAT } from './../url';
import { IPlayData } from '/@/typings';
import { IQueryParams } from '/pages/Discover/Playlist/typing';

/**
 * 请求歌单分类数据
 */
const getCatListRequest = () => {
  return ajaxGet(GET_PLAYLIST_CATLIST);
}

/**
 * 请求分类歌单数据
 */
const getPlaylistRequest = (params: IQueryParams) => {
  return ajaxGet(GET_PLAYLIST_BY_CAT, params).then(res => {
    return {
      ...res,
      playlists: res.playlists.map((item: IPlayData) => ({
        ...item,
        copywriter: item.creator ? item.creator.nickname : ''
      }))
    }
  });
}

export {
  getCatListRequest,
  getPlaylistRequest
}