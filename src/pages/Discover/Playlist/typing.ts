import { IPlayData, IUnknowObject } from "/@/typings";


export interface ICatSub {
  name: string; 
  category: number; 
}
export interface ICatData extends IUnknowObject {
  name: string;
  children: Array<ICatSub>;
}

export interface IQueryParams {
  cat: string;
  limit: number;
  offset: number;
}

export interface IState {
  queryParams: IQueryParams;
  catList: ICatData[];
  playList: IPlayData[];
  listTotal: number;
}