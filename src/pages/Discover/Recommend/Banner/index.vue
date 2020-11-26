<template>
  <div class="banner-wrapper">
    <div class="banner-inner width-default-container">
      <!-- 轮播图 -->
      <Carousel :listData='bannerData' />
      <!-- 客户端下载链接 -->
      <div class="download-wrapper">
        <a href="https://music.163.com/#/download" target="_blank">
          <img src="/assets/images/download.png" alt="down" />
        </a>
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import Carousel from '/components/Carousel/index.vue';

export default defineComponent({
  name: 'Banner',
  components: {
    Carousel
  },
  props: {
    bannerData: Array
  }
});
</script>

<style lang='scss' scoped>
.banner-wrapper{
  .banner-inner{
    display: flex;
    height: 270px;
    .download-wrapper{
      width: 250px;
      height: 100%;
      overflow: hidden;
      a{
        display: block;
      }
    }
  }
}
</style>