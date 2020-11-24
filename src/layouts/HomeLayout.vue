<template>
  <div class="container">
    <Header />
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Header from '../components/Header/index.vue';

export default defineComponent({
  name: 'HomeLayout',
  components: {
    Header
  },
  setup() {
    return {

    }
  }
})
</script>

<style lang='scss' scoped>
  .container{
    display: flex;
    flex-direction: column;
    height: 100%;
  }
</style>