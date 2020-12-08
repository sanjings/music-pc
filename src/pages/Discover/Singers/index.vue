<template>
  <div class="singers-wrap w-def-container">
    <section class="left">
      <!-- 歌手类型 -->
      <Categories
        :curField="{type: queryParams.type, area: queryParams.area}" 
        :listData='singerCategories'
        @onClick='handleChangeCat'
      />
    </section>
    <section class="right">
      <!-- 标题 -->
      <ModuleTitle :title='curTitle' size='large' />
      <!-- 首字母筛选 -->
      <template v-if="queryParams.type !== 'RECOM'">
        <Alpha 
          :listData='alphaTypes' 
          :curValue='queryParams.initial'
          @onClick='handleChangeAlpha'
        />
      </template>
      <!-- 歌手列表 -->
      <SingerList :listData='singerList' />
    </section>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import { getSingerListRequest, getRecomSingersRequest } from '/requests/singer';
import { singerCategories, alphaTypes } from '/@/apis/data';
import Categories from './Categories/index.vue';
import Alpha from './Alpha/index.vue';
import ModuleTitle from '/components/ModuleTitle/index.vue';
import SingerList from './List/index.vue';
import { IState } from './typing';
import { IRankData } from "/@/typings";

export default defineComponent({
  name: "Singers",
  components: {
    Categories,
    Alpha,
    ModuleTitle,
    SingerList
  },
  setup () {
    const state = reactive<IState>({
      curTitle: '入驻歌手',
      queryParams: {
        type: -1,
        area: -1,
        limit: 100,
        initial: -1
      },
      singerList: [] // 排行榜列表
    });

    onMounted((): void => {
      getRecomSingerList();
    });

    /**
     * 获取分类歌手数据
     */
    const getSingerList = async () => {
      const { artists } = await getSingerListRequest(state.queryParams);
      state.singerList = artists;
    };

    /**
     * 获取推荐歌手数据
     */
    const getRecomSingerList = async () => {
      const { artists } = await getRecomSingersRequest(state.queryParams.limit);
      state.singerList = artists;
    };

    /**
     * 改变歌手类型
     */
    const handleChangeCat = (
      params: { type: number | string; area: number; title: string }
    ): void => {
      const { type, area, title } = params;
      state.queryParams.type = type;
      state.queryParams.area = area;
      state.curTitle = title;
      if (type === 'RECOM') {
        getRecomSingerList();
      } else {
        getSingerList();
      }
    };

    /**
     * 首字母筛选
     */
    const handleChangeAlpha = (value: string | number): void => {
      state.queryParams.initial = value;
      getSingerList();
    };

    return {
      ...toRefs(state),
      singerCategories,
      alphaTypes,
      handleChangeCat,
      handleChangeAlpha
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
    padding: 35px 10px 40px;
    width: 180px;
    border-right: 1px solid #d3d3d3;
  }
  .right {
    flex: 1;
    padding: 40px;
    overflow: hidden;
  }
}
</style>