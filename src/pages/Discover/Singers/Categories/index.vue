<template>
  <ul class="categories-wrap">
    <template v-for="(item, index) of listData" :key="index">
      <div class="categories-item">
        <h2 class="categories-title">{{ item.title }}</h2>
        <ul class="sub-list">
          <template v-for="sub of item.subList" :key="sub.id">
            <li class="sub-item">
              <span class="sub-title">{{ sub.title }}</span>
            </li>
          </template>
        </ul>
      </div>
    </template>
  </ul>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import { ISingerCategories } from "/@/typings/localData";

export default defineComponent({
  name: "Categories",
  props: {
    listData: {
      type: Array as PropType<ISingerCategories[]>,
      required: true
    }
  }
});
</script>

<style lang='scss' scoped>
.categories-wrap {
  .categories-item {
    padding: 10px 0;
    .categories-title {
      padding: 0 0 5px 15px;
      font-size: 16px;
    }
    .sub-list {
      .sub-item {
        padding-left: 15px;
        height: 29px;
        line-height: 29px;
        font-size: 12px;
        list-style: square inside;
        border-radius: 2px;
        cursor: pointer;
        &:hover > span {
          text-decoration: underline;
        }
      }
    }
  }
}
</style>