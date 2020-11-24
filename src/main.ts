import { createApp } from 'vue';
import App from './App.vue';
import router from './router/index';
import vuex from './store/index';

import './assets/styles/reset.css';
import './assets/styles/common.css';

createApp(App).use(router).use(vuex).mount('#app');
