<template>
  <div class="carousel-wrapper">
    <ul class="carousel-wrapper">
      <li v-for="(item, index) of listData" :key="index">
        <img :src="item.imageUrl" alt="banner" />
      </li>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Carousel',
  props: {
    listData: Array
  }
})
</script>

<style lang='scss' scoped>
.carousel-wrapper{
  width: 730px;
  height: 100%;
  overflow: hidden;
}
</style>