<template>
  <div class="related-playlist">
    <h2 class="title">
      <span class="title-text">相关推荐</span>
    </h2>
    <div class="list-wrap">
      <template v-for="item of listData" :key="item.id">
        <router-link class="playlist-item" :to="{ name: 'playlistDetail', params: { id: item.id } }">
          <div class="cover-wrap">
            <img :src="item.coverImgUrl + '?param=62y62'" class="cover" alt="singer" />
          </div>
          <div class="info">
            <p class="name ellipsis">
              {{ item.name }}
            </p>
            <p class="creator ellipsis">by {{ item.creator.nickname }}</p>
          </div>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { IPlayData } from '/@/typings';

export default defineComponent({
  name: 'RelatedPlaylist',
  props: {
    listData: {
      type: Array as PropType<IPlayData[]>,
      required: true
    }
  }
});
</script>

<style lang="scss" scoped>
.related-playlist {
  padding: 20px;
  font-size: 12px;
  .title {
    padding-bottom: 5px;
    border-bottom: 1px solid #d3d3d3;
    .title-text {
      font-weight: 550;
    }
  }
  .list-wrap {
    .playlist-item {
      display: flex;
      align-items: center;
      margin-top: 14px;
      cursor: pointer;
      .cover-wrap {
        margin-right: 10px;
        width: 62px;
        height: 62px;
        .cover {
          height: 100%;
        }
      }
      .info {
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 6px 0;
        height: 62px;
        overflow: hidden;
        .name {
          &:hover {
            text-decoration: underline;
          }
        }
        .creator {
          color: #666;
          &:hover {
            text-decoration: underline;
          }
        }
      }
    }
  }
}
</style>
