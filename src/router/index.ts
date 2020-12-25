import { defineAsyncComponent } from 'vue';
import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeLayout from '../layouts/HomeLayout.vue';

/**
 * 定义异步组件
 * @param path 相对路径
 */
const asyncComponent = (path: string) => defineAsyncComponent(() => import(path));

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeLayout,
    redirect: '/discover',
    children: [
      {
        path: '/discover',
        name: 'discover',
        component: asyncComponent('../pages/Discover/index.vue'),
        redirect: '/discover/recommend',
        children: [
          {
            path: '/discover/recommend',
            name: 'recommend',
            component: asyncComponent('../pages/Discover/Recommend/index.vue')
          },
          {
            path: '/discover/rank',
            name: 'rank',
            component: asyncComponent('../pages/Discover/Rank/index.vue')
          },
          {
            path: '/discover/playlist',
            name: 'playlist',
            component: asyncComponent('../pages/Discover/Playlist/index.vue')
          },
          {
            path: '/discover/singers',
            name: 'singers',
            component: asyncComponent('../pages/Discover/Singers/index.vue')
          },
          {
            path: '/discover/album',
            name: 'album',
            component: asyncComponent('../pages/Discover/Album/index.vue')
          },
          {
            path: '/discover/singer/:id',
            name: 'singer',
            component: asyncComponent('../pages/Singer/index.vue')
          },
          {
            path: '/discover/playlist/:id',
            name: 'playlistDetail',
            component: asyncComponent('../pages/PlaylistDetail/index.vue')
          }
        ]
      },
      {
        path: '/my',
        name: 'my',
        component: asyncComponent('../pages/My/index.vue')
      },
      {
        path: '/friend',
        name: 'friend',
        component: asyncComponent('../pages/Friend/index.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
