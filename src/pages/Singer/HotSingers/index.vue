<template>
  <div class="hot-singers">
    <h2 class="title">热门歌手</h2>
    <div class="list-wrap">
      <template v-for="item of listData" :key="item.id">
        <router-link :to="{ name: 'singer', params: { id: item.id } }" class="singer-item">
          <div class="avatar-wrap">
            <img :src="item.img1v1Url + '?param=60y60'" alt="avatar" class="avatar" />
          </div>
          <p class="singer-name">{{ item.name }}</p>
        </router-link>
      </template>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, PropType } from 'vue';
import { useRouter } from 'vue-router';
import { ISingerData } from '/@/typings';

export default defineComponent({
  name: 'HotSingers',
  props: {
    listData: Array as PropType<ISingerData[]>
  }
});
</script>

<style lang="scss" scoped>
.hot-singers {
  font-size: 12px;
  .title {
    padding-bottom: 8px;
    font-weight: 550;
    border-bottom: 1px solid #ccc;
  }
  .list-wrap {
    display: flex;
    justify-content: space-between;
    flex-wrap: wrap;
  }
  .singer-item {
    margin-top: 20px;
    width: 56px;
    cursor: pointer;
    .avatar-wrap {
      width: 100%;
      height: 56px;
      .avatar {
        height: 100%;
      }
    }
    .singer-name {
      padding-top: 8px;
      &:hover {
        text-decoration: underline;
      }
    }
  }
}
</style>
