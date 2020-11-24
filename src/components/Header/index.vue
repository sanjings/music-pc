<template>
  <header class="header-wrapper">
    <div class="header-inner">{{ txt }}</div>
  </header>
</template>

<script lang='ts'>
import { defineComponent, ref } from 'vue';

export default defineComponent({
  name: 'Header',
  setup() {
    const txt = ref('哈哈哈哈');

    return {
      txt
    }
  }
})
</script>

<style lang='scss' scoped>
  .header-wrapper{
    width: 100%;
    height: 70px;
    color: #fff;
    background-color: #242424;
    .header-inner{
      margin: auto;
      width: 1100px;
      height: 100%;
    }
  }
</style>