<template>
  <div class="hot-recom">
    <ModuleTitle title="热门推荐" circle>
      <template v-slot:right>
        <router-link to='/discover/playlist' class="more">
          <span class="more-text">更多</span>
          <i class="iconfont icon-arrowsright" />
        </router-link>
      </template>
    </ModuleTitle>
    <div class="playlist">
      <template v-for="item of playList" :key="item.id">
        <div class="list-item">
          <PlaylistItem :data="item" />
        </div>
      </template>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import PlaylistItem from "/components/PlaylistItem/index.vue";
import ModuleTitle from "/components/ModuleTitle/index.vue";
import { IPlayData } from "/@/typings";

export default defineComponent({
  name: "Hot",
  components: {
    PlaylistItem,
    ModuleTitle
  },
  props: {
    playList: {
      type: Array as PropType<IPlayData[]>,
      required: true,
    }
  }
});
</script>

<style lang='scss' scoped>
.hot-recom {
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