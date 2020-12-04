<template>
  <div class="pagination-wrap">
    <button :class="['prev-btn',{ 'disabled': currentPage === 1 }]" @click="movePrev">上一页</button>
    <ul class="page-list" @click="handleClickPage">
      <template v-for="num of pageCount" :key="num">
        <li 
          :class="['page-item', { 'active': num === currentPage }]"
          :data-num='num'
        >
          {{ num }}
        </li>
      </template>
    </ul>
    <button :class="['next-btn',{ 'disabled': currentPage === pageCount }]" @click='moveNext'>下一页</button>
  </div>
</template>

<script lang='ts'>
import { defineComponent, computed } from 'vue';
import { debounce } from '/utils/tool';

export default defineComponent({
  name: 'Pagination',
  props: {
    total: {
      type: Number,
      default: 0
    },
    pageSize: {
      type: Number,
      default: 35
    },
    currentPage: {
      type: Number,
      default: 1
    },
    maxCount: {
      type: Number,
      default: 9
    }
  },
  setup (props, ctx) {
    /**
     * 根据总数和pageSize计算分页数
     */
    const pageCount = computed((): number => Math.ceil(props.total / props.pageSize));

    /**
     * 页码点击事件
     */
    const handleClickPage = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      if (target.className === 'page-item') {
        const curNum = target.dataset.num;
        ctx.emit('pageChange', curNum);
      }
    }

    /**
     * 点击上一页
     */
    const movePrev = debounce((): void => {
      if (props.currentPage !== 1) {
        const curNum = props.currentPage - 1;
        ctx.emit('pageChange', curNum);
      }
    }, 200)

    /**
     * 点击下一页
     */
    const moveNext = debounce((): void => {
      if (props.currentPage !== pageCount.value) {
        const curNum = props.currentPage + 1;
        ctx.emit('pageChange', curNum);
      }
    }, 200)

    return {
      pageCount,
      handleClickPage,
      movePrev,
      moveNext
    }
  }
})
</script>

<style lang='scss' scoped>
.pagination-wrap {
  display: inline-block;
  height: 24px;
  font-size: 12px;
  .prev-btn,.next-btn {
    width: 70px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    border: 1px solid #e3e3e3;
    border-radius: 2px;
    background-color: rgba(80, 80, 80, 0.1);
    cursor: pointer;
    &:hover {
      background-color: rgba(140, 140, 140, 0.1);
    }
    &.disabled {
      background-color: rgba(100, 100, 100, 0.1);
      color: #cacaca;
      cursor: no-drop;
    }
  }
  .prev-btn {
    float: left;
    margin-right: 3px;
  }
  .next-btn {
    float: right;
    margin-left: 3px;
  }
  .page-list {
    float: left;
    display: flex;
    align-items: center;
    .page-item {
      margin-right: 3px;
      width: 24px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border: 1px solid #d3d3d3;
      border-radius: 2px;
      cursor: pointer;
      &:last-of-type {
        margin-right: 0;
      }
      &:hover {
        border-color: #333;
      }
      &.active {
        background-color: #c20c0c;
        color: #fff;
        border-color: #A2161B;
      }
    }
  }
}
</style>