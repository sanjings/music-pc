<template>
  <div class="recommend-wrap">
    <!-- banner -->
    <Banner :bannerList='bannerList' />
    <div class="recommend-inner w-def-container">
      <section class="inner-left">
        <!-- 热门推荐 -->
        <Hot :playList='hotPlayList' />
        <!-- 新碟上架 -->
        <RecomAlbum :albumList="albumList" />
      </section>
      <section class="inner-right">
        <!-- 登录提示 -->
        <LoginTip />
        <!-- 入驻歌手 -->
        <RecomSinger :singerList='singerList' />
      </section>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { 
  getBannersRequest,
  getHotPlayListRequest,
  getNewEstRequest,
  getHotSingerRequest,
  BannerTypeEnum
} from '/requests/recommend';
import { IBannerData, IState } from './typing';
import Banner from './Banner/index.vue';
import LoginTip from '/components/LoginTip/index.vue';
import Hot from './Hot/index.vue';
import RecomAlbum from './RecomAlbum/index.vue';
import RecomSinger from './RecomSinger/index.vue';

export default defineComponent({
  name: 'Recommend',
  components: {
    Banner,
    LoginTip,
    Hot,
    RecomAlbum,
    RecomSinger
  },
  setup () {
    const state = reactive<IState>({
      bannerList: [], // banner
      hotPlayList: [], // 热门歌单
      albumList: [], // 热门新碟
      singerList: [], // 推荐歌手
    });

    onMounted((): void => {
      getBannerList();
      getHotPlayList();
      getNewEstList();
      getSingerList();
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
    const getNewEstList = async () => {
      const { albums } = await getNewEstRequest();
      state.albumList = albums.slice(0, 5);
    };

    /**
     * 获取推荐歌手数据
     */
    const getSingerList = async () => {
      const { artists } = await getHotSingerRequest(5);
      state.singerList = artists;
    };

    return {
      ...toRefs(state)
    }
  }
})
</script>

<style lang="scss" scoped>
  .recommend-inner{
    display: flex;
    background-color: #fff;
    .inner-left{
      flex: 1;
      padding: 20px;
      border-left: 1px solid #d3d3d3;
      border-right: 1px solid #d3d3d3;
      overflow: hidden;
    }
    .inner-right{
      width: 250px;
      border-right: 1px solid #d3d3d3;
    }
  }
</style>