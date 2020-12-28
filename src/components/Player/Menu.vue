<template>
  <div class="player-menu w-def-container" v-show="show">
    <!-- 播放列表 -->
    <PlayList 
      :listData="playList" 
      :currentIndex="currentIndex" 
    />
    <!-- 歌词 -->
    <Lyric 
      :currentLyric="currentLyric" 
      :currentLineNum="currentLineNum" 
      :songName="songName"
    />
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import PlayList from './PlayList.vue';
import Lyric from './Lyric.vue';
import { ISong } from '/@/typings';

export default defineComponent({
  name: 'PlayerMenu',
  components: {
    PlayList,
    Lyric
  },
  props: {
    playList: Array as PropType<ISong[]>,
    show: Boolean,
    currentIndex: Number,
    currentLineNum: Number,
    currentLyric: Object,
    songName: String
  }
});
</script>

<style lang="scss" scoped>
.player-menu {
  position: absolute;
  top: -300px;
  left: 50%;
  transform: translateX(-50%);
  z-index: 99;
  display: flex;
  height: 300px;
  background-color: #111;
  border: 1px solid #000;
  border-radius: 6px 6px 0 0;
}
</style>
