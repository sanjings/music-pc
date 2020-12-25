import { ISong } from '/typings/index';
import { useStore } from 'vuex';
import { SET_CURRENT_INDEX, SET_PLAY_LIST, DELETE_SONG } from '/store/player/actionTypes';
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
  const handleClickPlay = (e: MouseEvent, playList?: ISong[]): void => {
    const target = e.target as HTMLElement;
    const index = target.dataset.playIndex;
    if (index !== undefined) {
      playList && store.commit(SET_PLAY_LIST, deepClone(playList));
      store.commit(SET_CURRENT_INDEX, Number(index));
    }
  };

  /**
   * 播放指定歌曲
   */
  const handleClickDelete = (e: MouseEvent): void => {
    const target = e.target as HTMLElement;
    const index = target.dataset.deleteIndex;
    if (index !== undefined) {
      store.commit(DELETE_SONG, Number(index));
    }
  };

  return {
    handleClickPlayAll,
    handleClickPlay,
    handleClickDelete
  };
}

export default usePlay;