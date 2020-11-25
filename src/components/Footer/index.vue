<template>
  <footer class="footer-wrapper">
    <div class="footer-inner width-default-container">
      footer
    </div>
  </footer>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'Footer'
})
</script>

<style lang='scss' scoped>
.footer-wrapper{
  height: 173px;
  border-top: 1px solid #d3d3d3;
  background: #f2f2f2;
}
</style>