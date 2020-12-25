<template>
  <div class="play-list">
    <h2 class="title">播放列表({{ listData.length }})</h2>
    <ul class="list-wrap" @click="handleClickPlay($event, listData), handleClickDelete($event)">
      <template v-for="(item, index) of listData" :key="item.id">
        <li :class="['song-item', {'active': Number(currentIndex) === index}]">
          <i class="iconfont icon-play" />
          <span class="song-name ellipsis">{{ item.name }}</span>
          <div class="controls">
            <i class="iconfont icon-delete" :data-delete-index="index" />
            <i class="iconfont icon-play-circle" :data-play-index="index" />
          </div>
          <div class="song-info">
            <span class="item-singer ellipsis">{{ formatSingerName(item.ar) }}</span>
            <span class="item-duration">{{ formatPlayTime(item.dt / 1000) }}</span>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import { ISong } from "/@/typings";
import { formatSingerName, formatPlayTime } from '/utils/format';
import usePlay from '/hooks/usePlay';

export default defineComponent({
  name: "PlayList",
  props: {
    listData: Array as PropType<ISong[]>,
    show: Boolean,
    currentIndex: Number
  },
  setup () {
    const { handleClickPlay, handleClickDelete } = usePlay();

    return {
      formatPlayTime,
      formatSingerName,
      handleClickPlay,
      handleClickDelete
    }
  }
});
</script>

<style lang='scss' scoped>
.play-list {
  display: flex;
  flex-direction: column;
  width: 550px;
  height: 100%;
  .title {
    padding-left: 25px;
    height: 40px;
    line-height: 40px;
    font-weight: 550;
    border-bottom: 1px solid #222;
  }
  .list-wrap {
    flex: 1;
    overflow: auto;
    background-color: #222;
    .song-item {
      position: relative;
      display: flex;
      align-items: center;
      height: 28px;
      font-size: 12px;
      color: #ccc;
      &:hover {
        background-color: #111;
        color: #fff;
        .controls {
          display: inline-block!important;
        }
      }
      &.active {
        background-color: #111;
        color: #fff;
        .icon-play {
          display: inline-block;
        }
      }
      .icon-play {
        display: none;
        position: absolute;
        left: 6px;
        color: #c20c0c;
      }
      .song-name {
        flex: 1;
        padding-left: 30px;
      }
      .controls {
        display: none;
        .icon-play-circle,.icon-delete {
          margin-left: 15px;
          cursor: pointer;
        }
      }
      .song-info {
        display: flex;
        align-items: center;
        margin-left: 20px;
        .item-singer {
          width: 100px;
        }
        .item-duration {
          margin-left: 10px;
          width: 45px;
        }
      }
    }
  }
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar{
  width: 6px;
  height: 6px;
  background-color: #111;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track{
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,0);
  border-radius: 4px;
  background-color: transparent;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb{
  border-radius: 4px;
  -webkit-box-shadow: inset 0 0 6px rgba(0,0,0,.3);
  background-color: #555;
}
</style>