import { IUnknowObject } from '/@/typings/index';

export interface IBannerData extends IUnknowObject {
  imageUrl: string;
  targetId: number
}

export interface IState {
  bannerData: IBannerData[];
}