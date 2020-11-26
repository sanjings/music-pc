<template>
  <div class="recommend-wrapper">
    <Banner :bannerData='bannerData' />
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { getBannersRequest, EBannerType } from '/requests/recommend';
import { IState } from './typing';
import Banner from './Banner/index.vue';

export default defineComponent({
  name: 'Recommend',
  components: {
    Banner
  },
  setup () {
    const state = reactive<IState>({
      bannerData: [] // banner数据
    });

    onMounted(() => {
      getBannerData();
    });

    /**
     * 获取banner数据
     */
    const getBannerData = async () => {
      const { banners } = await getBannersRequest(EBannerType.PC);
      state.bannerData = banners;
    };

    return {
      ...toRefs(state)
    }
  }
})
</script>