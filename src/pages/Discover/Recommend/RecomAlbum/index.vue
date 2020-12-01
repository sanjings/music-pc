<template>
  <div class="recom-album">
    <h2>全部新碟</h2>
    <div class="album-list">
      <template v-for="item of albumList" :key="item.id">
        <AlbumCover :data='item' />
      </template>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { IAlbumData } from '/@/typings';
import AlbumCover from '/components/AlbumCover/index.vue';

export default defineComponent({
  name: 'RecomAlbum',
  components: {
    AlbumCover
  },
  props: {
    albumList: {
      type: Array as PropType<IAlbumData[]>,
      required: true
    }
  }
})
</script>

<style lang='scss' scoped>
.recom-album {
  .album-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;
    padding: 20px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    border-radius: 2px;
  }
}
</style>