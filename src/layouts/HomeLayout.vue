<template>
  <div class="container">
    <Header :navListData="headerNavList" />
    <router-view></router-view>
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "/components/Header/index.vue";
import { headerNavList } from "/@/apis/data";

export default defineComponent({
  name: "HomeLayout",
  components: {
    Header,
  },
  setup() {
    return {
      headerNavList
    };
  },
});
</script>

<style lang='scss' scoped>
.container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>