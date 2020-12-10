<template>
  <div class="playlist w-def-container">
    <ModuleTitle :title='queryParams.cat' size='large'>
      <!-- 分类选择 -->
      <template #default>
        <Categories :listData='catList' @onClick='handleChangeCat' />
      </template>
      <template #right>
        <i class="hot-tag">热门</i>
      </template>
    </ModuleTitle>
    <!-- 歌单列表 -->
    <div class="list-wrap">
      <template v-for="item of playList" :key="item.id">
        <div class="list-item">
          <PlaylistItem :data='item' />
        </div>
      </template>
    </div>
    <!-- 分页 -->
    <div class="pagination">
      <Pagination 
        :page-size='queryParams.limit'
        :total='listTotal'
        :current-page='currentPage'
        @pageChange='handleChangePage'
      />
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, onMounted, computed } from "vue";
import { useRoute } from 'vue-router';
import PlaylistItem from '/components/PlaylistItem/index.vue';
import ModuleTitle from '/components/ModuleTitle/index.vue';
import Pagination from '/components/Pagination/index.vue';
import Categories from './Categories/index.vue';
import { getCatListRequest, getPlaylistRequest } from '/requests/playlist';
import { IState } from './typing';
import { IQueryParams } from "./typing";

export default defineComponent({
  name: "Playlist",
  components: {
    Categories,
    PlaylistItem,
    ModuleTitle,
    Pagination
  },
  setup () {
    const route = useRoute();

    const state = reactive<IState>({
      queryParams: {
        cat: '全部',
        limit: 35,
        offset: 0
      },
      catList: [], // 分类数据
      playList: [], // 歌单列表
      listTotal: 0 // 跟单列表总数
    });

    /**
     * 计算当前页码
     */
    const currentPage = computed((): number => (state.queryParams.offset / state.queryParams.limit) + 1);

    onMounted((): void => {
      init();
    });

    const init = (): void => {
      const routeParams = route.params;
      state.queryParams.cat = routeParams.cat as string || '全部';
      getCatList();
      getPlayList(state.queryParams);
    }

    /**
     * 获取歌单分类
     */
    const getCatList = async () => {
      state.catList = await getCatListRequest();
    };

    /**
     * 获取歌单列表
     */
    const getPlayList = async (queryParams: IQueryParams) => {
      const { playlists, total } = await getPlaylistRequest(queryParams);
      state.playList = playlists;
      state.listTotal = Number(total);
    }

    /**
     * 改变歌单分类
     */
    const handleChangeCat = (cat: string): void => {
      state.queryParams.cat = cat;
      state.queryParams.offset = 0;
      getPlayList(state.queryParams);
    }

     /**
     * 切换分页
     */
    const handleChangePage = (value: number): void => {
      state.queryParams.offset = (value - 1) * state.queryParams.limit;
      getPlayList(state.queryParams);
    }

    return {
      ...toRefs(state),
      currentPage,
      handleChangeCat,
      handleChangePage
    }
  }
});
</script>

<style lang='scss' scoped>
.playlist {
  padding: 40px;
  background-color: #fff;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  .hot-tag {
    display: inline-block;
    width: 46px;
    height: 29px;
    line-height: 29px;
    text-align: center;
    font-size: 12px;
    background-color: #c20c0c;
    color: #fff;
    border-radius: 4px;
  }
  .list-wrap {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .list-item {
      margin: 20px 30px 0 0;
      width: 140px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
  .pagination {
    padding-top: 40px;
    text-align: center;
  }
}
</style>