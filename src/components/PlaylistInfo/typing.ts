import { IUser } from "/@/typings";

export interface IComment {
  liked: boolean;
  likedCount: number;
  content: string;
  time: number;
  user: IUser;
  beReplied: { content: string; user: IUser }
}