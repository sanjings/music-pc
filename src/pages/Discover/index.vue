<template>
  <div class="discover-wrapper">
    <Menu :menuList="discoverMenu" />
    <router-view></router-view>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import { discoverMenu } from '/@/apis/data';
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