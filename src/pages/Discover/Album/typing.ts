import { IAlbumData } from "/@/typings";
import { AreaEnum } from "/@/typings/localData";

export interface IQueryParams {
  area: AreaEnum;
  limit: number;
  offset: number;
}

export interface IState {
  queryParams: IQueryParams;
  allAlbumList: IAlbumData[];
  hotAlbumList: IAlbumData[];
  listTotal: number;
}