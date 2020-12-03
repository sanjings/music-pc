import { IRankData } from './../../../typings/index';

export interface IRankItem {
  name: string;
  subList: IRankData[]
}

export interface IState {
  rankList: IRankItem[]
}