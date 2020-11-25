<template>
  <ul class="nav-list">
    <template v-for="item of listData" :key="item.link">
      <li :class="['nav-item', { active: $route.path === item.link }]">
        <router-link :to="item.link" v-if="item.isSelf">
          {{ item.name }}
        </router-link>
        <a :href="item.link" v-else>{{ item.name }}</a>
      </li>
    </template>
  </ul>
</template>

<script lang='ts'>
import { defineComponent } from "vue";
import { IHeaderNavList } from "/@/apis/data";

export default defineComponent({
  name: "HeaderNav",
  props: {
    listData: {
      type: Array
    },
  }
});
</script>

<style lang='scss' scoped>
.nav-list {
  display: flex;
  align-items: center;
  height: 70px;
  .nav-item {
    height: 100%;
    a {
      display: flex;
      align-items: center;
      padding: 0 19px;
      width: 100%;
      height: 100%;
      color: #ccc;
    }
    &.active {
      a {
        background-color: #000;
        color: #fff;
      }
    }
  }
}
</style>