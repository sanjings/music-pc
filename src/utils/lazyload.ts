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

export default imgLazyload;