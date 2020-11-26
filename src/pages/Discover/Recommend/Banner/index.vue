<template>
  <div 
    class="banner-wrapper" 
    :style="{background: (bgUrl ? `url(${bgUrl}?imageView&blur=40x20) center center/6000px` : '')}"
  >
    <div class="banner-inner width-default-container">
      <!-- 轮播图 -->
      <div class="carousel-section">
        <Carousel
          ref='carouselRef'
          :listData='bannerData'
          autoplay 
          @change='handleCarouselChange'
        />
      </div>
      <!-- 客户端下载链接 -->
      <div class="download-wrapper">
        <a href="https://music.163.com/#/download" target="_blank">
          <img src="/assets/images/download.png" alt="down" />
        </a>
      </div>
      <div class="controls">
        <button class="btn left" @click="changeBanner('PREV')">
          <img src="/assets/icons/banner-control-left.png" alt="left" />
        </button>
        <button class="btn right" @click="changeBanner('NEXT')">
          <img src="/assets/icons/banner-control-right.png" alt='right' />
        </button>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref, onMounted, PropType, watch } from 'vue';
import Carousel from '/components/Carousel/index.vue';
import { IBannerData, IBannerInstance } from '../typing';
import { EChangeType, IIndex } from '/components/Carousel/typing';

export default defineComponent({
  name: 'Banner',
  components: {
    Carousel
  },
  props: {
    bannerData: Array as PropType<IBannerData[]>
  },
  setup (props) {
    const carouselRef = ref<IBannerInstance | null>(null);
    const bgUrl = ref<string>('');

    /**
     * 初始化背景图
     */
    watch(
      () => props.bannerData,
      (newValue) => {
        if (newValue && newValue.length) {
          bgUrl.value = newValue[0].imageUrl;
        }
      }
    );

    /**
     * 手动切换轮播
     */
    const changeBanner = (type: EChangeType): void => {
      const carouselInstance = carouselRef.value;
      carouselInstance && carouselInstance.changeItem(type);
    };

    /**
     * 轮播切换时的回调
     */
    const handleCarouselChange = ({ index }: IIndex): void => {
      if (props.bannerData) {
        const bannerData = props.bannerData;
        bgUrl.value = bannerData[index].imageUrl;
      }
    };

    return {
      bgUrl,
      carouselRef,
      changeBanner,
      handleCarouselChange
    }
  }
});
</script>

<style lang='scss' scoped>
.banner-wrapper{
  .banner-inner{
    position: relative;
    display: flex;
    height: 270px;
    .carousel-section{
      width: 730px;
      height: 100%;
    }
    .download-wrapper{
      width: 250px;
      height: 100%;
      overflow: hidden;
      a{
        display: block;
      }
    }
    .controls{
      .btn{
        position: absolute;
        top: 50%;
        transform: translateY(-50%);
        cursor: pointer;
        &:hover{
          background-color: rgba($color: #000, $alpha: .2);
        }
        &.left{
          left: -68px;
        }
        &.right{
          right: -68px;
        }
      }
    }
  }
}
</style>