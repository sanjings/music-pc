<template>
  <div class="recom-singer">
    <h2 class="title">
      <span class="title-text">入驻歌手</span>
      <router-link to='/discover/singers' class="more-link">查看全部</router-link>
    </h2>
    <div class="singer-list">
      <template v-for="item of singerList" :key="item.id">
        <div class="singer-item">
          <div class="cover-wrap">
            <img :src="item.img1v1Url + '?param=62y62'" class="cover" alt="singer" />
          </div>
          <div class="info">
            <p class="alias ellipsis">{{ item.alias.toString() || item.name }}</p>
            <p class="name ellipsis">{{ item.name }}</p>
          </div>
        </div>
      </template>
    </div>
    <div class="apply-wrap">
      <button class="apply-btn">申请成为网易音乐人</button>
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
  .title {
    display: flex;
    align-items: center;
    justify-content: space-between;
    padding-bottom: 5px;
    font-size: 12px;
    border-bottom: 1px solid #d3d3d3;
    .title-text {
      font-weight: 550;
    }
    .more-link {
      color: #666;
      &:hover {
        text-decoration: underline;
      }
    }
  }
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
  .apply-wrap{
    margin-top: 14px;
    text-align: center;
    .apply-btn{
      width: 205px;
      height: 31px;
      line-height: 31px;
      text-align: center;
      font-weight: 550;
      font-size: 12px;
      color: #333;
      background-color: rgba($color: #f6f6f6, $alpha: .6);
      border: 1px solid #d3d3d3;
      border-radius: 4px;
      cursor: pointer;
      &:hover{
        background-color: rgba($color: #f6f6f6, $alpha: .2);
      }
    }
  }
}
</style>