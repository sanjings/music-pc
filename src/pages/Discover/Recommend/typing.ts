import { IUnknowObject } from '/@/typings/index';
import { EChangeType } from '/components/Carousel/typing';

export interface IBannerData extends IUnknowObject {
  imageUrl: string;
  targetId: number
}

export interface IState {
  bannerData: IBannerData[];
}

export interface IBannerInstance {
  autoplay: boolean;
  curIndex: number;
  interval: number;
  listData: IBannerData[];
  changeItem: (type: EChangeType) => void;
}