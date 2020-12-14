<template>
  <div class="song-list">
    <ModuleTitle title='歌曲列表'>
      <template #default>
        <span class="length">{{ listData.length }}首歌</span>
      </template>
      <template #right>
        <p>
          <span>播放：</span>
          <span class="play-count">{{ playCount }}</span>
          <span>次</span>
        </p>
      </template>
    </ModuleTitle>
    <ul class="list-wrap">
      <li class="list-header">
        <div class="rank"></div>
        <div class="title">标题</div>
        <div class="duration">时长</div>
        <div class="singer">歌手</div>
      </li>
      <template v-for="(item, index) of listData" :key="item.id">
        <li :class="['song-item', {'stripe': index % 2 === 0}]">
          <div class="item-index">{{ index + 1 }}</div>
          <div class="item-title ellipsis">
            <div class="cover-wrap" v-if="index < 3">
              <img :src="item.al.picUrl + '?param=50y50'" alt="cover" class="cover" />
            </div>
            <i class="iconfont icon-play-circle" />
            <span class="item-name" >{{ item.name }}</span>
          </div>
          <div class="item-duration">{{ formatPlayTime(item.dt / 1000) }}</div>
          <div class="item-singer ellipsis">{{ formatSingerName(item.ar) }}</div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import { ISong } from "/@/typings";
import { formatSingerName, formatPlayTime } from '/utils/format';
import ModuleTitle from '/components/ModuleTitle/index.vue';

export default defineComponent({
  name: "SongList",
  components: {
    ModuleTitle
  },
  props: {
    playCount: Number,
    listData: Object as PropType<ISong[]>
  },
  setup () {
    return {
      formatSingerName,
      formatPlayTime
    }
  }
});
</script>

<style lang='scss' scoped>
.song-list {
  padding-bottom: 40px;
  font-size: 12px;
  .length {
    margin-left: 20px;
    flex: 1;
    overflow: hidden;
  }
  .play-count {
    color: #c20c0c;
  }
  .list-wrap {
    border: 1px solid #d3d3d3;
    border-top: none;
    .list-header {
      display: flex;
      align-items: center;
      height: 34px;
      line-height: 34px;
      font-size: 12px;
      font-weight: 550;
      background-color: rgba($color: #f1f1f1, $alpha: .3);
      border-bottom: 1px solid rgba($color: #e3e3e3, $alpha: .6);
      & > div {
        padding: 0 10px;
      }
      .rank {
        width: 78px;
        height: 100%;
        border-right: 1px solid rgba($color: #e3e3e3, $alpha: .6);
      }
      .title {
        flex: 1;
        border-right: 1px solid rgba($color: #e3e3e3, $alpha: .6);
        overflow: hidden;
      }
      .duration {
        width: 91px;
        border-right: 1px solid rgba($color: #e3e3e3, $alpha: .6);
      }
      .singer {
        width: 173px;
      }
    }
    .song-item {
      display: flex;
      align-items: center;
      font-size: 12px;
      color: #333;
      &.stripe {
        background-color: #f5f5f5;
      }
      & > div {
        padding: 6px 10px;
      }
      .item-index {
        width: 78px;
        text-align: center;
        color: #999;
      }
      .item-title {
        flex: 1;
        display: flex;
        align-items: center;
        overflow: hidden;
        .cover-wrap {
          width: 50px;
          height: 50px;
          .cover {
            width: 50px;
            height: 100%;
          }
        }
        .iconfont {
          margin: 0 10px;
          color: #999;
          cursor: pointer;
          &:hover {
            color: #666;
          }
        }
        .item-name {
          &:hover {
            text-decoration: underline;
            cursor: pointer;
          }
        }
      }
      .item-duration {
        width: 91px;
      }
      .item-singer {
        width: 173px;
      }
    }
  }
}
</style>