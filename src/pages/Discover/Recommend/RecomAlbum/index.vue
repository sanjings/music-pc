<template>
  <div class="recom-album">
    <ModuleTitle title="新碟上架" circle>
      <template #right>
        <router-link to='/discover/album' class="more">
          <span class="more-text">更多</span>
          <i class="iconfont icon-arrowsright" />
        </router-link>
      </template>
    </ModuleTitle>
    <ul class="album-list">
      <template v-for="item of albumList" :key="item.id">
        <li class="list-item">
          <AlbumCover :data='item' size='small' />
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { IAlbumData } from '/@/typings';
import AlbumCover from '/components/AlbumCover/index.vue';
import ModuleTitle from "/components/ModuleTitle/index.vue";

export default defineComponent({
  name: 'RecomAlbum',
  components: {
    AlbumCover,
    ModuleTitle
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
  padding-top: 40px;
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
  .album-list {
    display: flex;
    flex-wrap: wrap;
    justify-content: space-between;
    margin: 20px 0;
    padding: 20px;
    background-color: #f5f5f5;
    border: 1px solid #d3d3d3;
    border-radius: 2px;
    .list-item {
      width: 118px;
    }
  }
}
</style>