import { IUnknowObject, IPlayData, IAlbumData, ISingerData } from '/@/typings/index';

export interface IBannerData extends IUnknowObject {
  imageUrl: string;
  targetId: number
}

export interface IState {
  bannerList: IBannerData[];
  hotPlayList: IPlayData[];
  albumList: IAlbumData[];
  singerList: ISingerData[];
}