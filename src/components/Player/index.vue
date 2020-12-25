<template>
  <div class="player-bar" v-if="currentSong && playList.length">
    <div class="player-inner w-def-container">
      <!-- 播放控制 -->
      <div class="controls">
        <i class="iconfont icon-previous" @click="handlePlayPrevSong" />
        <i v-if="!playingStatus" class="iconfont icon-play-circle" @click="togglePlayStatus(true)" />
        <i v-else class="iconfont icon-pause" @click="togglePlayStatus(false)" />
        <i class="iconfont icon-next" @click="handlePlayNextSong" />
      </div>
      <!-- 歌曲信息 -->
      <div class="song">
        <div class="cover-wrap">
          <img v-if="currentSong" :src="currentSong.al.picUrl" alt="songCover" />
        </div>
        <div class="song-info">
          <p class="song-name" v-if="currentSong">
            <span>{{ currentSong.name }}</span>
            <span class="singer">{{ formatSingerName(currentSong.ar) }}</span>
          </p>
          <div class="progress">
            <div class="progress-bar-wrap">
              <ProgressBar :percent="percent" @change="handleChangePercent" />
            </div>
            <span class="play-time">{{ formatPlayTime(currentTime) }} / {{ formatPlayTime(duration) }}</span>
          </div>
        </div>
      </div>
      <!-- 其他功能 -->
      <div class="right">
        <i class="iconfont icon-add" />
        <i class="iconfont icon-share" />
        <i class="iconfont icon-volume" />
        <i class="iconfont icon-loop" />
        <i class="iconfont icon-playlist" @click="toggleShowPlayList">
          <i class="play-list-count">{{ playList.length }}</i>
        </i>
      </div>
      <!-- 子菜单面板 -->
      <PlayerMenu
        :songName="currentSong.name"
        :playList="playList"
        :show="showPlayList"
        :currentIndex="currentIndex"
        :currentLyric="currentLyric"
        :currentLineNum="currentLineNum"
      />
    </div>
    <!-- 播放器 -->
    <audio 
      ref="audioRef" 
      :src="songUrl" 
      :autoplay="true" 
      @timeupdate="handleUpdateTime" 
      @ended="handlePlayEnded" 
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch, toRefs, computed } from 'vue';
import { useStore } from 'vuex';
import ProgressBar from './ProgressBar.vue';
import PlayerMenu from './Menu.vue';
import { formatSongUrl, formatSingerName, formatPlayTime } from '/utils/format';
import { SET_CURRENT_INDEX, SET_CURRENT_SONG, SET_PLAYING_STATUS, SET_SHOW_PLAY_LIST } from '/@/store/player/actionTypes';
import { getLyricRequest } from '/requests/song';
import LyricParser, { IHandler } from '/plugins/LyricParser';

