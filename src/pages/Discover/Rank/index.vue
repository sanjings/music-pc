<template>
  <div class="rank-wrap w-def-container">
    
  </div>
</template>

<script lang='ts'>
import { defineComponent, reactive, toRefs, onMounted } from "vue";
import { getRankListRequest } from '/requests/rank';
import { IState } from './typing';
import { IRankData } from "/@/typings";

export default defineComponent({
  name: "Playlist",
  components: {
    
  },
  setup () {
    const state = reactive<IState>({
      globalList: [], // 全球榜
      featureList: [] // 特色榜
    });

    onMounted((): void => {
      getRankList();
    });

    /**
     * 获取歌单分类
     */
    const getRankList = async () => {
      const { list } = await getRankListRequest();
      state.featureList = list.filter((item: IRankData) => item.TopListType === 'H');
      state.globalList = list.filter((item: IRankData) => item.TopListType !== 'H');
    };

    return {
      ...toRefs(state)
    }
  }
});
</script>

<style lang='scss' scoped>
.rank-wrap {
  
}
</style>