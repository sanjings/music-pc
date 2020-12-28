import { ISingerData } from '/typings/index';
import dayjs from 'dayjs';

export default {
  /**
   * 格式化时间
   * @param date
   * @param type 时间格式
   */
  formatDate(date: number | Date | string, type: string = 'YYYY-MM-DD'): string {
    if (!date) return '';
    return dayjs(date).format(type);
  },
  /**
   * 格式化歌手名字
   * @param {Array} singerList
   */
  formatSingerName(singerList: ISingerData[]): string {
    return singerList.map(item => item.name).join(' / ');
  },
  /**
   * 格式化数量
   * @param {Number} count
   */
  formatCount(count: number): string | number {
    if (count < 0) return '';
    if (count >= 100000000) {
      return (count / 100000000).toFixed(1) + '亿';
    }
    if (count >= 10000) {
      return (count / 10000).toFixed(1) + '万';
    }
    return count;
  },
  /**
   * 转换歌曲播放时间
   * @param {Number} interval 毫秒
   */
  formatPlayTime(interval: number): string {
    interval = interval | 0; // 向下取整
    const minute = ((interval / 60) | 0).toString().padStart(2, '0');
    const second = (interval % 60).toString().padStart(2, '0');
    return `${minute}:${second}`;
  }
};
