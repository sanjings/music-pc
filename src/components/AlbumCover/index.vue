<template>
  <div :class="['album-cover', size]">
    <div class="cover-wrap" :style="{ 'background-image': `url(${data.picUrl}?param=130y130)` }">
      <div class="mask"></div>
      <i class="iconfont icon-play-circle" />
    </div>
    <p class="name ellipsis">{{ data.name }}</p>
    <p class="singers ellipsis">{{ $filters.formatSingerName(data.artists) }}</p>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IAlbumData } from '/@/typings';

export default defineComponent({
  name: 'AlbumCover',
  props: {
    data: {
      type: Object as PropType<IAlbumData>,
      required: true
    },
    size: String
  }
});
</script>

<style lang="scss" scoped>
.album-cover {
  width: 100%;
  border-radius: 2px;
  overflow: hidden;
  &.small {
    .cover-wrap {
      width: 100px;
      height: 100px;
      .mask {
        width: 118px;
        background-position: 0 -570px;
      }
    }
  }
  .cover-wrap {
    position: relative;
    width: 130px;
    height: 130px;
    background-size: 100% 100%;
    background-repeat: no-repeat;
    cursor: pointer;
    &:hover .icon-play-circle {
      display: block;
    }
    .mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      width: 153px;
      background: url('../../assets/images/sprite_cover.png') no-repeat 0 -845px;
    }
    .icon-play-circle {
      display: none;
      position: absolute;
      right: 6px;
      bottom: 6px;
      font-size: 20px;
      color: #ddd;
    }
  }
  .name {
    padding-top: 7px;
  }
  .singers {
    color: #666;
  }
  .name,
  .singers {
    font-size: 12px;
    line-height: 18px;
  }
}
</style>
