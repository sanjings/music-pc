<template>
  <div class="playlist w-def-container">
    <ModuleTitle :title='queryParams.cat' size='large'>
      
    </ModuleTitle>
    <!-- 歌单列表 -->
    <div class="list-wrap">
      <template v-for="item of playList" :key="item.id">
        <div class="list-item">
          <PlaylistItem :data='item' />
        </div>
      </template>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import PlaylistItem from '/components/PlaylistItem/index.vue';
import ModuleTitle from '/components/ModuleTitle/index.vue';
import { getCatListRequest, getPlaylistRequest } from '/requests/playlist';
import { IState } from './typing';

export default defineComponent({
  name: "Playlist",
  components: {
    PlaylistItem,
    ModuleTitle
  },
  setup () {
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

    onMounted((): void => {
      getCatList();
      getPlayList();
    });

    /**
     * 获取歌单分类
     */
    const getCatList = async () => {
      const { categories, sub } = await getCatListRequest();
    };

    /**
     * 获取歌单列表
     */
    const getPlayList = async () => {
      const { playlists, total } = await getPlaylistRequest(state.queryParams);
      state.playList = playlists;
      state.listTotal = total;
    }

    return {
      ...toRefs(state)
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
  .list-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .list-item {
      margin: 20px 30px 0 0;
      width: 140px;
      &:nth-child(5n) {
        margin-right: 0;
      }
    }
  }
}
</style>