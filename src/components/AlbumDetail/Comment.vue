<template>
  <div class="comment-wrap">
    <ModuleTitle title='评论'>
      <template #default>
        <span class="comment-count">共{{ totalCount }}评论</span>
      </template>
    </ModuleTitle>
    <ul class="comment-list">
      <template v-for="item of listData" :key="item.id">
        <li class="comment-item">
          <div class="avatar-wrap">
            <img :src="item.user.avatarUrl" alt="avatar" />
          </div>
          <div class="comment-info">
            <p class="content">
              <span class="nickname">{{ item.user.nickname }}：</span>
              <span>{{ item.content }}</span>
            </p>
            <p class="reply" v-if="item.beReplied && item.beReplied.length">
              <span class="nickname">{{ item.beReplied[0].user.nickname }}：</span>
              <span class="content">{{ item.beReplied[0].content }}</span>
            </p>
            <div class="other">
              <span class="time">{{ formatDate(item.time, 'YYYY年MM月DD日 HH:mm') }}</span>
              <div class="liked">
                <span>
                  <i class="iconfont icon-like" />
                  <span class="liked-count">({{ item.likedCount }})</span>
                </span>
                <span class="divider">|</span>
                <span class="reply-btn">回复</span>
              </div>
            </div>
          </div>
        </li>
      </template>
    </ul>
  </div>
</template>

<script lang='ts'>
import { defineComponent, PropType } from "vue";
import ModuleTitle from '/components/ModuleTitle/index.vue';
import { formatDate } from '/utils/format';

export default defineComponent({
  name: "Comment",
  components: {
    ModuleTitle
  },
  props: {
    listData: Array,
    totalCount: Number
  },
  setup () {
    return {
      formatDate
    }
  }
});
</script>

<style lang='scss' scoped>
.comment-wrap {
  font-size: 12px;
  .comment-count {
    margin-left: 20px;
    color: #666;
  }
  .comment-list {
    .comment-item {
      display: flex;
      padding: 15px 0;
      border-bottom: 1px dashed #e3e3e3;
      .avatar-wrap {
        margin-right: 10px;
        width: 50px;
        height: 50px;
        .avatar {
          height: 100%;
        }
      }
      .comment-info {
        flex: 1;
        overflow: hidden;
        .nickname {
          color: #0C73C2;
        }
        .content {
          line-height: 20px;
        }
        .reply {
          margin-top: 10px;
          padding: 8px 19px;
          width: 100%;
          line-height: 20px;
          background-color: #f4f4f4;
          border: 1px solid #DEDEDE;
        }
        .other{
          display: flex;
          justify-content: space-between;
          align-items: center;
          margin-top: 15px;
          .time {
            color: #999;
          }
          .liked {
            color: #666;
            .icon-like {
              margin-right: 4px;
              color: #0C73C2;
              font-size: 18px;
              cursor: pointer;
            }
            .divider {
              margin: 0 8px;
              color: #999;
            }
            .reply-btn {
              cursor: pointer;
            }
          }
        }
      } 
    }
  }
}
</style>