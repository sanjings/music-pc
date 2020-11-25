import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import store from './store/index';

import './assets/styles/reset.css';
import './assets/styles/common.css';

/**
 * 捕获全局promise-reject
 */
window.addEventListener("unhandledrejection", (e) => {
  if (process.env.NODE_ENV === 'production') {
    e.preventDefault();
    console.log(e);
  }
})

createApp(App).use(router).use(store).mount('#app');
