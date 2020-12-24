import { ajaxGet } from '../ajax';
import { GET_LYRIC } from '../url';

/**
 * 请求歌词数据
 * @param id 歌曲Id
 */
const getLyricRequest = (id: number) => {
  return ajaxGet(GET_LYRIC, { id });
};

export { getLyricRequest };
