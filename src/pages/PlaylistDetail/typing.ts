import { IComment } from "components/PlaylistInfo/typing";
import { IPlayData, IRankData } from "@/typings";

export interface IQueryParams {
  id: number;
  limit: number;
  offset: number;
}
export interface IState {
  queryParams: IQueryParams;
  detailData: null | IRankData;
  commentList: IComment[];
  relatedPlaylist: IPlayData[];
}