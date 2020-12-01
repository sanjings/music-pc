<template>
  <div class="recom-singer">
    <h2>入驻歌手</h2>
    <div class="singer-list">
      <template v-for="item of singerList" :key="item.id">
        <div class="singer-item">
          <div class="cover-wrap">
            <img :src="item.picUrl + '?param=62y62'" class="cover" alt="singer" />
          </div>
          <div class="info">
            <p class="alias ellipsis">{{ item.alias.toString() || item.name }}</p>
            <p class="name ellipsis">{{ item.name }}</p>
          </div>
        </div>
      </template>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import { ISingerData } from '/@/typings';

export default defineComponent({
  name: 'RecomSinger',
  props: {
    singerList: {
      type: Array as PropType<ISingerData[]>,
      required: true
    }
  }
})
</script>

<style lang='scss' scoped>
.recom-singer{
  padding: 20px;
  .singer-list{
    .singer-item{
      display: flex;
      align-items: center;
      margin-top: 14px;
      background-color: #fafafa;
      cursor: pointer;
      &:hover{
        background-color: #f4f4f4;
      }
      .cover-wrap{
        margin-right: 10px;
        width: 62px;
        height: 62px;
        .cover{
          height: 100%;
        }
      }
      .info{
        flex: 1;
        display: flex;
        flex-direction: column;
        justify-content: space-around;
        padding: 6px 0;
        height: 62px;
        overflow: hidden;
        .alias{
          font-weight: 550;
        }
        .name{
          font-size: 12px;
          color: #666;
        }
      }
    }
  }
}
</style>