<template>
  <li class="rank-songs">
    <!-- 排行榜信息 -->
    <div class="top">
      <div class="cover-wrap">
        <img :src="data.coverImgUrl" alt="cover" />
      </div>
      <div class="rank-info">
        <p class="rank-name">{{ data.name }}</p>
        <p class="controls">
          <i class="iconfont icon-play-circle" />
        </p>
      </div>
    </div>
    <!-- 歌曲列表 -->
    <ul class="song-list">
      <template v-for='(item, index) of data.tracks.slice(0, 10)' :key="item.id">
        <li :class="['song-item', {'stripe': index % 2 === 0}]">
          <span :class="['song-index', {'top-index': index < 3}]" >{{ index +1 }}</span>
          <span class="song-name ellipsis">{{ item.name }}</span>
        </li>
      </template>
      <li class="song-item show-all">查看全部</li>
    </ul>
  </li>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'RankSongs',
  props: {
    data: {
      type: Object,
      required: true
    }
  }
})
</script>

<style lang='scss' scoped>
.rank-songs {
  flex: 1;
  background-color: #f6f6f6;
  border: 1px solid #d3d3d3;
  overflow: hidden;
  .top {
    display: flex;
    padding: 20px;
    .cover-wrap {
      margin-right: 10px;
      width: 80px;
      height: 80px;
      img {
        height: 100%;
      }
    }
    .rank-info {
      .rank-name {
        padding: 10px 0;
        font-weight: 550;
      }
      i {
        color: #bbb;
        font-size: 22px;
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
        &:hover {
          text-decoration: underline;
          cursor: pointer;
        }
      }
      .song-index{
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
    }
  }
}
</style>