<template>
  <div class="player-bar">
    <div class="player-inner w-def-container">
      <div class="controls">
        <i class="iconfont icon-previous" />
        <i v-if="playingStatus" class="iconfont icon-play-circle" @click="togglePlayStatus" />
        <i v-else class="iconfont icon-pause" @click="togglePlayStatus" />
        <i class="iconfont icon-next" />
      </div>
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
              <ProgressBar :percent="percent" />
            </div>
            <span class="play-time">{{ formatPlayTime(currentTime) }} / {{ formatPlayTime(duration) }}</span>
          </div>
        </div>
      </div>
    </div>
    <audio
      ref="audioRef" 
      :src='songUrl' 
      :autoplay='true'
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch, toRefs, computed } from "vue";
import { useStore } from 'vuex';
import ProgressBar from './ProgressBar.vue';
import { formatSongUrl, formatSingerName, formatPlayTime } from '/utils/format';
import { 
  SET_CURRENT_INDEX,
  SET_CURRENT_SONG,
  SET_PLAYING_STATUS,
  SET_SHOW_PLAY_LIST 
} from '/@/store/player/actionTypes';

export default defineComponent({
  name: "Player",
  components: {
    ProgressBar
  },
  setup () {
    const store = useStore();
    const state = store.state.player;
    const audioRef = ref<HTMLAudioElement | null>(null);
    const songUrl = ref('');
    const currentTime = ref(0);
    const duration = ref(0);
    const percent = computed(() => isNaN(currentTime.value / duration.value) ? 0 : currentTime.value / duration.value);
    
    /**
     * 切换播放状态
     */
    const togglePlayStatus = () => {
      store.commit(SET_PLAYING_STATUS, !state.playingStatus)
    };

    /**
     * 切换播放列表显示
     */
    const toggleShowPlayList = () => {
      store.commit(SET_SHOW_PLAY_LIST, !state.showPlayList)
    };

    watch(() => state.currentIndex, (curIndex) => {
      const currentSong = state.playList[curIndex];
      store.commit(SET_CURRENT_SONG, state.playList[state.currentIndex]);
      songUrl.value = formatSongUrl(currentSong.id);
      currentTime.value = 0;
      duration.value = currentSong.dt / 1000;
    },{ immediate: true })

    /**
     * 监听播放状态改变，播放或暂停音乐
     */
    watch(() => state.playingStatus, (curStatus) => {
      const audioDom = audioRef.value as HTMLAudioElement;
      curStatus ? audioDom.play() : audioDom.pause()
    });

    return {
      ...toRefs(state),
      audioRef,
      songUrl,
      togglePlayStatus,
      formatSingerName,
      formatPlayTime,
      currentTime,
      duration
    }
  }
});
</script>

<style lang='scss' scoped>
.player-bar {
  position: fixed;
  bottom: 0;
  left: 0;
  width: 100%;
  height: 47px;
  background-color: #343434;
  box-shadow: 0 2px 10px rgba($color: #000, $alpha: .8);
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
        }
        &:hover {
          color: #fff;
        }
      }
    }
    .song {
      display: flex;
      font-size: 12px;
      .cover-wrap {
        margin-right: 15px;
        width: 34px;
        height: 34px;
        background: url('../../assets/images/music.png') no-repeat;
        background-size: 100%;
        border: 1px solid #222;
        border-radius: 2px;
        overflow: hidden;
      }
      .song-info {
        width: 700px;
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
  }
}
</style>