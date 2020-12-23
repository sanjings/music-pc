import { ISong } from '/typings/index';
import { useStore } from 'vuex';
import { SET_CURRENT_INDEX, SET_PLAY_LIST } from '/store/player/actionTypes';
import { deepClone } from '/utils/tool';

const usePlay = () => {
  const store = useStore();
  /**
   * 播放整个列表，从第一首歌开始播放
   */
  const handleClickPlayAll = (playList: ISong[]): void => {
    store.commit(SET_PLAY_LIST, deepClone(playList));
    store.commit(SET_CURRENT_INDEX, 0);
  };

  /**
   * 播放指定歌曲
   */
  const handleClickPlay = (e: MouseEvent, playList: ISong[]): void => {
    const target = e.target as HTMLElement;
    if (target.className.includes('icon-play-circle')) {
      const index = target.dataset.index;
      if (index === undefined) return;
      store.commit(SET_PLAY_LIST, deepClone(playList));
      store.commit(SET_CURRENT_INDEX, index);
    }
  };

  return {
    handleClickPlayAll,
    handleClickPlay
  };
}

export default usePlay;