export interface IHeaderNav {
  readonly title: string;
  readonly link: string;
  readonly isSelf: boolean;
}

export interface IDiscoverMenu {
  readonly title: string;
  readonly link: string;
}

export const headerNavList: IHeaderNav[] = [
  { title: '发现音乐', link: '/discover', isSelf: true },
  { title: '我的音乐', link: '/my', isSelf: true },
  { title: '朋友', link: '/friend', isSelf: true },
  { title: '商城', link: 'https://music.163.com/store/product', isSelf: false },
  { title: '音乐人', link: 'https://music.163.com/nmusician/web/index#/', isSelf: false },
  { title: '下载客户端', link: 'https://music.163.com/#/download', isSelf: false }
]

export const discoverMenu: IDiscoverMenu[] = [
  {
    title: "推荐",
    link: "/discover/recommend"
  },
  {
    title: "排行榜",
    link: "/discover/rank"
  },
  {
    title: "歌单",
    link: "/discover/songs"
  },
  {
    title: "主播电台",
    link: "/discover/djradio"
  },
  {
    title: "歌手",
    link: "/discover/singers"
  },
  {
    title: "新碟上架",
    link: "/discover/album"
  }
]