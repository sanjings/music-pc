<template>
  <div class="home-container">
    <Header />
    <router-view></router-view>
    <Footer />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "/components/Header/index.vue";
import Footer from "/components/Footer/index.vue";

export default defineComponent({
  name: "HomeLayout",
  components: {
    Header,
    Footer
  }
});
</script>

<style lang='scss' scoped>
.home-container {
  display: flex;
  flex-direction: column;
  width: 100%;
  height: 100%;
}
</style>