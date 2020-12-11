<template>
  <div class="singer-wrap w-def-container" v-if="singerInfo">
    <div class="left">
      <h2 class="singer-name">{{ singerInfo.name }}</h2>
      <div class="avatar-wrap">
        <img :src="singerInfo.picUrl" alt="avatar" class="avatar" />
      </div>
      <!-- 热门歌曲列表 -->
      <HotSongs :listData='hotSongs' />
    </div>
    <div class="right"></div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs } from "vue";
import { useRoute } from 'vue-router';
import { IState } from "./typing";
import { getSingerDetailRequest } from '/requests/singer';
import HotSongs from './HotSongs/index.vue';

export default defineComponent({
  name: "Singer",
  components: {
    HotSongs
  },
  setup () {
    const route = useRoute();

    const state = reactive<IState>({
      singerInfo: null,
      hotSongs: [],
      curComponent: 'HotSongs'
    })

    onMounted((): void => {
      init();
    });

    /**
     * 数据初始化
     */
    const init = (): void => {
      const { id } = route.params;
      getSingerDetail(Number(id));
    };

    /**
     * 获取歌手详情
     */
    const getSingerDetail = async (id: number) => {
      const { artist, hotSongs } = await getSingerDetailRequest(id);
      state.singerInfo = artist;
      state.hotSongs = hotSongs;
    };

    return {
      ...toRefs(state)
    }
  }
});
</script>

<style lang='scss' scoped>
.singer-wrap {
  display: flex;
  background-color: #fff;
  border-left: 1px solid #d3d3d3;
  border-right: 1px solid #d3d3d3;
  .left {
    flex: 1;
    padding: 40px;
    overflow: hidden;
    .singer-name {
      font-size: 24px;
    }
    .avatar-wrap {
      margin-top: 10px;
      width: 100%;
      height: 300px;
      border: 1px solid #d3d3d3;
      overflow: hidden;
      .avatar {
        transform: translateY(-110px);
      }
    }
  }
  .right {
    width: 270px;
    padding: 40px 25px;
    border-left: 1px solid #d3d3d3;
  }
}
</style>