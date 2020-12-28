<template>
  <li class="rank-songs">
    <!-- 排行榜信息 -->
    <div class="top">
      <router-link :to="{ name: 'rank', params: { id: data.id } }" class="cover-wrap">
        <img :src="data.coverImgUrl" alt="cover" class="cover" />
      </router-link>
      <div class="rank-info">
        <router-link :to="{ name: 'rank', params: { id: data.id } }" class="rank-name">
          {{ data.name }}
        </router-link>
        <p class="controls">
          <i class="iconfont icon-play-circle" @click="handleClickPlayAll(data.tracks)" />
          <i class="iconfont icon-add" />
        </p>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <ul class="song-list" @click="handleClickPlay($event, data.tracks)">
      <template v-for="(item, index) of data.tracks.slice(0, 10)" :key="item.id">
        <li :class="['song-item', { stripe: index % 2 === 0 }]">
          <span :class="['song-index', { 'top-index': index < 3 }]">{{ index + 1 }}</span>
          <span class="song-name ellipsis">{{ item.name }}</span>
          <i class="iconfont icon-play-circle" :data-play-index="index" />
        </li>
      </template>
      <router-link :to="{ name: 'rank', params: { id: data.id } }" class="song-item show-all">
        <span>查看全部</span>
      </router-link>
    </ul>
  </li>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IRankData } from '/@/typings';
import usePlay from '/hooks/usePlay';

export default defineComponent({
  name: 'RankSongs',
  props: {
    data: Object as PropType<IRankData>
  },
  setup(props) {
    const { handleClickPlayAll, handleClickPlay } = usePlay();

    return {
      handleClickPlayAll,
      handleClickPlay
    };
  }
});
</script>

<style lang="scss" scoped>
.rank-songs {
  flex: 1;
  background-color: #f6f6f6;
  border: 1px solid #d3d3d3;
  overflow: hidden;
  .top {
    display: flex;
    padding: 20px 0 20px 20px;
    .cover-wrap {
      margin-right: 10px;
      width: 80px;
      height: 80px;
      cursor: pointer;
      .cover {
        height: 100%;
      }
    }
    .rank-info {
      padding-top: 10px;
      .rank-name {
        font-weight: 550;
        &:hover {
          text-decoration: underline;
        }
      }
      .controls {
        display: flex;
        align-items: center;
        padding-top: 10px;
        i {
          color: #bbb;
          font-size: 22px;
          cursor: pointer;
          &:hover {
            color: #999;
          }
          &.icon-add {
            margin-left: 8px;
            font-size: 26px;
          }
        }
      }
    }
  }
  .song-list {
    .song-item {
      display: flex;
      align-items: center;
      padding: 0 15px;
      height: 32px;
      font-size: 12px;
      &.stripe {
        background-color: #e8e8e8;
      }
      &.show-all {
        display: flex;
        flex-direction: row-reverse;
        background-color: #e8e8e8;
        span {
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
      .song-index {
        width: 35px;
        text-align: center;
        font-size: 16px;
        color: #666;
        &.top-index {
          color: #c10d0c;
        }
      }
      .song-name {
        flex: 1;
        overflow: hidden;
      }
      .icon-play-circle {
        display: none;
        margin-left: 6px;
        color: #888;
        cursor: pointer;
        &:hover {
          color: #666;
        }
      }
      &:hover .icon-play-circle {
        display: inline-block;
      }
    }
  }
}
</style>
