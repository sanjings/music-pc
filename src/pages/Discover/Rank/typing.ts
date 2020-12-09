import { IRankData } from './../../../typings/index';

export interface IRankItem {
  name: string;
  subList: IRankData[];
}

export interface IQueryParams {
  id: number;
  limit: number;
  offset: number;
}
export interface IState {
  queryParams: IQueryParams;
  rankList: IRankItem[];
  rankDetail: null | IRankData;
  commentList: any[];
}