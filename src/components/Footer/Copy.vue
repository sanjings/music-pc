<template>
  <div class="copy">
    <!-- 链接 -->
    <ul class="footer-links">
      <template v-for="item of footerLinks" :key="item.link">
        <li class="link-item">
          <a :href="item.link">{{ item.title }}</a>
        </li>
      </template>
    </ul>
    <!-- 版权 -->
    <p class="right">
      <span>网易公司版权所有©1997-2020</span>
      <span class="margin-left-8">杭州乐读科技有限公司运营：</span>
      <a href="https://p1.music.126.net/Mos9LTpl6kYt6YTutA6gjg==/109951164248627501.png" rel="noopener noreferrer">
        浙网文[2018]3506-263号
      </a>
    </p>
    <p class="contact">
      <span>违法和不良信息举报电话：0571-89853516</span>
      <a href="mailto:ncm5990@163.com" class="margin-left-8" target="_blank" rel="noopener noreferrer"> 举报邮箱：ncm5990@163.com </a>
    </p>
    <p class="right">
      <span>粤B2-20090191-18</span>
      <a href="https://beian.miit.gov.cn/#/Integrated/index" class="margin-left-8" rel="noopener noreferrer">
        工业和信息化部备案管理系统网站
      </a>
    </p>
  </div>
</template>

<script lang="ts">
import { defineComponent } from 'vue';
import { footerLinks } from '@/configs/localData';

export default defineComponent({
  name: 'Copy',
  setup() {
    return {
      footerLinks
    };
  }
});
</script>

<style lang="scss" scoped>
.copy {
  .footer-links {
    display: flex;
    align-items: center;
    .link-item {
      a {
        color: #999;
      }
      &::after {
        content: '|';
        margin: 0 10px;
        color: #999;
      }
      &:last-of-type {
        &::after {
          content: '';
        }
      }
    }
  }
  .right,
  .contact {
    line-height: 24px;
  }
  a {
    font-size: 12px;
    line-height: 24px;
    &:hover {
      text-decoration: underline;
    }
  }
}
.margin-left-8 {
  margin-left: 8px;
}
</style>
