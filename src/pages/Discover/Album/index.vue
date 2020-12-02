<template>
  <div class="album-wrap w-def-container">
    <h2 class="module-title">热门新碟</h2>
    <!-- 热门新碟列表 -->
    <ul class="hot-album-list">
      <template v-for="item of hotAlbumList" :key="item.id">
        <li class="list-item">
          <AlbumCover :data="item" />
        </li>
      </template>
    </ul>
    <div class="all-album-wrap">
      <h2 class="module-title">全部新碟</h2>
      <!-- 分类新碟列表 -->
      <ul class="all-album-list">
        <template v-for="item of allAlbumList" :key="item.id">
          <li class="list-item">
            <AlbumCover :data="item" />
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import AlbumCover from "/components/AlbumCover/index.vue";
import { getHotAlbumRequest, getNewAlbumListRequest } from "/requests/album";
import { areaList } from "/@/apis/data";
import { AreaEnum } from "/@/typings/localData";
import { IState } from "./typing";

export default defineComponent({
  name: "Album",
  components: {
    AlbumCover,
  },
  setup() {
    const state = reactive<IState>({
      queryParams: {
        area: AreaEnum.ALL,
        limit: 35,
        offset: 0
      },
      allAlbumList: [], // 分类歌碟列表
      hotAlbumList: [], // 热门新碟列表
      listTotal: 0 // 跟单列表总数
    });

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
      state.listTotal = total;
    };

    return {
      ...toRefs(state),
      areaList
    };
  }
});
</script>

<style lang='scss' scoped>
.album-wrap {
  padding: 40px;
  background-color: #fff;
  .all-album-wrap {
    margin-top: 40px;
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