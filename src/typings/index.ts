export interface IUnknowObject {
  [key: string]: any;
}

export interface IPlayData extends IUnknowObject {
  id: number;
  name: string;
  copywriter: string;
  picUrl: string;
  playCount: number
}

export interface ISingerData extends IUnknowObject {
  id: number;
  name: string;
  picUrl: string;
  alias: Array<string | undefined>;
  company?: string;
}

export interface IAlbumData extends IUnknowObject {
  id: number;
  name: string;
  artists: ISingerData[];
  picUrl: string;
}