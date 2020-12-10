<template>
  <div class="categories-wrap">
    <button class="btn" @click="showMenu = !showMenu">
      <span>选择分类</span>
      <i class="iconfont icon-arrowdown" />
    </button>
    <div class="menu" v-show="showMenu">
      <div class="menu-header">
        <button class="btn" @click="handleClickAll">全部风格</button>
      </div>
      <ul class="menu-list" @click="handleClick">
        <template v-for="(item, index) of listData" :key="index">
          <li class="menu-item">
            <div class="menu-name">{{ item.name }}</div>
            <ul class="sub-list">
              <template v-for="(sub, idx) of item.children" :key="idx">
                <li class="sub-item" :data-name='sub.name'>{{ sub.name }}</li>
              </template>
            </ul>
          </li>
        </template>
        <span class="divider"></span>
      </ul>
    </div>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType, ref } from "vue";
import { ICatData } from "../typing";

export default defineComponent({
  name: "Categories",
  props: {
    listData: Array as PropType<ICatData[]>
  },
  setup(props, ctx) {
    const showMenu = ref(false);

    /**
     * 点击事件
     */
    const handleClick = (e: MouseEvent): void => {
      const target = e.target as HTMLElement;
      if (target.className === 'sub-item') {
        const { name } = target.dataset;
        ctx.emit('onClick', name);
        showMenu.value = false;
      }
    };

    /**
     * 点击全部风格
     */
    const handleClickAll = (): void => {
      ctx.emit('onClick', '全部');
      showMenu.value = false;
    }

    return {
      showMenu,
      handleClick,
      handleClickAll
    }
  }
});
</script>

<style lang='scss' scoped>
.categories-wrap {
  position: relative;
  margin-left: 20px;
  font-size: 12px;
  .btn {
    display: flex;
    align-items: center;
    justify-content: center;
    width: 91px;
    height: 31px;
    font-size: 12px;
    color: #2A7BC8;
    background-color: rgba($color: #f6f6f6, $alpha: 0.8);
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    cursor: pointer;
    i {
      margin-left: 4px;
      font-size: 12px;
    }
    &:hover {
      background-color: rgba($color: #f6f6f6, $alpha: 0.2);
    }
  }
  .menu {
    position: absolute;
    top: 50px;
    left: -100px;
    width: 700px;
    z-index: 9;
    background-color: #fff;
    border: 1px solid #d3d3d3;
    border-radius: 4px;
    box-shadow: 0 4px 10px rgba($color: #000, $alpha: .3);
    .menu-header {
      padding: 20px 26px 12px;
      border-bottom: 1px solid #d3d3d3;
      .btn {
        width: 75px;
        height: 26px;
        color: #222;
      }
    }
    .menu-list {
      position: relative;
      padding: 0 26px 30px 0;
      .menu-item {
        display: flex;
        .menu-name {
          padding: 15px 30px 0;
          line-height: 24px;
          font-weight: 550;
        }
        .sub-list {
          flex: 1;
          overflow: hidden;
          display: flex;
          flex-wrap: wrap;
          align-items: center;
          padding: 15px 0 0 15px;
          .sub-item {
            line-height: 24px;
            cursor: pointer;
            &::after {
              content: '|';
              color: #d8d8d8;
              margin: 0 10px;
            }
            &:hover {
              text-decoration: underline;
            }
            &:last-of-type {
              &::after {
                content: '';
              }
            }
          }
        }
      }
      .divider {
        display: block;
        position: absolute;
        left: 84px;
        top: 0;
        width: 1px;
        height: 100%;
        background-color: #e3e3e3; 
      }
    }
  }
}
</style>