import { SET_PLAYING_STATUS, SET_CURRENT_INDEX, SET_CURRENT_SONG, SET_PLAY_LIST, SET_SHOW_PLAY_LIST, DELETE_SONG } from './actionTypes';
import { ISong } from '/typings/index';
import { IPlayerState } from './state';

export default {
  [SET_PLAYING_STATUS](state: IPlayerState, payload: boolean) {
    state.playingStatus = payload;
  },
  [SET_CURRENT_INDEX](state: IPlayerState, payload: number) {
    state.currentIndex = Number(payload);
  },
  [SET_CURRENT_SONG](state: IPlayerState, payload: ISong) {
    state.currentSong = payload;
  },
  [SET_PLAY_LIST](state: IPlayerState, payload: ISong[]) {
    state.playList = payload;
  },
  [SET_SHOW_PLAY_LIST](state: IPlayerState, payload: boolean) {
    state.showPlayList = payload;
  },
  [DELETE_SONG](state: IPlayerState, index: number) {
    const { playList, currentIndex } = state;
    const newPlayList = playList.filter((item, idx) => index !== idx);
    state.playList = newPlayList;
    if (index < currentIndex) {
      state.currentIndex--;
    }
  }
};
