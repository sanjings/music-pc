export interface IUnknowObject {
  [key: string]: any;
}

export type SizeType = 'small' | 'default' | 'large';

// 作者
export interface ICreator extends IUnknowObject {
  nickName: string
}

// 歌曲列表
export interface ITracks extends IUnknowObject {
  id: number;
  name: string;
  dt: number;
}

// 歌手
export interface ISingerData extends IUnknowObject {
  id: number;
  name: string;
  img1v1Url: string;
  alias: Array<string | undefined>;
}

// 歌单
export interface IPlayData extends IUnknowObject {
  id: number;
  name: string;
  copywriter?: string;
  creator?: ICreator;
  coverImgUrl: string;
  playCount: number,
  tracks?: null | ITracks[]
}

// 专辑
export interface IAlbumData extends IUnknowObject {
  id: number;
  name: string;
  artists?: ISingerData[];
  picUrl: string;
}


export interface IRankData extends IPlayData {
  ToplistType?: string;
  updateFrequency: string;
  subscribedCount: number;
  shareCount: number;
  commentCount: number;
}

export interface IUser extends IUnknowObject {
  avatarUrl: string;
  nickname: string;
}