<template>
  <div class="hot-recom">
    <h2 class="module-title">热门推荐</h2>
    <div class="playlist">
      <template v-for="item of playList" :key="item.id">
        <div class="list-item">
          <PlaylistItem :data='item' />
        </div>
      </template>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import PlaylistItem from '/components/PlaylistItem/index.vue';
import { IPlayData } from '/@/typings';

export default defineComponent({
  name: 'Hot',
  components: {
    PlaylistItem
  },
  props: {
    playList: {
      type: Array as PropType<IPlayData[]>,
      required: true
    }
  }
})
</script>

<style lang='scss' scoped>
.hot-recom {
  padding-top: 20px;
  .playlist {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
    .list-item {
      padding-top: 20px;
      width: 140px;
    }
  }
}
</style>