<template>
  <div class="recommend-wrap">
    <Banner :bannerData='bannerData' />
    <div class="recommend-inner w-def-container">
      <section class="inner-left">
        
      </section>
      <section class="inner-right">
        <LoginTip />
      </section>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, onMounted, reactive, toRefs } from 'vue';
import { getBannersRequest, EBannerType } from '/requests/recommend';
import { IBannerData, IState } from './typing';
import Banner from './Banner/index.vue';
import LoginTip from '/components/LoginTip/index.vue';
import Hot from '/components/LoginTip/index.vue';

export default defineComponent({
  name: 'Recommend',
  components: {
    Banner,
    LoginTip
  },
  setup () {
    const state = reactive<IState>({
      bannerData: [] // banner数据
    });

    onMounted((): void => {
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

<style lang="scss" scoped>
  .recommend-inner{
    display: flex;
    height: 500px;
    background-color: #fff;
    .inner-left{
      flex: 1;
      overflow: hidden;
    }
    .inner-right{
      width: 250px;
    }
  }
</style>