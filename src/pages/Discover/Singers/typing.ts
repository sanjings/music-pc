import { ISingerData } from "/@/typings";

export interface IQueryParams {
  type?: number | string;
  area?: number;
  limit?: number;
  initial?: number | string;
}

export interface IState {
  curTitle: string;
  queryParams: IQueryParams
  singerList: ISingerData[]
}