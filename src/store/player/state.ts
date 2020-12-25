import { ISong } from '/typings/index';

export interface IPlayerState {
  playingStatus: boolean;
  currentIndex: number;
  currentSong: ISong | null;
  playList: ISong[];
  showPlayList: boolean;
}

const state: IPlayerState = {
  playingStatus: false,
  currentIndex: -1,
  currentSong: null,
  playList: [],
  showPlayList: false
}

export default state;