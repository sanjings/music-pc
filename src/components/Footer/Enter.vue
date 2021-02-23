<template>
  <div class="enter">
    <ul class="images">
      <template v-for="(item, index) of footerImages" :key="index">
        <li class="link-item">
          <a :href="item.link" target="_blank" rel="noopener noreferrer" class="image-link" />
          <span class="item-title">{{ item.title }}</span>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { footerImages } from '@/apis/data';

export default defineComponent({
  name: 'Enter',
  setup() {
    return {
      footerImages
    };
  }
});
</script>

<style lang="scss" scoped>
.enter {
  padding-top: 17px;
  .images {
    display: flex;
    align-items: center;
    justify-content: space-between;
    width: 450px;
    .link-item {
      display: flex;
      flex-direction: column;
      align-items: center;
      .image-link {
        display: block;
        width: 50px;
        height: 45px;
        text-align: center;
        background: url('assets/images/sprite_footer_02.png') no-repeat;
        background-size: 110px 450px;
      }
      &:nth-child(1) .image-link {
        background-position: 2px -50px;
      }
      &:nth-child(2) .image-link {
        background-position: -62px -101px;
      }
      &:nth-child(3) .image-link {
        background-position: 2px 0;
      }
      &:nth-child(4) .image-link {
        background-position: -62px -50px;
      }
      &:nth-child(5) .image-link {
        background-position: 2px -101px;
      }
    }
    .item-title {
      margin-top: 5px;
      color: #999;
    }
  }
}
</style>
