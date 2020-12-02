export interface IUnknowObject {
  [key: string]: any;
}

// 作者
export interface ICreator extends IUnknowObject {
  nickName: string
}

// 歌曲列表
export interface ITracks extends IUnknowObject {
  id: number;
  name: string;
}

// 歌手
export interface ISingerData extends IUnknowObject {
  id: number;
  name: string;
  picUrl: string;
  alias: Array<string | undefined>;
  company?: string;
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
}