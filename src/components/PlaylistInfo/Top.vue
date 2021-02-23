<template>
  <div class="album-top">
    <div class="cover-wrap">
      <img :src="data.coverImgUrl" alt="cover" class="cover" />
    </div>
    <div class="info">
      <p class="title">{{ data.name }}</p>
      <div class="controls">
        <button class="btn play" @click="handleClickPlayAll(data.tracks)">
          <i class="iconfont icon-play-circle" />
          <span>播放</span>
        </button>
        <button class="btn" @click="toastTip">
          <i class="iconfont icon-add" />
          <span>({{ data.subscribedCount }})</span>
        </button>
        <button class="btn" @click="toastTip">
          <i class="iconfont icon-share" />
          <span>({{ data.shareCount }})</span>
        </button>
        <button class="btn" @click="toastTip">
          <i class="iconfont icon-download" />
          <span>下载</span>
        </button>
        <button class="btn" @click="toastTip">
          <i class="iconfont icon-comment" />
          <span>({{ data.commentCount }})</span>
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IRankData } from '@/typings';
import usePlay from 'hooks/usePlay';
import createToast from 'components/Toast/index';

export default defineComponent({
  name: 'Top',
  props: {
    data: Object as PropType<IRankData>
  },
  setup(props) {
    const { handleClickPlayAll } = usePlay();

    /**
     * 暂未开发提示
     */
    const toastTip = (): void => {
      createToast({
        message: '暂未开发',
        duration: 2000
      })
    };

    return {
      handleClickPlayAll,
      toastTip
    };
  }
});
</script>

<style lang="scss" scoped>
.album-top {
  display: flex;
  padding-bottom: 40px;
  .cover-wrap {
    margin-right: 30px;
    padding: 3px;
    width: 158px;
    height: 158px;
    border: 1px solid #e3e3e3;
    .cover {
      width: 150px;
      height: 150px;
    }
  }
  .info {
    display: flex;
    flex-direction: column;
    justify-content: space-around;
    height: 158px;
    .title {
      font-size: 20px;
    }
    .controls {
      display: flex;
      align-items: center;
      .btn {
        display: flex;
        align-items: center;
        margin-right: 8px;
        padding: 0 10px;
        height: 31px;
        line-height: 31px;
        font-size: 12px;
        color: #333;
        background-color: rgba($color: #f6f6f6, $alpha: 0.8);
        border: 1px solid #d3d3d3;
        border-radius: 4px;
        cursor: pointer;
        .iconfont {
          margin-right: 3px;
          &.icon-add {
            font-size: 20px;
          }
        }
        &.play {
          background-color: #2a7bc8;
          color: #fff;
          border-color: #2a7bc8;
        }
      }
    }
  }
}
</style>
