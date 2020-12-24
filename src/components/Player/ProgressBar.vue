<template>
  <div class="progress-wrap">
    <div class="bar-inner" ref="barRef" @click="handleClick">
      <div class="progress" ref="progressRef"></div>
      <span ref="progressBtnRef" class="progress-btn" @mousedown="handleMouseDown"></span>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, computed, onMounted, watch } from 'vue';
import { IMouseClickInfo } from './typing';

const progressBtnWidth = 16; // 按钮宽度
const barWidth = 493; // 进度条宽度

export default defineComponent({
  name: 'ProgressBar',
  props: {
    percent: {
      type: Number,
      default: 0
    }
  },
  setup(props, ctx) {
    const barRef = ref<HTMLElement | null>(null);
    const progressRef = ref<HTMLElement | null>(null);
    const progressBtnRef = ref<HTMLElement | null>(null);
    const clickInfo = ref<IMouseClickInfo>({ initiated: false, startX: 0, left: 0 });

    watch(
      () => props.percent,
      () => {
        if (props.percent >= 0 && props.percent <= 1 && !clickInfo.value.initiated) {
          const offsetWidth = (barWidth - progressBtnWidth) * props.percent;
          _offset(offsetWidth);
        }
      }
    );

    /**
     * 设置已完成进度条和按钮的偏移值样式
     * @param offsetWidth 偏移值
     */
    const _offset = (offsetWidth: number): void => {
      const progressDom = progressRef.value as HTMLElement,
        progressBtnDom = progressBtnRef.value as HTMLElement;

      if (offsetWidth < 0) {
        offsetWidth = 0;
      } else if (offsetWidth >= barWidth - progressBtnWidth) {
        offsetWidth = barWidth - progressBtnWidth;
      }

      progressDom.style.width = `${offsetWidth}px`;
      progressBtnDom.style.left = `${offsetWidth}px`;
    };

    /**
     * 根据点击时的偏移值，计算进度百分比，并通知父组件change事件
     */
    const _changePercent = () => {
      const progressDom = progressRef.value as HTMLElement,
        curPercent = progressDom.clientWidth / (barWidth - progressBtnWidth);

      ctx.emit('change', curPercent);
    };

    const handleClick = (e: MouseEvent): void => {
      e.stopPropagation();
      const barDom = barRef.value as HTMLElement;
      const offsetLeft = barDom.offsetLeft;
      const offsetWidth = e.pageX - offsetLeft - progressBtnWidth / 2;
      _offset(offsetWidth);
      _changePercent();
    };

    const handleMouseDown = (e: MouseEvent): void => {
      document.removeEventListener('mousemove', handleMouseMove);
      document.removeEventListener('mouseup', handleMouseUp);
      const progressDom = progressRef.value as HTMLElement;

      clickInfo.value = {
        initiated: true,
        startX: e.pageX,
        left: progressDom.clientWidth
      };
      document.addEventListener('mousemove', handleMouseMove);
      document.addEventListener('mouseup', handleMouseUp);
    };

    const handleMouseMove = (e: MouseEvent): void => {
      const clickInfoObj = clickInfo.value;
      if (!clickInfoObj.initiated) return;
      const scrollX = e.pageX - clickInfoObj.startX,
            offsetWidth = Math.min(Math.max(0, clickInfoObj.left + scrollX), barWidth);

      _offset(offsetWidth);
    };

    const handleMouseUp = (e: MouseEvent): void => {
      clickInfo.value = {
        startX: Number(clickInfo.value.startX),
        left: Number(clickInfo.value.left),
        initiated: false
      };
      _changePercent();
    };

    return {
      barRef,
      progressRef,
      progressBtnRef,
      handleClick,
      handleMouseDown
    };
  }
});
</script>

<style lang="scss" scoped>
.progress-wrap {
  width: 100%;
  user-select: none;
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
      border-radius: 8px 0 0 8px;
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
        content: '';
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
