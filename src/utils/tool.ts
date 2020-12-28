/**
 * 防抖函数
 * @param fn 回调函数
 * @param delayTime 延迟执行毫秒数
 */
const debounce = (fn: Function, delayTime: number = 300) => {
  let timer: NodeJS.Timeout | null = null;

  return function (...args: any) {
    timer && clearTimeout(timer) && (timer = null);

    timer = setTimeout(() => {
      fn.apply(this, args);
    }, delayTime);
  };
};

/**
 * 简易深克隆
 * @param data 被克隆的值
 */
const deepClone = <T>(data: T): T => {
  return JSON.parse(JSON.stringify(data));
};

/**
 * 组装歌曲的url
 * @param id 歌曲Id
 */
const completeSongUrl = (id: number): string => {
  return `https://music.163.com/song/media/outer/url?id=${id}.mp3`;
};

export { debounce, deepClone, completeSongUrl };
