<template>
  <div class="play-list">
    <template v-for="item of listData" :key="item.id">
      <PlayItem :data='item' />
    </template>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from 'vue';
import PlayItem from './item.vue';
import { IPlayData } from '/@/typings';

export default defineComponent({
  name: 'PlayList',
  components: {
    PlayItem
  },
  props: {
    listData: {
      type: Array as PropType<IPlayData[]>,
      required: true
    }
  }
})
</script>

<style lang='scss' scoped>
.play-list{
  display: flex;
  justify-content: space-between;
  flex-wrap: wrap;
}
</style>