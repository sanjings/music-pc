export interface IHeaderNavList {
  readonly name: string;
  readonly link: string;
  readonly isSelf: boolean;
}

export const headerNavList: IHeaderNavList[] = [
  { name: '发现音乐', link: '/discover', isSelf: true },
  { name: '我的音乐', link: '/my', isSelf: true },
  { name: '商城', link: '/friend', isSelf: true },
  { name: '朋友', link: 'https://music.163.com/store/product', isSelf: false },
  { name: '音乐人', link: 'https://music.163.com/nmusician/web/index#/', isSelf: false },
  { name: '下载客户端', link: 'https://music.163.com/#/download', isSelf: false }
]