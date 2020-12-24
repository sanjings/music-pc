<template>
  <div class="lyric-wrap">
    <h2 class="title">{{ songName }}</h2>
    <div class="srcoll-wrap">
      <ul class="lyric-list" v-if="currentLyric" ref="listRef">
        <template v-for="(item, index) of currentLyric.lines" :key="index">
          <li
            :ref="setItemRef" 
            :class="['lyric-item', { highlight: index === currentLineNum }]"
          >
            {{ item.txt }}
          </li>
        </template>
      </ul>
      <p v-else class="no-lyric">纯音乐，暂无歌词</p>
    </div>
  </div>
</template>

<script lang="ts">
import { defineComponent, ref, watch } from 'vue';

export default defineComponent({
  name: 'Lyric',
  props: {
    songName: String,
    currentLineNum: Number,
    currentLyric: Object
  },
  setup(props) {
    const listRef = ref();
    const lyricLineRefs = ref<HTMLElement[]>([]);

    /**
     * 给歌词列表动态分配ref
     */
    const setItemRef = (el: HTMLElement): void => {
      lyricLineRefs.value.push(el);
    }

    watch(
      () => props.currentLineNum,
      lineNum => {
        const listDom = listRef.value as HTMLElement;
        if (!listDom || !lineNum) return;
        if (lineNum > 4) {
          const curLineDom = lyricLineRefs.value[lineNum - 4];
          listDom.scrollTop = curLineDom.offsetTop;
        } else {
          listDom.scrollTop = 0;
        }
      }
    );

    return {
      listRef,
      lyricLineRefs,
      setItemRef
    };
  }
});
</script>

<style lang="scss" scoped>
.lyric-wrap {
  flex: 1;
  display: flex;
  flex-direction: column;
  border-left: 1px solid #292929;
  overflow: hidden;
  .title {
    height: 40px;
    line-height: 40px;
    text-align: center;
    font-weight: 550;
    border-bottom: 1px solid #222;
    
    letter-spacing: 1px;
  }
  .srcoll-wrap {
    flex: 1;
    overflow: hidden;
    padding: 20px 0;
    background-color: #222;
    .lyric-list {
      position: relative;
      padding: 0 35px;
      height: 100%;
      overflow: auto;
      text-align: center;
      .lyric-item {
        padding: 6px 0;
        font-size: 12px;
        color: #999;
        &.highlight {
          color: #fff;
          font-size: 14px;
        }
      }
    }
    .no-lyric {
      margin-top: 100px;
      text-align: center;
      color: #999;
    }
  }
}
/*定义滚动条高宽及背景 高宽分别对应横竖滚动条的尺寸*/
::-webkit-scrollbar {
  width: 6px;
  height: 6px;
  background-color: #111;
}

/*定义滚动条轨道 内阴影+圆角*/
::-webkit-scrollbar-track {
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0);
  border-radius: 4px;
  background-color: transparent;
}

/*定义滑块 内阴影+圆角*/
::-webkit-scrollbar-thumb {
  border-radius: 4px;
  -webkit-box-shadow: inset 0 0 6px rgba(0, 0, 0, 0.3);
  background-color: #555;
}
</style>
