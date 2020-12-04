export interface ILinkItem {
  readonly title: string;
  readonly link: string;
}

export interface IHeaderNav extends ILinkItem {
  readonly isSelf: boolean;
}

export type AreaType = 'ALL' | 'ZH' | 'EA' | 'KR' | 'JP';

export interface IArea {
  name: string;
  value: AreaType;
}

export interface IPlaylistCat {
  name: string;
  value: string;
}

export interface ISingerCategories {
  title: string;
  area: number;
  subList: Array<{title: string; type: string | number;}>
}