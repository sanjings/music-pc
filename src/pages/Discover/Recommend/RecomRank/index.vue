<template>
  <div class="recom-rank">
    <ModuleTitle title="榜单" circle>
      <template #right>
        <router-link to="/discover/rank" class="more">
          <span class="more-text">更多</span>
          <i class="iconfont icon-arrowsright" />
        </router-link>
      </template>
    </ModuleTitle>
    <ul class="rank-list">
      <template v-for="(item, index) of rankList" :key="index">
        <RankSongs :data="item" />
      </template>
    </ul>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import RankSongs from './RankSongs.vue';
import ModuleTitle from '/components/ModuleTitle/index.vue';
import { IRankData } from '/@/typings';

export default defineComponent({
  name: 'RecomRank',
  components: {
    RankSongs,
    ModuleTitle
  },
  props: {
    rankList: {
      type: Array as PropType<IRankData[]>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.recom-rank {
  padding-top: 20px;
  .more {
    display: flex;
    align-items: center;
    cursor: pointer;
    .more-text {
      margin-right: 4px;
      font-size: 12px;
      color: #666;
      &:hover {
        text-decoration: underline;
      }
    }
    .icon-arrowsright {
      font-size: 12px;
      color: #c20c0c;
    }
  }
  .rank-list {
    display: flex;
    padding-top: 20px;
  }
}
</style>
