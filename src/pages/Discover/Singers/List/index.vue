<template>
  <ul class="singer-list" ref='listRef'>
    <template v-for="(item, index) of listData" :key="item.id">
      <li class="singer-item">
        <div class="cover-wrap" v-if="index < 10">
          <img
            class="cover" 
            src='/assets/images/singer.png' 
            :data-src="item.img1v1Url + '?param=130y130'" 
            alt="cover" 
          />
        </div>
        <div class="info">
          <span class="name">{{ item.name }}</span>
          <i class="icon" />
        </div>
      </li>
    </template>
  </ul>
</template>

<script lang='ts'>
import { defineComponent, PropType, watch } from 'vue';
import { ISingerData } from '/@/typings';
import imgLazyload from '/utils/lazyload';
import { debounce } from '/utils/tool';
import useLazyload from '/hooks/useLazyload';

export default defineComponent({
  name: 'SingerList',
  props: {
    listData: {
      type: Array as PropType<ISingerData[]>,
      required: true
    }
  },
  setup (props, ctx) {
    const { listRef, initLazyload } = useLazyload();

    /**
     * 监听数据改变，重新初始化懒加载函数
     */
    watch(
      () => props.listData,
      () => initLazyload()
    );

    return {
      listRef
    }
  }
})
</script>

<style lang='scss' scoped>
.singer-list {
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
  .singer-item {
    margin-top: 20px;
    width: 130px;
    cursor: pointer;
    .cover-wrap {
      width: 100%;
      height: 130px;
      border-radius: 2px;
      overflow: hidden;
      img {
        height: 100%;
      }
    }
    .info {
      display: flex;
      align-items: center;
      justify-content: space-between;
      padding: 10px 0;
      .name {
        font-size: 12px;
        &:hover {
          text-decoration: underline;
        }
      }
      .icon {
        display: inline-block;
        width: 17px;
        height: 18px;
        background: url('../../../../assets/images/sprite_icon2.png') no-repeat 0 -740px;
      }
    }
  }
}
</style>