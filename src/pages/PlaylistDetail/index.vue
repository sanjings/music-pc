<template>
  <div class="playlist-detail w-def-container">
    <section class="left">
      <PlaylistInfo
        :detailData="detailData"
        :commentList="commentList"
        :currentPage="currentPage"
        :pageSize="queryParams.limit"
        :handleChangePage="handleChangePage"
      />
    </section>
    <section class="right">
      <!-- 相关歌单推荐 -->
      <RelatedPlaylist :listData="relatedPlaylist" />
    </section>
  </div>
</template>

<script lang="ts">
import { defineComponent, reactive, onMounted, computed, toRefs, watch } from 'vue';
import { useRoute } from 'vue-router';
import PlaylistInfo from 'components/PlaylistInfo/index.vue';
import RelatedPlaylist from './RelatedPlaylist/index.vue';
import { getPlaylistDetailRequest, getRelatedPlaylistRequest } from 'requests/playlist';
import { getPlaylistCommentRequest } from 'requests/comment';
import { IState, IQueryParams } from './typing';

export default defineComponent({
  name: 'PlaylistDetail',
  components: {
    PlaylistInfo,
    RelatedPlaylist
  },
  setup() {
    const route = useRoute();

    const state = reactive<IState>({
      queryParams: {
        id: 0,
        limit: 20,
        offset: 0
      },
      detailData: null,
      commentList: [],
      relatedPlaylist: []
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
      const id = (state.queryParams.id = Number(routeParams.id) || 19723756);
      state.queryParams.offset = 0;
      getPlaylistDetail(id);
      getRelatedPlaylist(id);
      getCommentList(state.queryParams);
    };

    /**
     * 获取歌单详情
     */
    const getPlaylistDetail = async (id: number) => {
      const { playlist } = await getPlaylistDetailRequest(id);
      state.detailData = playlist;
    };

    /**
     * 获取相关歌单
     */
    const getRelatedPlaylist = async (id: number) => {
      const { playlists } = await getRelatedPlaylistRequest(id);
      state.relatedPlaylist = playlists;
    };

    /**
     * 获取评论列表
     */
    const getCommentList = async (queryParams: IQueryParams) => {
      const { comments, total } = await getPlaylistCommentRequest(queryParams);
      state.commentList = comments;
    };

    /**
     * 切换评论分页
     */
    const handleChangePage = (value: number): void => {
      state.queryParams.offset = (value - 1) * state.queryParams.limit;
      getCommentList(state.queryParams);
    };

    /**
     * 监听路由变化，重新请求数据
     */
    watch(
      () => route.params.id,
      (oldVal, newVal): void => {
        init();
      }
    );

    return {
      ...toRefs(state),
      currentPage,
      handleChangePage
    };
  }
});
</script>

<style lang="scss" scoped>
.playlist-detail {
  display: flex;
  background-color: #fff;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  .left {
    flex: 1;
    padding: 40px;
    overflow: hidden;
    border-right: 1px solid #d3d3d3;
  }
  .right {
    width: 270px;
  }
}
</style>