export default defineComponent({
  name: 'Player',
  components: {
    ProgressBar,
    PlayerMenu
  },
  setup() {
    const store = useStore();
    const state = store.state.player;
    const audioRef = ref<HTMLAudioElement | null>(null);
    const songUrl = ref<string>('');
    const currentTime = ref<number>(0);
    const duration = ref<number>(0);
    const preSongId = ref<string>('');
    const currentLyric = ref<LyricParser | null>(null);
    const currentLineNum = ref<number>(0);

    const percent = computed<number>(() => {
      return isNaN(currentTime.value / duration.value) ? 0 : currentTime.value / duration.value;
    });

    const handleLyric: IHandler = ({ lineNum, txt }) => {
      if (!currentLyric.value) return;
      currentLineNum.value = lineNum;
    };

    const getLyric = async (id: number) => {
      const {
        lrc: { lyric }
      } = await getLyricRequest(id);

      if (!lyric) {
        currentLyric.value = null;
        return;
      }
      currentLyric.value = new LyricParser(lyric, handleLyric);
      currentLyric.value.play();
      currentLineNum.value = 0;
      currentLyric.value.seek(0);
    };

    /**
     * 改变当前播放歌曲序号
     */
    const changeCurrentIndex = (index: number): void => {
      const currentIndex: number = state.currentIndex;
      if (index === currentIndex) return;
      store.commit(SET_CURRENT_INDEX, index);
    };

    /**
     * 切换播放状态
     */
    const togglePlayStatus = (status: boolean): void => {
      store.commit(SET_PLAYING_STATUS, status);
      if (currentLyric.value) {
        currentLyric.value.togglePlay(currentTime.value * 1000);
      }
    };

    /**
     * 切换播放列表显示
     */
    const toggleShowPlayList = (): void => {
      store.commit(SET_SHOW_PLAY_LIST, !state.showPlayList);
    };

    /**
     * 切换上一首歌曲
     */
    const handlePlayPrevSong = (): void => {
      let index: number = state.currentIndex - 1;
      if (index < 0) {
        index = state.playList.length - 1;
      }
      changeCurrentIndex(index);
    };

    /**
     * 切换下一首歌曲
     */
    const handlePlayNextSong = (): void => {
      let index: number = state.currentIndex + 1;
      if (index >= state.playList.length) {
        index = 0;
      }
      changeCurrentIndex(index);
    };

    /**
     * 当前歌曲播放完成
     */
    const handlePlayEnded = (): void => {
      handlePlayNextSong();
    };

    /**
     * 更新播放时间
     */
    const handleUpdateTime = (e: Event): void => {
      const target = e.target as HTMLAudioElement;
      currentTime.value = target.currentTime;
    };

    /**
     * 进度改变
     */
    const handleChangePercent = (per: number): void => {
      const audioDom = audioRef.value as HTMLAudioElement;

      const newTime = currentTime.value = per * duration.value;
      audioDom.currentTime = newTime;
      !state.playingStatus && togglePlayStatus(true);
      if (currentLyric.value) {
        currentLyric.value.seek(newTime * 1000);
      }
    };

    /**
     * 监听歌曲序号和播放列表变化，获取歌曲信息并播放
     */
    watch(
      () => [state.currentIndex, state.playList],
      ([curIndex]) => {
        if (!state.playList.length || !state.playList[curIndex] || curIndex === -1 || state.playList[curIndex].id === preSongId.value) return;
        const currentSong = state.playList[curIndex];
        store.commit(SET_CURRENT_SONG, state.playList[state.currentIndex]);
        songUrl.value = formatSongUrl(currentSong.id);
        preSongId.value = currentSong.id;
        getLyric(currentSong.id);
        currentTime.value = 0;
        duration.value = currentSong.dt / 1000;
        togglePlayStatus(true);
      },
      { immediate: true }
    );

    /**
     * 监听播放状态改变，播放或暂停音乐
     */
    watch(
      () => state.playingStatus,
      (curStatus: boolean) => {
        const audioDom = audioRef.value as HTMLAudioElement;
        if (!audioDom) return ;
        curStatus ? audioDom.play() : audioDom.pause();
      }
    );

    return {
      ...toRefs(state),
      audioRef,
      songUrl,
      togglePlayStatus,
      toggleShowPlayList,
      formatSingerName,
      formatPlayTime,
      currentTime,
      currentLyric,
      currentLineNum,
      percent,
      duration,
      handleUpdateTime,
      handleChangePercent,
      handlePlayNextSong,
      handlePlayPrevSong,
      handlePlayEnded
    };
  }
});
</script>

<style lang="scss" scoped>
.player-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 50px;
  background-color: rgba($color: #000000, $alpha: 0.82);
  box-shadow: 0 2px 10px rgba($color: #000, $alpha: 0.8);
  .player-inner {
    display: flex;
    align-items: center;
    color: #fff;
    height: 100%;
    .controls {
      display: flex;
      align-items: center;
      margin-right: 20px;
      height: 100%;
      .iconfont {
        font-size: 26px;
        color: #ccc;
        cursor: pointer;
        &.icon-play-circle,
        &.icon-pause {
          margin: 0 12px;
          font-size: 32px;
          color: #f5f5f5;
        }
        &:hover {
          color: #fff;
        }
      }
    }
    .song {
      flex: 1;
      display: flex;
      font-size: 12px;
      .cover-wrap {
        margin-right: 15px;
        width: 34px;
        height: 34px;
        background: url('../../assets/images/music.png') no-repeat;
        background-size: 100%;
        border: 1px solid #222;
        border-radius: 4px;
        overflow: hidden;
      }
      .song-info {
        .singer {
          margin-left: 15px;
          color: #9b9b9b;
        }
        .progress {
          display: flex;
          align-items: center;
          margin-top: 5px;
          .progress-bar-wrap {
            width: 493px;
          }
          .play-time {
            margin-left: 15px;
          }
        }
      }
    }
    .right {
      display: flex;
      align-items: center;
      padding-right: 10px;
      .iconfont {
        margin-left: 14px;
        font-size: 20px;
        color: #ccc;
        cursor: pointer;
        &.icon-playlist {
          display: flex;
          align-items: center;
          .play-list-count {
            display: inline-block;
            width: 30px;
            height: 18px;
            text-align: center;
            font-size: 12px;
            color: #777;
            background-color: #000;
            border-radius: 0 8px 8px 0;
          }
        }
        &:hover {
          color: #fff;
        }
      }
    }
  }
}
</style>
