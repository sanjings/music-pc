<template>
  <footer class="footer-wrap">
    <div class="footer-inner w-def-container">
      <Copy />
      <Enter />
    </div>
  </footer>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import Copy from './Copy.vue';
import Enter from './Enter.vue';

export default defineComponent({
  name: 'Footer',
  components: {
    Copy,
    Enter
  }
});
</script>

<style lang="scss" scoped>
.footer-wrap {
  padding: 15px 0 60px;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
  font-size: 12px;
  color: #666;
  .footer-inner {
    display: flex;
    justify-content: space-between;
  }
}
</style>
