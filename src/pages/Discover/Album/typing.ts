import { IAlbumData } from "@/typings";
import { AreaType } from "@/typings/localData";

export interface IQueryParams {
  area: AreaType;
  limit: number;
  offset: number;
}

export interface IState {
  queryParams: IQueryParams;
  allAlbumList: IAlbumData[];
  hotAlbumList: IAlbumData[];
  listTotal: number;
}