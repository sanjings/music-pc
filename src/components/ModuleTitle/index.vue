<template>
  <div class="module-title">
    <span class="circle" v-show="circle"></span>
    <h1 :class="['title-text', size]">{{ title }}</h1>
    <div class="slot-default">
      <slot name="default" />
    </div>
    <div class="slot-right">
      <slot name="right" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { SizeType } from '/@/typings';

export default defineComponent({
  name: 'Header',
  props: {
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String as PropType<SizeType>,
      default: 'default'
    },
    circle: {
      type: Boolean,
      default: false
    }
  }
});
</script>

<style lang="scss" scoped>
.module-title {
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 8px;
  width: 100%;
  border-bottom: 2px solid #c20c0c;
  .circle {
    position: relative;
    margin: 0 8px;
    width: 14px;
    height: 14px;
    background-color: #c20c0c;
    border-radius: 50%;
    &::after {
      content: '';
      position: absolute;
      left: 4px;
      top: 4px;
      width: 6px;
      height: 6px;
      background-color: #fff;
      border-radius: 50%;
    }
  }
  .title-text {
    font-weight: 500;
    &.default {
      font-size: 20px;
    }
    &.large {
      font-size: 24px;
    }
  }
  .slot-right {
    position: absolute;
    right: 0;
    bottom: 8px;
  }
}
</style>
