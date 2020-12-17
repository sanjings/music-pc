import {
  SET_PLAYING_STATUS,
  SET_CURRENT_INDEX,
  SET_CURRENT_SONG,
  SET_PLAY_LIST,
  SET_SHOW_PLAY_LIST,
  DELETE_SONG
} from './actionTypes';
import { ISong } from '/typings/index';
import { IState } from './state';

export default {
  [SET_PLAYING_STATUS] (state: IState, payload: boolean) {
    state.playingStatus = payload;
  },
  [SET_CURRENT_INDEX] (state: IState, payload: number) {
    state.currentIndex = payload;
  },
  [SET_CURRENT_SONG] (state: IState, payload: ISong) {
    state.currentSong = payload;
  },
  [SET_PLAY_LIST] (state: IState, payload: ISong[]) {
    state.playList = payload;
  },
  [SET_SHOW_PLAY_LIST] (state: IState, payload: boolean) {
    state.showPlayList = payload;
  }
}