<template>
  <div class="hot-songs">
    <button class="play-btn" @click="handleClickPlayAll(listData)">
      <i class="iconfont icon-play-circle" />
      <span>全部播放</span>
    </button>
    <ul class="list-wrap" @click="handleClickPlay($event, listData)">
      <template v-for="(item, index) of listData" :key="item.id">
        <li :class="['song-item', { stripe: index % 2 === 0 }]">
          <div class="item-index">{{ index + 1 }}</div>
          <div class="item-title ellipsis">
            <i class="iconfont icon-play-circle" :data-play-index="index" />
            <span class="song-name">{{ item.name }}</span>
          </div>
          <div class="item-duration">{{ $filters.formatPlayTime(item.dt / 1000) }}</div>
          <div class="item-singer ellipsis">{{ item.al.name }}</div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { ISong } from '/@/typings';
import usePlay from '/hooks/usePlay';

export default defineComponent({
  name: 'HotSongs',
  props: {
    listData: {
      type: Array as PropType<ISong[]>,
      required: true
    }
  },
  setup(props) {
    const { handleClickPlay, handleClickPlayAll } = usePlay();

    return {
      handleClickPlay,
      handleClickPlayAll
    };
  }
});
</script>

<style lang="scss" scoped>
.hot-songs {
  padding-top: 20px;
  width: 100%;
  .play-btn {
    display: flex;
    align-items: center;
    margin-right: 8px;
    padding: 0 15px;
    height: 31px;
    line-height: 31px;
    font-size: 12px;
    background-color: #2a7bc8;
    color: #fff;
    border-color: #2a7bc8;
    border-radius: 4px;
    cursor: pointer;
    .iconfont {
      margin-right: 5px;
    }
  }
  .list-wrap {
    margin-top: 10px;
    .song-item {
      display: flex;
      align-items: center;
      width: 100%;
      font-size: 12px;
      color: #333;
      &.stripe {
        background-color: #f5f5f5;
      }
      & > div {
        padding: 6px 10px;
      }
      .item-index {
        width: 50px;
        color: #999;
      }
      .item-title {
        flex: 1;
        display: flex;
        align-items: center;
        overflow: hidden;
        .iconfont {
          margin: 0 20px 0 10px;
          color: #999;
          cursor: pointer;
          &:hover {
            color: #666;
          }
        }
      }
      .item-duration {
        width: 80px;
      }
      .item-singer {
        width: 150px;
      }
    }
  }
}
</style>
