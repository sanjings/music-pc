<template>
  <div class="album-wrap w-def-container">
    <ModuleTitle title='热门新碟' size='large' />
    <!-- 热门新碟列表 -->
    <ul class="hot-album-list">
      <template v-for="item of hotAlbumList" :key="item.id">
        <li class="list-item">
          <AlbumCover :data="item" />
        </li>
      </template>
    </ul>
    <div class="all-album-wrap">
      <ModuleTitle title='全部新碟' size='large'>
        <Tab
          :curValue='queryParams.area' 
          :listData='areaList' 
          @onClick='handleChangeTab' 
        />
      </ModuleTitle>
      <!-- 分类新碟列表 -->
      <ul class="all-album-list" ref='listRef'>
        <template v-for="item of allAlbumList" :key="item.id">
          <li class="list-item">
            <AlbumCover :data="item" />
          </li>
        </template>
      </ul>
      <!-- 分页条 -->
      <div class="pagination">
        <Pagination 
          :page-size='queryParams.limit'
          :total='listTotal'
          :current-page='currentPage'
          @pageChange='handleChangePage'
        />
      </div>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, onMounted, computed } from "vue";
import AlbumCover from "/components/AlbumCover/index.vue";
import ModuleTitle from '/components/ModuleTitle/index.vue';
import Tab from '/components/Tab/index.vue';
import Pagination from '/components/Pagination/index.vue';
import { getHotAlbumRequest, getNewAlbumListRequest } from "/requests/album";
import { areaList } from "/@/apis/data";
import { AreaType } from "/@/typings/localData";
import { IState } from "./typing";

export default defineComponent({
  name: "Album",
  components: {
    AlbumCover,
    ModuleTitle,
    Tab,
    Pagination
  },
  setup() {
    const state = reactive<IState>({
      queryParams: {
        area: 'ALL',
        limit: 35,
        offset: 0
      },
      allAlbumList: [], // 分类歌碟列表
      hotAlbumList: [], // 热门新碟列表
      listTotal: 0 // 跟单列表总数
    });

     /**
     * 计算当前页码
     */
    const currentPage = computed((): number => (state.queryParams.offset / state.queryParams.limit) + 1);

    onMounted((): void => {
      getHotAlbumList();
      getAlbumList();
    });

    /**
     * 获取热门新碟数据
     */
    const getHotAlbumList = async () => {
      const { albums } = await getHotAlbumRequest();
      state.hotAlbumList = albums.slice(0, 10);
    };

    /**
     * 获取分类新碟列表
     */
    const getAlbumList = async () => {
      const { albums, total } = await getNewAlbumListRequest(state.queryParams);
      state.allAlbumList = albums;
      state.listTotal = Number(total);
    };

    /**
     * 切换专辑分裂
     */
    const handleChangeTab = (value: AreaType): void => {
      state.queryParams.area = value;
      state.queryParams.offset = 0;
      getAlbumList();
    }

    /**
     * 切换分页
     */
    const handleChangePage = (value: number): void => {
      state.queryParams.offset = (value - 1) * state.queryParams.limit;
      getAlbumList();
    }

    return {
      ...toRefs(state),
      areaList,
      currentPage,
      handleChangeTab,
      handleChangePage
    };
  }
});
</script>

<style lang='scss' scoped>
.album-wrap {
  padding: 40px;
  background-color: #fff;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  .all-album-wrap {
    margin-top: 40px;
    .pagination {
      padding-top: 40px;
      text-align: center;
    }
  }
  .all-album-list,
  .hot-album-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    .list-item {
      padding-top: 20px;
      width: 153px;
    }
  }
}
</style>