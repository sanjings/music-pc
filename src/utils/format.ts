import { ISingerData } from '/typings/index';

/**
 * 格式化数量
 * @param {Number} count 
 */
export const formatCount = (count: number): string | number => {
  if (count < 0) return '';
  if (count >= 100000000) {
    return (count / 100000000).toFixed(1) + '亿'
  }
  if (count >= 10000) {
    return (count / 10000).toFixed(1) + '万'
  }
  return count;
}

/**
 * 给小于10的数字补上0
 * @param {Number} num 
 */
export const formatNumber = (num: number): string | number => {
  const n = num.toString();
  return n[1] ? n : '0' + n;
}

/**
 * 格式化歌手名字
 * @param {Array} singerList 
 */
export const formatSingerName = (singerList: ISingerData[]): string => {
  return singerList.map(item => item.name).join(' / ');
}

/**
 * 组装歌曲的url
 * @param {Number} id 
 */
export const formatSongUrl = (id: number): string => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
}

/**
 * 转换歌曲播放时间
 * @param {Number} interval 
 */
export const formatPlayTime = (interval: number): string => {
  interval = interval | 0; // 向下取整
  const minute = (interval / 60) | 0;
  const second = (interval % 60).toString().padStart(2, "0");
  return `${minute}:${second}`;
};