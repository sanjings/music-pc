<template>
  <header class="header-wrapper">
    <div class="header-inner width-container">
      <div class="logo"></div>
      <header-nav :listData="navListData" />
    </div>
  </header>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { IHeaderNavList } from "/@/apis/data";
import HeaderNav from './nav.vue'

export default defineComponent({
  name: "Header",
  components: {
    HeaderNav
  },
  props: {
    navListData: {
      type: Array
    }
  },
  setup() {},
});
</script>

<style lang='scss' scoped>
.header-wrapper {
  width: 100%;
  height: 70px;
  color: #fff;
  background-color: #242424;
  .header-inner {
    display: flex;
    height: 100%;
    .logo {
      width: 176px;
      height: 100%;
      background: url("../../assets/images/sprite_logo.png") no-repeat 0 0;
      overflow: hidden;
    }
  }
}
</style>