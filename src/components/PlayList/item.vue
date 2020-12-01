<template>
  <div class="play-item">
    <div
      class="cover-wrap"
      :style="{ 'background-image': `url(${data.picUrl}?param=140y140)` }"
    >
      <div class="mask"></div>
      <div class="play-count">
        <i class="iconfont icon-headset" />
        <span class="count">{{ formatCount(data.playCount) }}</span>
        <i class="iconfont icon-play-circle" />
      </div>
    </div>
    <p class="name ellipsis">{{ data.name }}</p>
    <p class="writer">by {{ data.copywriter }}</p>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import { IPlayData } from "/@/typings";
import { formatCount } from "/@/utils/format";

export default defineComponent({
  name: "PlayItem",
  props: {
    data: {
      type: Object as PropType<IPlayData>,
      required: true
    },
  },
  setup() {
    return {
      formatCount
    };
  }
});
</script>

<style lang='scss' scoped>
.play-item {
  margin: 20px 0;
  width: 140px;
  border-radius: 2px;
  overflow: hidden;
  .cover-wrap {
    position: relative;
    width: 100%;
    height: 140px;
    background-size: 140px 140px;
    background-repeat: no-repeat;
    .mask {
      position: absolute;
      left: 0;
      right: 0;
      top: 0;
      bottom: 0;
      background: url("../../assets/images/sprite_cover.png") no-repeat 0 0;
    }
    .play-count {
      position: absolute;
      left: 0;
      bottom: 0;
      display: flex;
      align-items: center;
      padding: 0 10px;
      width: 100%;
      height: 27px;
      line-height: 27px;
      font-size: 12px;
      color: #ccc;
      background-color: rgba($color: #000, $alpha: 0.4);
      i {
        font-size: 14px;
      }
      .count {
        padding: 0 5px;
        flex: 1;
      }
      .icon-play-circle {
        cursor: pointer;
        &:hover {
          color: #fff;
        }
      }
    }
  }
  .name {
    padding-top: 5px;
    line-height: 22px;
  }
  .writer {
    font-size: 12px;
    line-height: 18px;
    color: #666;
  }
}
</style>