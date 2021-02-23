<template>
  <div class="alpha-wrap">
    <ul class="alpha-list" @click="handleClick">
      <template v-for="item of listData" :key="item.value">
        <li :class="['alpha-item', { active: curValue == item.value }]" :data-value="item.value">
          {{ item.name }}
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IAlphaTypes } from '@/typings/localData';

export default defineComponent({
  name: 'Alpha',
  props: {
    curValue: [String, Number],
    listData: {
      type: Array as PropType<IAlphaTypes[]>,
      required: true
    }
  },
  setup(props, ctx) {
    /**
     * 点击事件代理
     */
    const handleClick = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      if (target.className === 'alpha-item') {
        const curValue = target.dataset.value;
        ctx.emit('onClick', curValue);
      }
    };

    return {
      handleClick
    };
  }
});
</script>

<style lang="scss" scoped>
.alpha-wrap {
  padding-top: 20px;
  width: 100%;
  .alpha-list {
    display: flex;
    justify-content: space-between;
    align-items: center;
    .alpha-item {
      padding: 2px 4px;
      color: #333;
      cursor: pointer;
      &.active {
        background-color: #c20c0c;
        color: #fff;
        border-radius: 2px;
      }
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
