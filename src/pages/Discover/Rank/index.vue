<template>
  <div class="rank-wrap w-def-container">
    <section class="left">
      <RankList 
        :rankList="rankList" 
        :curRankId="queryParams.id" 
        @onClick="handleChangeRank" 
      />
    </section>
    <section class="right">
      <PlaylistInfo
        :detailData="rankDetail"
        :commentList="commentList"
        :currentPage="currentPage"
        :pageSize="queryParams.limit"
        :handleChangePage="handleChangePage"
      />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, toRefs, onMounted, computed } from 'vue';
import { useRoute } from 'vue-router';
import { getRankListRequest } from '/requests/rank';
import { getPlaylistCommentRequest } from '/requests/comment';
import { getPlaylistDetailRequest } from '/requests/playlist';
import RankList from './RankList/index.vue';
import PlaylistInfo from '/components/PlaylistInfo/index.vue';
import { IState, IQueryParams } from './typing';
import { IRankData } from '/@/typings';

export default defineComponent({
  name: 'Rank',
  components: {
    RankList,
    PlaylistInfo
  },
  setup() {
    const route = useRoute();

    const state = reactive<IState>({
      queryParams: {
        id: 19723756,
        limit: 20,
        offset: 0
      },
      rankList: [], // 排行榜列表
      rankDetail: null, // 排行榜详情
      commentList: [] // 评论列表
    });

    /**
     * 计算当前页码
     */
    const currentPage = computed((): number => state.queryParams.offset / state.queryParams.limit + 1);

    onMounted((): void => {
      init();
    });

    /**
     * 数据初始化
     */
    const init = (): void => {
      const routeParams = route.params;
      state.queryParams.id = Number(routeParams.id) || 19723756;
      getRankList();
      getRankDetail(state.queryParams.id);
      getCommentList(state.queryParams);
    };

    /**
     * 获取排行榜分类
     */
    const getRankList = async () => {
      const { list } = await getRankListRequest();
      state.rankList.push(
        {
          name: '云音乐特色榜',
          subList: list.filter((item: IRankData) => Boolean(item.ToplistType))
        },
        {
          name: '全球媒体榜',
          subList: list.filter((item: IRankData) => !item.ToplistType)
        }
      );
    };

    /**
     * 获取排行榜详情
     */
    const getRankDetail = async (id: number) => {
      const { playlist } = await getPlaylistDetailRequest(id);
      state.rankDetail = playlist;
    };

    /**
     * 获取评论列表
     */
    const getCommentList = async (queryParams: IQueryParams) => {
      const { comments, total } = await getPlaylistCommentRequest(queryParams);
      state.commentList = comments;
    };

    /**
     * 切换榜单
     */
    const handleChangeRank = (id: number) => {
      state.queryParams.id = id;
      state.queryParams.offset = 0;
      getRankDetail(id);
      getCommentList(state.queryParams);
    };

    /**
     * 切换评论分页
     */
    const handleChangePage = (value: number): void => {
      state.queryParams.offset = (value - 1) * state.queryParams.limit;
      getCommentList(state.queryParams);
    };

    return {
      ...toRefs(state),
      currentPage,
      handleChangeRank,
      handleChangePage
    };
  }
});
</script>

<style lang="scss" scoped>
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
    padding: 40px;
    overflow: hidden;
  }
}
</style>
