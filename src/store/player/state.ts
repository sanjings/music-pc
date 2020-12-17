import { ISong } from '/typings/index';

export interface IState {
  playingStatus: boolean;
  currentIndex: number;
  currentSong: ISong | null;
  playList: ISong[];
  showPlayList: boolean;
}

const state: IState = {
  playingStatus: false,
  currentIndex: 0,
  currentSong: null,
  playList: [
    {
      id: 1498342485,
      name: '耗尽',
      dt: 259199,
      al: {
        id: 98799011,
        name: '耗尽',
        picUrl: 'https://p2.music.126.net/yITtaf5rX2hOXQSBn60opA==/109951165498613448.jpg'
      },
      ar: [
        {
          id: 5781,
          name: '薛之谦'
        }
      ]
    },
    {
      id: 1463165983,
      name: '天外来物',
      dt: 257212,
      al: {
        id: 92510920,
        name: '天外来物',
        picUrl: 'https://p1.music.126.net/HvB44MNINoLar8HFbRjIGQ==/109951165142435842.jpg'
      },
      ar: [
        {
          id: 5781,
          name: '薛之谦'
        }
      ]
    }
  ],
  showPlayList: false
}

export default state;