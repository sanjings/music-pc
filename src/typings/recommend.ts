import { IUnknowObject } from './index';

export interface IBannerData extends IUnknowObject {
  imageUrl: string;
  targetId: number
}

export interface IState {
  bannerData: IBannerData[];
}