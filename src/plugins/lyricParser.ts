const timeExp: RegExp = /\[(\d{2,}):(\d{2})(?:\.(\d{2,3}))?]/g;

enum StateEnum {
  STATE_PAUSE,
  STATE_PLAYING
}

interface IHandlerParams {
  txt: string;
  lineNum: number;
}

interface ILine {
  time: number;
  txt: string;
}

export type IHandler = ({ txt, lineNum }: IHandlerParams) => void;

export default class LyricParser {
  public lines: ILine[];
  private state: StateEnum;
  public curLineIndex: number;
  private startStamp: number;
  private timer: NodeJS.Timeout | null;

  /**
   * @param {String} lyric
   * @param {Function} handler
   */
  constructor(private lyric: string, private handler: IHandler) {
    this.lines = [];
    this.state = StateEnum.STATE_PAUSE; // 播放状态
    this.curLineIndex = 0; // 当前播放歌词所在的行数
    this.startStamp = 0; // 歌曲开始的时间戳
    this.timer = null;

    this._initLines();
  }

  private _initLines(): void {
    const lines = this.lyric.split('\n');

    for (let i = 0; i < lines.length; i++) {
      const line: string = lines[i]; // 如 "[00:01.997] 作词：薛之谦"
      let result: any = timeExp.exec(line);
      if (!result) continue;
      const txt = line.replace(timeExp, '').trim(); // 现在把时间戳去掉，只剩下歌词文本
      if (txt) {
        if (result[3].length === 3) {
          result[3] = result[3] / 10; //[00:01.997] 中匹配到的 997 就会被切成 99
        }
        this.lines.push({
          time: result[1] * 60 * 1000 + result[2] * 1000 + (result[3] || 0) * 10, // 转化具体到毫秒的时间，result [3] * 10 可理解为 (result / 100) * 1000
          txt
        });
      }
    }

    this.lines.sort((a, b) => a.time - b.time); // 根据时间排序
  }

  /**
   * 播放歌词
   * @param offset 时间进度
   * @param isSeek  是否手动调整进度
   */
  public play(offset: number = 0, isSeek: boolean = false): void {
    if (!this.lines.length) return;

    this.state = StateEnum.STATE_PLAYING;
    this.curLineIndex = this._findcurLineIndex(offset);
    this._callHandler(this.curLineIndex - 1);
    this.startStamp = +new Date() - offset;

    if (this.curLineIndex < this.lines.length) {
      clearTimeout(Number(this.timer));
      this._playRest(isSeek);
    }
  }

  private _findcurLineIndex(time: number): number {
    const index = this.lines.findIndex(item => time <= item.time);
    return index >= 0 ? index : this.lines.length - 1;
  }

  private _callHandler(i: number): void {
    if (i < 0) return;

    this.handler({
      txt: this.lines[i].txt,
      lineNum: i
    });
  }

  /**
   * 继续播放
   * @param isSeek 是否手动调整进度
   */
  private _playRest(isSeek: boolean = false): void {
    let line = this.lines[this.curLineIndex];
    let delay;
    if (isSeek) {
      delay = line.time - (+new Date() - this.startStamp);
    } else {
      let preTime = this.lines[this.curLineIndex - 1] ? this.lines[this.curLineIndex - 1].time : 0;
      delay = line.time - preTime;
    }
    this.timer = setTimeout(() => {
      this._callHandler(this.curLineIndex++);
      if (this.curLineIndex < this.lines.length && this.state === StateEnum.STATE_PLAYING) {
        this._playRest();
      }
    }, delay);
  }

  public togglePlay(offset: number): void {
    if (this.state === StateEnum.STATE_PLAYING) {
      this.stop();
    } else {
      this.state = StateEnum.STATE_PLAYING;
      this.play(offset, true);
    }
  }

  public stop(): void {
    this.state = StateEnum.STATE_PAUSE;
    clearTimeout(Number(this.timer));
  }

  public seek(offset: number): void {
    this.play(offset, true);
  }
}
