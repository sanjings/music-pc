<template>
  <div class="discover-wrap">
    <Menu :menuList="discoverMenu" />
    <router-view />
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { discoverMenu } from '@/configs/localData';
import Menu from './Menu/index.vue';

export default defineComponent({
  name: 'Discover',
  components: {
    Menu
  },
  setup () {
    return {
      discoverMenu
    }
  }
})
</script>