/**
 * 防抖函数
 * @param fn 回调函数
 * @param delayTime 延迟执行毫秒数
 */
const debounce = (fn: Function, delayTime: number = 300) => {
  let timer: NodeJS.Timeout | null = null;

  return function (this: any, ...args: any) {
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

/**
 * 懒加载函数
 * @param {domObject}  oImages img标签的dom集合  
 * @param {domObject} containnerEl 滚动的容器，默认为document.documentElement
 * @return {Function} 返回懒加载函数
 */
const imgLazyload = (oImages: HTMLCollection, containerEl: HTMLElement = document.documentElement) => {
  const LEN: number = oImages.length;
  let index: number = 0; // 计算已经加载了的图片数量

  // 如果容器不是document，则给容器加上相对定位，用于获取图片到容器顶部的距离
  if (containerEl !== document.documentElement) {
    containerEl.style.position = 'relative';
  }

  return () => {
    const viewHeight: number = containerEl.clientHeight,  // 容器的视口高度
          scrollTop: number = containerEl.scrollTop; // 滚动条距离容器顶部的高度

    for (let i = index; i < LEN; i++) {
      const imgItem = oImages[i] as HTMLImageElement;

      // 如果图片距离容器顶部的高度小于容器的视口高度与滚动条滚动的距离， 就把图片的地址赋值给src属性，同时index+1
      if (imgItem.offsetTop < viewHeight + scrollTop) {
        
        imgItem.src = imgItem.dataset.src as string;
        index++;
      }
    }
  }
}

export { debounce, deepClone, completeSongUrl, imgLazyload };
