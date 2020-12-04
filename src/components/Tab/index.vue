<template>
  <div class="tab-wrap">
    <ul class="tab-list" @click="handleClick">
      <template v-for="item of listData" :key="item.value">
        <li 
          :class="['tab-item', { 'active': curValue === item.value }]" 
          :data-value='item.value'
        >
          {{ item.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { ITab } from './typing';

export default defineComponent({
  name: 'Tab',
  props: {
    curValue: String,
    listData: {
      type: Array as PropType<ITab[]>,
      required: true
    }
  },
  setup (props, ctx) {
    /**
     * 点击事件代理
     */
    const handleClick = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      if (target.className === 'tab-item') {
        const curValue = target.dataset.value;
        ctx.emit('onClick', curValue);
      }
    }

    return {
      handleClick
    }
  }
})
</script>

<style lang='scss' scoped>
.tab-wrap {
  padding: 0 20px;
  width: 100%;
  .tab-list {
    display: flex;
    align-items: center;
    .tab-item {
      font-size: 12px;
      color: #666;
      cursor: pointer;
      &.active {
        color: #c20c0c;
      }
      &:hover {
        text-decoration: underline;
      }
      &:last-of-type {
        &::after {
          content: '';
          margin: 0;
        }
      }
      &::after {
        content: '|';
        margin: 0 10px;
        width: 2px;
        height: 100%;
        color: #c7c7c7;
      }
    }
  }
}
</style>