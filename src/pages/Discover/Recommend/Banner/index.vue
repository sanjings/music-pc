<template>
  <div class="banner-wrap" :style="{ background: bgUrl && `url(${bgUrl}?imageView&blur=40x20) center center/6000px` }">
    <div class="banner-inner w-def-container">
      <!-- 轮播图 -->
      <div class="carousel-section">
        <Carousel
          ref="carouselRef"
          :listData="bannerList"
          autoplay
          pagination
          :interval="8000"
          @change="handleCarouselChange"
        />
      </div>
      <!-- 客户端下载链接 -->
      <div class="download-wrap" v-once>
        <a href="https://music.163.com/#/download" target="_blank">
          <img src="/assets/images/download.png" alt="down" />
        </a>
      </div>
      <div class="controls" v-once>
        <button class="btn left" @click="carouselRef.movePrev()">
          <img src="/assets/icons/banner-control-left.png" alt="left" />
        </button>
        <button class="btn right" @click="carouselRef.moveNext()">
          <img src="/assets/icons/banner-control-right.png" alt="right" />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, PropType, watch } from 'vue';
import Carousel from '/components/Carousel/index.vue';
import { IBannerData } from '../typing';
import { IChangeParam } from '/components/Carousel/typing';

export default defineComponent({
  name: 'Banner',
  components: {
    Carousel
  },
  props: {
    bannerList: {
      type: Array as PropType<IBannerData[]>,
      required: true
    }
  },
  setup(props) {
    const carouselRef = ref(null);
    const bgUrl = ref<string>('');

    /**
     * 初始化背景图
     */
    watch(
      () => props.bannerList,
      (newValue): void => {
        if (newValue && newValue.length) {
          bgUrl.value = newValue[0].imageUrl;
        }
      }
    );

    /**
     * 轮播切换时的回调
     */
    const handleCarouselChange = ({ index }: IChangeParam): void => {
      if (props.bannerList) {
        const bannerList = props.bannerList;
        bgUrl.value = bannerList[index].imageUrl;
      }
    };

    return {
      bgUrl,
      carouselRef,
      handleCarouselChange
    };
  }
});
</script>

<style lang="scss" scoped>
.banner-wrap {
  transition: background 0.6s;
  .banner-inner {
    position: relative;
    display: flex;
    height: 280px;
    .carousel-section {
      width: 730px;
      height: 100%;
    }
    .download-wrap {
      width: 250px;
      height: 100%;
      overflow: hidden;
      a {
        display: block;
      }
    }
    .controls {
      .btn {
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        &:hover {
          background-color: rgba($color: #000, $alpha: 0.2);
        }
        &.left {
          left: -68px;
        }
        &.right {
          right: -68px;
        }
      }
    }
  }
}
</style>
