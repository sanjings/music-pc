<template>
  <div class="module-title">
    <h1 :class="['title-text', size]">{{ title }}</h1>
    <div class="slot-default">
      <slot name='default' />
    </div>
    <div class="slot-right">
      <slot name='right' />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import { SizeType } from "/@/typings";

export default defineComponent({
  name: "Header",
  props: {
    title: {
      type: String,
      default: ''
    },
    size: {
      type: String as PropType<SizeType>,
      default: 'default'
    }
  }
});
</script>

<style lang='scss' scoped>
.module-title {
  position: relative;
  display: flex;
  align-items: center;
  padding-bottom: 5px;
  width: 100%;
  border-bottom: 2px solid #c20c0c;
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
    bottom: 5px;
  }
}
</style>