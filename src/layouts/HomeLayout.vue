<template>
  <div class="home-container">
    <Header v-once />
    <router-view />
    <Footer v-once />
    <Player />
  </div>
</template>

<script lang="ts">
import { defineComponent } from "vue";
import Header from "/components/Header/index.vue";
import Footer from "/components/Footer/index.vue";
import Player from "/components/Player/index.vue";

export default defineComponent({
  name: "HomeLayout",
  components: {
    Header,
    Footer,
    Player
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