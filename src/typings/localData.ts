export interface ILinkItem {
  readonly title: string;
  readonly link: string;
}

export interface IHeaderNav extends ILinkItem {
  readonly isSelf: boolean;
}

export enum AreaEnum {
  ALL = 'ALL',
  ZH = 'ZH',
  EA = 'EA',
  KR = 'KR',
  JP = 'JP'
}

export interface IArea {
  title: string,
  value: AreaEnum
}

export interface ISingerCategories {
  title: string;
  area: number;
  subList: Array<{title: string; type: string | number;}>
}