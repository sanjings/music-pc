import { AreaEnum, IArea, IHeaderNav, ILinkItem } from "../typings/localData";

export const headerNavList: Array<IHeaderNav> = [
  { title: '发现音乐', link: '/discover', isSelf: true },
  { title: '我的音乐', link: '/my', isSelf: true },
  { title: '朋友', link: '/friend', isSelf: true },
  { title: '商城', link: 'https://music.163.com/store/product', isSelf: false },
  { title: '音乐人', link: 'https://music.163.com/nmusician/web/index#/', isSelf: false },
  { title: '下载客户端', link: 'https://music.163.com/#/download', isSelf: false }
]

export const discoverMenu: Array<ILinkItem> = [
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
    link: "/discover/playlist"
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

export const footerLinks: Array<ILinkItem> = [
  {
    title: "服务条款",
    link: "https://st.music.163.com/official-terms/service"
  },
  {
    title: "隐私政策",
    link: "https://st.music.163.com/official-terms/privacy"
  },
  {
    title: "儿童隐私政策",
    link: "https://st.music.163.com/official-terms/children"
  },
  {
    title: "版权投诉指引",
    link: "https://music.163.com/st/staticdeal/complaints.html"
  },
  {
    title: "意见反馈",
    link: "#"
  }
]

export const footerImages: Array<ILinkItem> = [
  {
    link: "https://web-amped.music.163.com/",
    title: "Amped Studio"
  },
  {
    link: "https://music.163.com/st/userbasic#/auth",
    title: "用户认证"
  },
  {
    link: "https://music.163.com/musician/artist",
    title: "独立音乐人"
  },
  {
    link: "https://music.163.com/web/reward",
    title: "赞赏"
  },
  {
    link: "https://music.163.com/uservideo#/plan",
    title: "视频奖励"
  }
]

export const areaList: IArea[] = [
  {
    title: '全部',
    value: AreaEnum.ALL
  },
  {
    title: '华语',
    value: AreaEnum.ZH
  },
  {
    title: '欧美',
    value: AreaEnum.EA
  },
  {
    title: '韩国',
    value: AreaEnum.KR
  },
  {
    title: '日本',
    value: AreaEnum.JP
  },
]