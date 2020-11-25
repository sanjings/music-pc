<template>
  <div class="sub-nav-wrapper">
    <div class="sub-nav-inner width-max-container"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from "vue";


export default defineComponent({
  name: "SubNav"
});
</script>

<style lang='scss' scoped>
.sub-nav-wrapper {
  width: 100%;
  height: 35px;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  .sub-nav-inner{

  }
}
</style>