<template>
  <div class="rank-wrap w-def-container">
    <section class="left">
      <RankList :rankList='rankList' />
    </section>
    <section class="right">

    </section>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import { getRankListRequest } from '/requests/rank';
import RankList from './RankList/index.vue';
import { IState } from './typing';
import { IRankData } from "/@/typings";

export default defineComponent({
  name: "Rank",
  components: {
    RankList
  },
  setup () {
    const state = reactive<IState>({
      rankList: [], // 排行榜列表
    });

    onMounted((): void => {
      getRankList();
    });

    /**
     * 获取歌单分类
     */
    const getRankList = async () => {
      const { list } = await getRankListRequest();
      state.rankList.push({
        name: '云音乐特色榜',
        subList: list.filter((item: IRankData) => Boolean(item.ToplistType))
      }, {
        name: '全球媒体榜',
        subList: list.filter((item: IRankData) => !item.ToplistType)
      })
    };

    return {
      ...toRefs(state)
    }
  }
});
</script>

<style lang='scss' scoped>
.rank-wrap {
  display: flex;
  background-color: #fff;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  .left {
    padding: 20px 0 40px;
    width: 240px;
    border-right: 1px solid #d3d3d3;
  }
  .right {
    flex: 1;
    overflow: hidden;
  }
}
</style>