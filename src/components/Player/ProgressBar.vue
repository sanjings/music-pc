<template>
  <div class="progress-wrap">
    <div class="bar-inner" ref="barRef" @click="handleClick">
      <div class="progress" ref="progressRef"></div>
      <span
        ref="progressBtnRef"
        class="progress-btn"
        @mousedown="handleMouseDown"
        @mousemove="handleMouseMove"
        @mouseleave="handleMouseLeave"
      ></span>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "ProgressBar",
  props: {
    percent: {
      type: Number,
      default: 0,
    },
  },
  setup() {
    const barRef = ref<HTMLElement | null>(null),
      progressRef = ref<HTMLElement | null>(null),
      progressBtnRef = ref<HTMLElement | null>(null);

    const handleMouseDown = (e) => {};

    const handleMouseMove = (e) => {};

    const handleMouseLeave = (e) => {};

    return {
      barRef,
      progressRef,
      progressBtnRef,
      handleMouseDown,
      handleMouseMove,
      handleMouseLeave
    };
  }
});
</script>

<style lang='scss' scoped>
.progress-wrap {
  width: 100%;
  .bar-inner {
    position: relative;
    height: 9px;
    background-color: rgba($color: #666, $alpha: 0.8);
    border-radius: 8px;
    .progress {
      position: absolute;
      left: 0;
      top: 0;
      width: 0;
      height: 100%;
      background-color: #c20c0c;
    }
    .progress-btn {
      position: absolute;
      left: 0px;
      top: -3px;
      width: 16px;
      height: 16px;
      background-color: #eee;
      border-radius: 50%;
      &::before {
        content: "";
        position: absolute;
        left: 0;
        right: 0;
        top: 0;
        bottom: 0;
        margin: auto;
        width: 6px;
        height: 6px;
        border-radius: 50%;
        background-color: #c20c0c;
      }
    }
  }
}
</style>