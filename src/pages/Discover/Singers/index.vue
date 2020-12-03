<template>
  <div class="singers-wrap w-def-container">
    <section class="left">
      <Categories :listData='singerCategories' />
    </section>
    <section class="right">

    </section>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import { getSingerListRequest } from '/requests/singer';
import { singerCategories } from '/@/apis/data';
import Categories from './Categories/index.vue';
import { IState } from './typing';
import { IRankData } from "/@/typings";

export default defineComponent({
  name: "Singers",
  components: {
    Categories
  },
  setup () {
    const state = reactive<IState>({
      singerList: [], // 排行榜列表
    });

    onMounted((): void => {
      getSingerList();
    });

    /**
     * 获取歌单分类
     */
    const getSingerList = async () => {
      const { list } = await getSingerListRequest({ limit: 100 });
      state.singerList = list;
    };

    return {
      ...toRefs(state),
      singerCategories
    }
  }
});
</script>

<style lang='scss' scoped>
.singers-wrap {
  display: flex;
  background-color: #fff;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  .left {
    width: 180px;
  }
  .right {
    flex: 1;
    overflow: hidden;
  }
}
</style>