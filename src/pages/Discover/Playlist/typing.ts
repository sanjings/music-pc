import { IPlayData, IUnknowObject } from "/@/typings";

export interface ICatData extends IUnknowObject {

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