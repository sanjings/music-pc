<template>
  <div class="pagination-wrap" v-if="total">
    <button :class="['prev-btn', { disabled: currentPage === 1 }]" @click="movePrev">上一页</button>
    <ul class="page-list" @click="handleClickPage">
      <li :class="['page-item', { active: currentPage === 1 }]" :data-num="1">1</li>
      <span v-if="countList.length && countList[0] !== 2" class="dots">...</span>
      <template v-for="num of countList" :key="num">
        <li :class="['page-item', { active: num === currentPage }]" :data-num="num">
          {{ num }}
        </li>
      </template>
      <span v-if="countList.length && countList[countList.length - 1] !== allCount - 1" class="dots">...</span>
      <li 
        v-if="allCount > 1" 
        :class="['page-item', { active: currentPage === allCount }]" 
        :data-num="allCount"
      >
        {{ allCount }}
      </li>
    </ul>
    <button :class="['next-btn', { disabled: currentPage === allCount }]" @click="moveNext">下一页</button>
  </div>
</template>

<script lang="ts">
import { defineComponent, computed, watch, ref } from 'vue';
import { debounce } from 'utils/tool';

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
  setup(props, ctx) {
    const countList = ref<number[]>([]);

    /**
     * 根据总数和pageSize计算总的分页数
     */
    const allCount = computed((): number => Math.ceil(props.total / props.pageSize));

    /**
     * 初始化分页列表
     */
    const initCountList = () => {
      const maxCount: number = props.maxCount;
      const currentPage: number = props.currentPage;
      const allCountNum: number = allCount.value;
      const numList: Array<number> = [];
      if (allCountNum > maxCount) {
        for (let i = 2; i < maxCount; i++) {
          numList.push(i);
        }
      } else {
        for (let i = 2; i < allCountNum; i++) {
          numList.push(i);
        }
      }
      countList.value = numList;
    };

    /**
     * 页码点击事件
     */
    const handleClickPage = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      if (target.className === 'page-item') {
        const curNum: number = Number(target.dataset.num);
        ctx.emit('pageChange', curNum);
        changeCountList(curNum);
      }
    };

    /**
     * 点击上一页
     */
    const movePrev = debounce((): void => {
      if (props.currentPage !== 1) {
        const curNum: number = props.currentPage - 1;
        ctx.emit('pageChange', curNum);
        changeCountList(curNum);
      }
    }, 200);

    /**
     * 点击下一页
     */
    const moveNext = debounce((): void => {
      if (props.currentPage !== allCount.value) {
        const curNum: number = props.currentPage + 1;
        ctx.emit('pageChange', curNum);
        changeCountList(curNum);
      }
    }, 200);

    /**
     * 根据当前点击页，判断分页条显示逻辑
     */
    const changeCountList = (currentPage: number): void => {
      const allCountNum: number = allCount.value;
      const countArr: number[] = countList.value,
        countArrLen: number = countArr.length;
      const newList: Array<number> = [];
      if (allCountNum < props.maxCount) return;
      // 点击第一页时
      if (currentPage === 1) {
        initCountList();
      } else if (currentPage === allCountNum) {
        // 点击最后一页时
        for (let i = allCountNum - props.maxCount + 2; i < allCountNum; i++) {
          newList.push(i);
        }
        countList.value = newList;
      } else if (currentPage >= countArr[countArrLen - 3]) {
        // 除开第一页和最后一页，点击当前列表最后三项时
        for (let i = countArr[1]; i <= countArr[countArrLen - 1] + 1; i++) {
          newList.push(i);
        }
        if (newList[newList.length - 1] >= allCountNum) {
          for (let i = allCountNum - props.maxCount; i < allCountNum; i++) {
            newList.push(i);
          }
        } else {
          countList.value = newList;
        }
      } else if (currentPage <= countArr[1] && countArr[0] !== 2) {
        // 除开第一页和最后一页，点击当前列表前两页时
        for (let i = countArr[0] - 1; i <= countArr[countArrLen - 1] - 1; i++) {
          newList.push(i);
        }
        if (newList[0] === 2) {
          initCountList();
        } else {
          countList.value = newList;
        }
      }
    };

    /**
     * 监听总数变化，计算分页数组
     */
    watch(
      () => props.total,
      () => {
        props.total && initCountList();
      },
      {
        immediate: true
      }
    );

    return {
      allCount,
      countList,
      handleClickPage,
      movePrev,
      moveNext
    };
  }
});
</script>

<style lang="scss" scoped>
.pagination-wrap {
  display: inline-block;
  height: 24px;
  font-size: 12px;
  .prev-btn,
  .next-btn {
    width: 70px;
    height: 24px;
    line-height: 24px;
    text-align: center;
    font-size: 12px;
    border: 1px solid #e3e3e3;
    border-radius: 2px;
    background-color: rgba(80, 80, 80, 0.1);
    user-select: none;
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
    .dots {
      margin-right: 3px;
      width: 16px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      font-weight: 700;
    }
    .page-item {
      margin-right: 3px;
      padding: 0 8px;
      height: 24px;
      line-height: 24px;
      text-align: center;
      border: 1px solid #d3d3d3;
      border-radius: 2px;
      cursor: pointer;
      user-select: none;
      &:last-of-type {
        margin-right: 0;
      }
      &:hover {
        border-color: #333;
      }
      &.active {
        background-color: #c20c0c;
        color: #fff;
        border-color: #a2161b;
      }
    }
  }
}
</style>
