import { ref, onMounted } from 'vue';
import imgLazyload from '/utils/lazyload';
import { debounce } from '/utils/tool';

const useLazyload = () => {
  const listRef = ref<HTMLElement | null>(null);

  onMounted((): void => {
    initLazyload();
  });

  /**
     * 初始化图片懒加载
     */
  const initLazyload = (): void => {
    const listDom = listRef.value as HTMLElement;
    const oImages = listDom.getElementsByTagName('img');
    setTimeout(() => {
      imgLazyload(oImages)() // 首次加载显示图片
      document.removeEventListener('scroll', () => {}, false);
      document.addEventListener('scroll', debounce(imgLazyload(oImages), 50), false) // 对scroll事件做防抖处理
    }, 50);
  };

  return {
    listRef,
    initLazyload
  }
};

export default useLazyload;