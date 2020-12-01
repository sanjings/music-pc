<template>
  <div class="recom-rank">
    <h2>榜单</h2>
    <ul class="rank-list">
      <template v-for='(item, index) of rankList' :key="index">
        <RankSongs :data='item' />
      </template>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent } from 'vue';
import RankSongs from './RankSongs.vue';

export default defineComponent({
  name: 'RecomRank',
  components: {
    RankSongs
  },
  props: {
    rankList: {
      type: Array,
      required: true
    }
  }
})
</script>

<style lang='scss' scoped>
.recom-rank {
  .rank-list {
    display: flex;
    padding: 20px 0;
  }
}
</style>