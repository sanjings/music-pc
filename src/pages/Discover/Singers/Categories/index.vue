<template>
  <ul class="categories-wrap" @click="handleClick">
    <template v-for="(item, index) of listData" :key="index">
      <div class="categories-item">
        <h2 class="categories-title">{{ item.title }}</h2>
        <ul class="sub-list">
          <template v-for="sub of item.subList" :key="sub.id">
            <li 
              :class="['sub-item', { active: curField.type === sub.type && curField.area === item.area }]"
              :data-type='sub.type'
              :data-area='item.area'
              :data-title='sub.title'
            >
              {{ sub.title }}
            </li>
          </template>
        </ul>
      </div>
    </template>
  </ul>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import { ISingerCategories } from "/@/typings/localData";

export default defineComponent({
  name: "Categories",
  props: {
    listData: {
      type: Array as PropType<ISingerCategories[]>,
      required: true
    },
    curField: {
      type: Object,
      required: true
    }
  },
  setup (props, ctx) {
    /**
     * 点击事件
     */
    const handleClick = (e: MouseEvent) => {
      const target = e.target as HTMLElement;
      if (target.className === 'sub-item') {
        const { type, area, title } = target.dataset;
        const params = {
          type: type === 'RECOM' ? 'RECOM' : Number(type),
          area: Number(area),
          title
        }
        ctx.emit('onClick', params);
      }
    };

    return {
      handleClick
    }
  }
});
</script>

<style lang='scss' scoped>
.categories-wrap {
  color: #333;
  .categories-item {
    padding: 15px 0 5px;
    border-bottom: 1px solid #d3d3d3;
    &:last-of-type {
      border-bottom: none;
    }
    .categories-title {
      padding: 0 0 5px 15px;
      font-size: 16px;
      font-weight: 550;
    }
    .sub-list {
      .sub-item {
        padding-left: 15px;
        height: 29px;
        line-height: 29px;
        font-size: 12px;
        list-style: square inside;
        border-radius: 2px;
        cursor: pointer;
        border: 1px solid transparent;
        &.active {
          color: #C20C0C;
          border: 1px solid #e3e3e3;
        }
        &:hover {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>