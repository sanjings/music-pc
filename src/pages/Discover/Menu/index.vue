<template>
  <div class="menu-wrap">
    <div class="menu-inner w-max-container">
      <ul class="list-wrap" v-if="menuList.length">
        <template v-for="item of menuList" :key="item.link">
          <li class="list-item">
            <router-link :to="item.link">
              <span class="item-title">{{ item.title }}</span>
            </router-link>
          </li>
        </template>
      </ul>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';

export default defineComponent({
  name: 'DiscoverMenu',
  props: {
    menuList: Array
  }
});
</script>

<style lang="scss" scoped>
.menu-wrap {
  width: 100%;
  background-color: #c20c0c;
  border-bottom: 1px solid #a40011;
  .menu-inner {
    padding-left: 180px;
    .list-wrap {
      display: flex;
      padding-bottom: 5px;
      .list-item {
        a {
          padding: 0 17px;
          font-size: 12px;
          color: #fff;
          &.router-link-active {
            .item-title {
              background-color: rgba($color: #000, $alpha: 0.2);
            }
          }
          .item-title {
            display: inline-block;
            padding: 0 13px;
            height: 20px;
            line-height: 20px;
            border-radius: 20px;
          }
        }
        &:hover {
          a {
            .item-title {
              background-color: rgba($color: #000, $alpha: 0.2);
            }
          }
        }
      }
    }
  }
}
</style>
