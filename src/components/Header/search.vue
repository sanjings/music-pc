<template>
  <div class="search-wrapper">
    <i class="iconfont icon-search" />
    <input 
      type="text"
      class="search-input" 
      v-model="searchValue" 
      placeholder="音乐/视频/电台/用户"
    />
  </div>
</template>

<script lang='ts'>
import { defineComponent, ref } from "vue";

export default defineComponent({
  name: "Search",
  setup() {
    const searchValue = ref<String>('');

    return {
      searchValue
    }
  }
});
</script>

<style lang='scss' scoped>
.search-wrapper {
  display: flex;
  align-items: center;
  padding-right: 6px;
  width: 158px;
  height: 32px;
  background-color: #fff;
  border-radius: 32px;
  overflow: hidden;
  .icon-search{
    padding: 0 6px;
    color: #000;
    cursor: pointer;
  }
  .search-input{
    flex: 1;
    color: #333;
    overflow: hidden;
    &::placeholder{
      font-size: 12px;
      color: #9b9b9b;
    }
  }
}
</style>