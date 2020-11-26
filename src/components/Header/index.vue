<template>
  <header class="header-wrapper">
    <!-- 顶部 -->
    <div class="top-wrapper">
      <div class="top-inner width-max-container">
        <div class="left-part">
          <!-- logo -->
          <Logo />
          <!-- 导航 -->
          <Nav :listData="headerNavList" />
        </div>
        <div class="right-part">
          <!-- 搜索栏 -->
          <Search />
          <!-- 创作者中心 -->
          <button class="produce-center">
            <a href="javascript:;">创作者中心</a>
          </button>
          <!-- 登录 -->
          <button class="login">登录</button>
        </div>
      </div>
    </div>
    <div class="divider"></div>
  </header>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { headerNavList } from "/@/apis/data";
import Logo from "./Logo.vue";
import Nav from "./Nav.vue";
import Search from "./Search.vue";

export default defineComponent({
  name: "Header",
  components: {
    Logo,
    Nav,
    Search
  },
  setup () {
    return {
      headerNavList
    }
  }
});
</script>

<style lang='scss' scoped>
.header-wrapper {
  .top-wrapper {
    width: 100%;
    height: 70px;
    color: #fff;
    background-color: #242424;
    border-bottom: 1px solid #000000;
    .top-inner {
      display: flex;
      justify-content: space-between;
      align-items: center;
      height: 100%;
      .left-part,
      .right-part {
        display: flex;
        align-items: center;
        height: 100%;
      }
      .right-part {
        .produce-center {
          margin: 0 19px;
          width: 90px;
          height: 32px;
          border: 1px solid #4f4f4f;
          border-radius: 20px;
          overflow: hidden;
          &:hover {
            border-color: #ccc;
          }
          a {
            display: block;
            line-height: 32px;
            font-size: 12px;
            color: #ccc;
          }
        }
        .login {
          font-size: 12px;
          color: #787878;
          cursor: pointer;
          &:hover {
            color: #999;
          }
        }
      }
    }
  }
  .divider{
    width: 100%;
    height: 5px;
    background-color: #c20c0c;
  }
}
</style>