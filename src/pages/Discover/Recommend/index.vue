<template>
  <div class="recommend-wrap">
    <!-- banner -->
    <Banner :bannerList="bannerList" />
    <div class="recommend-inner w-def-container">
      <section class="inner-left">
        <!-- 热门推荐 -->
        <Hot :playList="hotPlayList" />
        <!-- 新碟上架 -->
        <RecomAlbum :albumList="albumList" />
        <!-- 榜单 -->
        <RecomRank :rankList="rankList" />
      </section>
      <section class="inner-right">
        <!-- 登录提示 -->
        <LoginTip />
        <!-- 入驻歌手 -->
        <RecomSinger :singerList="singerList" />
      </section>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { getBannersRequest, getHotPlayListRequest, BannerTypeEnum } from '/requests/recommend';
import { getHotAlbumRequest } from '/requests/album';
import { getPlaylistDetailRequest } from '/requests/playlist';
import { getSingerListRequest } from '/requests/singer';
import { IBannerData, IState } from './typing';
import Banner from './Banner/index.vue';
import LoginTip from '/components/LoginTip/index.vue';
import Hot from './Hot/index.vue';
import RecomAlbum from './RecomAlbum/index.vue';
import RecomSinger from './RecomSinger/index.vue';
import RecomRank from './RecomRank/index.vue';

export default defineComponent({
  name: 'Recommend',
  components: {
    Banner,
    LoginTip,
    Hot,
    RecomAlbum,
    RecomSinger,
    RecomRank
  },
  setup() {
    const state = reactive<IState>({
      bannerList: [], // banner
      hotPlayList: [], // 热门歌单
      albumList: [], // 热门新碟
      singerList: [], // 推荐歌手
      rankList: [] // 推荐榜单
    });

    onMounted((): void => {
      getBannerList();
      getHotPlayList();
      getHotAlbumList();
      getSingerList();
      getRankList();
    });

    /**
     * 获取banner数据
     */
    const getBannerList = async () => {
      const { banners } = await getBannersRequest(BannerTypeEnum.PC);
      state.bannerList = banners;
    };

    /**
     * 获取热门歌单数据
     */
    const getHotPlayList = async () => {
      const { result } = await getHotPlayListRequest(8);
      state.hotPlayList = result;
    };

    /**
     * 获取热门新碟数据
     */
    const getHotAlbumList = async () => {
      const { albums } = await getHotAlbumRequest();
      state.albumList = albums.slice(0, 5);
    };

    /**
     * 获取入驻歌手数据
     */
    const getSingerList = async () => {
      const { artists } = await getSingerListRequest({ limit: 10 });
      state.singerList = artists;
    };

    /**
     * 获取推荐榜单数据
     */
    const getRankList = async () => {
      const res = await Promise.all(
        [19723756, 3779629, 2884035].map((item: number) => {
          return getPlaylistDetailRequest(item);
        })
      );

      state.rankList = res.map(item => item.playlist);
    };

    return {
      ...toRefs(state)
    };
  }
});
</script>

<style lang="scss" scoped>
.recommend-inner {
  display: flex;
  background-color: #fff;
  .inner-left {
    flex: 1;
    padding: 20px;
    border-left: 1px solid #d3d3d3;
    border-right: 1px solid #d3d3d3;
    overflow: hidden;
  }
  .inner-right {
    width: 250px;
    border-right: 1px solid #d3d3d3;
  }
}
</style>
