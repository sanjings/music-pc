<template>
  <div class="carousel-wrap">
    <ul class="list-wrap">
      <template v-for="(item, index) of listData" :key="index">
        <li :class="['carousel-item', { active: index === curIndex }]">
          <img :src="item.imageUrl" class="item-image" alt="banner" />
        </li>
      </template>
    </ul>
    <ul class="pagination" v-if="pagination" @click="changeCurIndex($event)">
      <template v-for="(item, index) of listData.length" :key="index">
        <li :class="['dot', { active: index === curIndex }]" :data-index="index"></li>
      </template>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch } from "vue";
import { MoveTypeEnum, IChangeParam } from "./typing";

export default defineComponent({
  name: "Carousel",
  props: {
    listData: {
      type: Array,
      required: true,
    },
    autoplay: {
      type: Boolean,
      default: false,
    },
    interval: {
      type: [Number, String],
      default: 3000,
    },
    pagination: {
      type: Boolean,
      default: false
    }
  },
  setup(props, ctx) {
    const curIndex = ref<number>(0);
    let timer: NodeJS.Timeout | null = null;

    /**
     * 监听listData，根据autoplay值，判断是否开启自动轮播
     */
    watch(
      () => props.listData,
      (newValue, preValue, onInvalidate) => {
        newValue.length > 1 && props.autoplay && autoplayAction();
        onInvalidate(() => {
          timer && clearAutoplay();
        });
      }
    );

    /**
     * 轮播切换时，向父组件触发change事件
     */
    watch(curIndex, () => {
      const param: IChangeParam = {
        index: curIndex.value,
      };
      ctx.emit("change", param);
    });

    /**
     * 自动播放
     */
    const autoplayAction = (): void => {
      const { interval } = props;

      timer && clearAutoplay();

      timer = setInterval((): void => {
        move(MoveTypeEnum.NEXT);
      }, Number(interval));
    };

    /**
     * 清除定时器
     */
    const clearAutoplay = (): void => {
      clearInterval(Number(timer));
      timer = null;
    };

    /**
     * 向前或向后切换item
     */
    const move = (type: MoveTypeEnum): void => {
      const listLengh = props.listData.length;

      if (listLengh <= 1) return;

      switch(type) {
        case MoveTypeEnum.NEXT:
          curIndex.value++;
          break;
        case MoveTypeEnum.PREV:
          curIndex.value--;
          break;
        default: return;
      }

      if (curIndex.value > listLengh - 1) {
        curIndex.value = 0;
      } else if (curIndex.value < 0) {
        curIndex.value = listLengh - 1;
      }
    };

    /**
     * 改变curIndex
     */
    const changeCurIndex = (e: MouseEvent): void => {
      const tar = e.target as HTMLElement;

      if (tar.className === 'dot') {
        const index = Number(tar.dataset.index);
        curIndex.value = index;
        props.autoplay && autoplayAction();
      }
    };

    /**
     * 切换下一张
     */
    const moveNext = (): void => {
      move(MoveTypeEnum.NEXT);
      props.autoplay && autoplayAction();
    };

    /**
     * 切换上一张
     */
    const movePrev = (): void => {
      move(MoveTypeEnum.PREV);
      props.autoplay && autoplayAction();
    };

    return {
      curIndex,
      changeCurIndex,
      moveNext,
      movePrev
    };
  }
});
</script>

<style lang='scss' scoped>
.carousel-wrap {
  position: relative;
  width: 100%;
  height: 100%;
  overflow: hidden;
  .list-wrap {
    position: relative;
    width: 100%;
    height: 100%;
    .carousel-item {
      position: absolute;
      height: 100%;
      opacity: 0;
      transition: opacity 0.6s;
      &.active {
        opacity: 1;
      }
      .item-image {
        height: 100%;
      }
    }
  }
  .pagination {
    position: absolute;
    left: 50%;
    bottom: 5px;
    transform: translateX(-50%);
    display: flex;
    align-items: center;
    .dot {
      width: 20px;
      height: 20px;
      text-align: center;
      background-color: transparent;
      cursor: pointer;
      &.active{
        &::after {
          background-color: #c20c0c;
        }
      }
      &:hover {
        &::after {
          background-color: #c20c0c;
        }
      }
      &::after {
        content: "";
        display: inline-block;
        width: 6px;
        height: 6px;
        background-color: #ccc;
        border-radius: 50%;
      }
    }
  }
}
</style>