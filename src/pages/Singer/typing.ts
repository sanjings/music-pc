import { ISingerData, ISong } from '/typings/index';

export interface IState {
  singerInfo: ISingerData | null;
  hotSongs: ISong[];
  curComponent: string;
}