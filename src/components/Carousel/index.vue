<template>
  <div class="carousel-wrapper">
    <ul class="list-wrapper">
      <template v-for="(item, index) of listData" :key="index">
        <li :class="['carousel-item', { active: index === curIndex }]">
          <img :src="item.imageUrl" class="item-image" alt="banner" />
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, watch, watchEffect } from "vue";
import { EChangeType, IIndex } from './typing';

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
      type: Number,
      default: 5000,
    },
  },
  setup(props, ctx) {
    const curIndex = ref<number>(0);
    let timer: NodeJS.Timeout | null = null;

     /**
     * listData有数据时，开启自动轮播
     */
    watch(
      () => props.listData,
      (newValue, preValue, onInvalidate) => {
        newValue.length && props.autoplay && autoplayAction();
        onInvalidate(() => {
          timer && clearAutoplay();
        });
      }
    );

    /**
     * 轮播切换时，向父组件触发change事件
     */
    watch(curIndex, () => {
      const param: IIndex = {
        index: curIndex.value
      };
      ctx.emit('change', param);
    });

    /**
     * 自动播放
     */
    const autoplayAction = (): void => {
      const { interval } = props;

      timer && clearAutoplay();

      timer = setInterval((): void => {
        changeCurIndex(EChangeType.NEXT);
      }, interval);
    };

    /**
     * 清除定时器
     */
    const clearAutoplay = (): void => {
      clearInterval(Number(timer));
      timer = null;
    };

    /**
     * 切换当前index
     */
    const changeCurIndex = (type: EChangeType): void => {
      const listLengh = props.listData.length;

      if (type === EChangeType.NEXT) {
        curIndex.value++;
      } else if (type === EChangeType.PREV) {
        curIndex.value--;
      } else {
        return;
      }
      
      if (curIndex.value > listLengh - 1) {
        curIndex.value = 0;
      } else if (curIndex.value < 0) {
        curIndex.value = listLengh - 1;
      }
    };

    /**
     * 手动切换item
     */
    const changeItem = (type: EChangeType): void => {
      changeCurIndex(type);
      props.autoplay && autoplayAction();
    }

    return {
      curIndex,
      changeItem
    };
  }
});
</script>

<style lang='scss' scoped>
.carousel-wrapper {
  width: 100%;
  height: 100%;
  overflow: hidden;
  .list-wrapper {
    position: relative;
    width: 100%;
    height: 100%;
    .carousel-item {
      position: absolute;
      height: 100%;
      opacity: 0;
      transition: opacity 1s ease-in-out;
      &.active {
        opacity: 1;
      }
      .item-image {
        height: 100%;
      }
    }
  }
}
</style>