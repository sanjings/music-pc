<template>
  <div class="recom-rank">
    <h2 class="module-title">榜单</h2>
    <ul class="rank-list">
      <template v-for='(item, index) of rankList' :key="index">
        <RankSongs :data='item' />
      </template>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import RankSongs from './RankSongs.vue';
import { IRankData } from '/@/typings';

export default defineComponent({
  name: 'RecomRank',
  components: {
    RankSongs
  },
  props: {
    rankList: {
      type: Array as PropType<IRankData[]>,
      required: true
    }
  }
})
</script>

<style lang='scss' scoped>
.recom-rank {
  padding-top: 20px;
  .rank-list {
    display: flex;
    padding: 20px 0;
  }
}
</style>