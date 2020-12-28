<template>
  <div class="toast">
    <div class="toast-mask" @click="handleClose"></div>
    <div class="toast-content">
      <p>{{ message }}</p>
      <i class="iconfont icon-close" v-if="showClose" @click="handleClose" />
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
export default defineComponent({
  name: 'Toast',
  props: {
    message: {
      type: String,
      default: ''
    },
    showClose: {
      type: Boolean,
      default: false
    },
    clickClose: Function
  },
  setup(props) {
    const handleClose = (e: MouseEvent): void => {
      e.stopPropagation();
      props.clickClose && props.clickClose();
    };

    return {
      handleClose
    };
  }
});
</script>

<style lang="scss" scoped>
.toast {
  position: fixed;
  left: 0;
  right: 0;
  top: 0;
  bottom: 0;
  z-index: 9999;
  .toast-mask {
    position: absolute;
    left: 0;
    right: 0;
    top: 0;
    bottom: 0;
    background-color: rgba(0, 0, 0, 0.6);
  }
  .toast-content {
    position: absolute;
    left: 50%;
    top: 50%;
    transform: translate(-50%, -50%);
    padding: 20px 35px;
    width: 25%;
    text-align: center;
    background-color: #fff;
    border-radius: 4px;
    .icon-close {
      position: absolute;
      right: 5px;
      top: 5px;
      cursor: pointer;
      &:hover {
        color: #888;
      }
    }
  }
}
</style>
