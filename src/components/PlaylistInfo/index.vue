<template>
  <div class="album-detail" v-if="detailData">
    <!-- 顶部基础信息 -->
    <Top :data="detailData" />
    <!-- 歌曲列表 -->
    <SongList 
      :listData="detailData.tracks" 
      :playCount="detailData.playCount"
    />
    <!-- 评论 -->
    <Comment 
      :listData="commentList" 
      :totalCount="detailData.commentCount"
    />
    <!-- 评论分页条 -->
    <div class="pagination">
      <Pagination 
        :page-size="pageSize" 
        :total="detailData.commentCount" 
        :current-page="currentPage" 
        @pageChange="handleChangePage"
      />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IRankData } from '/@/typings';
import Top from './Top.vue';
import SongList from './SongList.vue';
import Comment from './Comment.vue';
import Pagination from '/components/Pagination/index.vue';
import { IComment } from './typing';

export default defineComponent({
  name: 'AlbumDetail',
  components: {
    Top,
    SongList,
    Comment,
    Pagination
  },
  props: {
    detailData: Object as PropType<IRankData>,
    commentList: Array as PropType<IComment[]>,
    currentPage: Number,
    pageSize: Number,
    handleChangePage: Function
  }
});
</script>

<style lang="scss" scoped>
.album-detail {
  .pagination {
    padding-top: 40px;
    text-align: center;
  }
}
</style>
