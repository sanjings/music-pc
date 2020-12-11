<template>
  <div class="hot-songs w-def-container">
    <ul class="list-wrap">
      <template v-for="(item, index) of listData" :key="item.id">
        <li :class="['song-item', {'stripe': index % 2 === 0}]">
          <div class="item-index">{{ index + 1 }}</div>
          <div class="item-title ellipsis">
            <i class="iconfont icon-play-circle" />
            <span class="song-name">{{ item.name }}</span>
          </div>
          <div class="item-duration">{{ formatPlayTime(item.dt / 1000) }}</div>
          <div class="item-singer ellipsis">{{ item.al.name }}</div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import { ISong } from "/@/typings";
import { formatPlayTime } from '/utils/format';

export default defineComponent({
  name: "HotSongs",
  props: {
    listData: Array as PropType<ISong[]>
  },
  setup () {
    return {
      formatPlayTime
    }
  }
});
</script>

<style lang='scss' scoped>
.hot-songs {
  padding-top: 20px;
  width: 100%;
  .list-wrap {
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
        .song-name {
          cursor: pointer;
          &:hover {
            text-decoration: underline;
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