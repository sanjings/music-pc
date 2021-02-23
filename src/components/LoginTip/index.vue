<template>
  <div class="login-tip">
    <p class="tip-txt">登录网易云音乐，可以享受无限收藏的乐趣，并且无限同步到手机</p>
    <a class="login-btn">用户登录</a>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'LoginTip'
});
</script>

<style lang="scss" scoped>
.login-tip {
  padding: 16px 22px;
  height: 125px;
  width: 100%;
  background: url('assets/images/sprite_login.png') no-repeat 0 9999px;
  background-position: 0 0;
  .tip-txt {
    line-height: 22px;
    font-size: 12px;
    color: #666;
  }
  .login-btn {
    display: block;
    margin: 12px auto 0;
    width: 100px;
    height: 31px;
    line-height: 31px;
    text-align: center;
    color: #fff;
    text-decoration: none;
    background: url('assets/images/sprite_login.png') no-repeat 0 9999px;
    background-position: 0 -195px;
    text-shadow: 0 1px 0 #8a060b;
    cursor: pointer;
    &:hover {
      background-position: -110px -195px;
    }
  }
}
</style>
