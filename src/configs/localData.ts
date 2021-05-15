import { IPlaylistCat, IArea, IHeaderNav, ILinkItem, ISingerCategories, IAlphaTypes } from "../typings/localData";

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
    name: '全部',
    value: 'ALL'
  },
  {
    name: '华语',
    value: 'ZH'
  },
  {
    name: '欧美',
    value: 'EA'
  },
  {
    name: '韩国',
    value: 'KR'
  },
  {
    name: '日本',
    value: 'JP'
  },
]

export const playlistCatList: IPlaylistCat[] = [
  {
    name: '华语',
    value: '华语'
  },
  {
    name: '流行',
    value: '流行'
  },
  {
    name: '摇滚',
    value: '摇滚'
  },
  {
    name: '民谣',
    value: '民谣'
  },
  {
    name: '电子',
    value: '电子'
  }
]

export const singerCategories: ISingerCategories[] = [
  {
    title: '推荐',
    area: -1,
    subList: [
      {
        title: '推荐歌手',
        type: 'RECOM'
      }, 
      {
        title: '入驻歌手',
        type: -1
      }
    ]
  },
  {
    title: '华语',
    area: 7,
    subList: [
      {
        title: '华语男歌手',
        type: 1
      }, 
      {
        title: '华语女歌手',
        type: 2
      },
      {
        title: '华语组合/乐队',
        type: 3
      }
    ]
  },
  {
    title: '欧美',
    area: 96,
    subList: [
      {
        title: '欧美男歌手',
        type: 1
      }, 
      {
        title: '欧美女歌手',
        type: 2
      },
      {
        title: '欧美组合/乐队',
        type: 3
      }
    ]
  },
  {
    title: '日本',
    area: 8,
    subList: [
      {
        title: '日本男歌手',
        type: 1
      }, 
      {
        title: '日本女歌手',
        type: 2
      },
      {
        title: '日本组合/乐队',
        type: 3
      }
    ]
  },
  {
    title: '韩国',
    area: 16,
    subList: [
      {
        title: '韩国男歌手',
        type: 1
      }, 
      {
        title: '韩国女歌手',
        type: 2
      },
      {
        title: '韩国组合/乐队',
        type: 3
      }
    ]
  },
  {
    title: '其他',
    area: 0,
    subList: [
      {
        title: '其他男歌手',
        type: 1
      }, 
      {
        title: '其他女歌手',
        type: 2
      },
      {
        title: '其他组合/乐队',
        type: 3
      }
    ]
  }
]

// 歌手首字母
export const alphaTypes: IAlphaTypes[] = [
  {
    value: -1,
    name: "热门"
  },
  {
    value: "A",
    name: "A"
  },
  {
    value: "B",
    name: "B"
  },
  {
    value: "C",
    name: "C"
  },
  {
    value: "D",
    name: "D"
  },
  {
    value: "E",
    name: "E"
  },
  {
    value: "F",
    name: "F"
  },
  {
    value: "G",
    name: "G"
  },
  {
    value: "H",
    name: "H"
  },
  {
    value: "I",
    name: "I"
  },
  {
    value: "J",
    name: "J"
  },
  {
    value: "K",
    name: "K"
  },
  {
    value: "L",
    name: "L"
  },
  {
    value: "M",
    name: "M"
  },
  {
    value: "N",
    name: "N"
  },
  {
    value: "O",
    name: "O"
  },
  {
    value: "P",
    name: "P"
  },
  {
    value: "Q",
    name: "Q"
  },
  {
    value: "R",
    name: "R"
  },
  {
    value: "S",
    name: "S"
  },
  {
    value: "T",
    name: "T"
  },
  {
    value: "U",
    name: "U"
  },
  {
    value: "V",
    name: "V"
  },
  {
    value: "W",
    name: "W"
  },
  {
    value: "X",
    name: "X"
  },
  {
    value: "Y",
    name: "Y"
  },
  {
    value: "Z",
    name: "Z"
  }
];