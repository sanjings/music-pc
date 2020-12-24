import { ISong } from '/typings/index';

export interface IState {
  playingStatus: boolean;
  currentIndex: number;
  currentSong: ISong | null;
  playList: ISong[];
  showPlayList: boolean;
}

const state: IState = {
  playingStatus: false,
  currentIndex: -1,
  currentSong: null,
  playList: [],
  showPlayList: false
}

export default state;