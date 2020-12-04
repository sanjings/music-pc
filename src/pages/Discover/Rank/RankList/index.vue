<template>
  <ul class="rank-list">
    <template v-for="(item, index) of rankList" :key="index">
      <div class="rank-item">
        <h2 class="rank-name">{{ item.name }}</h2>
        <ul class="sub-list">
          <template v-for="sub of item.subList" :key="sub.id">
            <li class="sub-item">
              <div class="cover-wrap">
                <img :src="sub.coverImgUrl + '?param=40y40'" alt="cover" />
              </div>
              <div class="sub-info">
                <p class="sub-name">{{ sub.name }}</p>
                <p class="update-frequency">{{ sub.updateFrequency }}</p>
              </div>
            </li>
          </template>
        </ul>
      </div>
    </template>
  </ul>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import { IRankItem } from "../typing";

export default defineComponent({
  name: "RankList",
  props: {
    rankList: {
      type: Array as PropType<IRankItem[]>,
      required: true
    }
  }
});
</script>

<style lang='scss' scoped>
.rank-list {
  .rank-item {
    padding-top: 20px;
    .rank-name {
      padding: 0 10px 12px 15px;
      font-weight: 550;
    }
    .sub-list {
      .sub-item {
        display: flex;
        padding: 10px 0 10px 20px;
        cursor: pointer;
        &:hover {
          background-color: #f4f2f2;
        }
        .cover-wrap {
          margin-right: 8px;
          width: 40px;
          height: 40px;
          border-radius: 2px;
          overflow: hidden;
          img {
            height: 100%;
          }
        }
        .sub-info {
          display: flex;
          flex-direction: column;
          justify-content: space-between;
          height: 40px;
          font-size: 12px;
          .update-frequency {
            color: #999;
          }
        }
      }
    }
  }
}
</style>