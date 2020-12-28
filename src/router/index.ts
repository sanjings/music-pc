import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeLayout from '../layouts/HomeLayout.vue';

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
        component: () => import(/* webpackChunkName: "Discover" */ '../pages/Discover/index.vue'),
        redirect: '/discover/recommend',
        children: [
          {
            path: '/discover/recommend',
            name: 'recommend',
            component: () => import(/* webpackChunkName: "Recommend" */ '../pages/Discover/Recommend/index.vue')
          },
          {
            path: '/discover/rank',
            name: 'rank',
            component: () => import(/* webpackChunkName: "Rank" */ '../pages/Discover/Rank/index.vue')
          },
          {
            path: '/discover/playlist',
            name: 'playlist',
            component: () => import(/* webpackChunkName: "Playlist" */ '../pages/Discover/Playlist/index.vue')
          },
          {
            path: '/discover/singers',
            name: 'singers',
            component: () => import(/* webpackChunkName: "Singers" */ '../pages/Discover/Singers/index.vue')
          },
          {
            path: '/discover/album',
            name: 'album',
            component: () => import(/* webpackChunkName: "Album" */ '../pages/Discover/Album/index.vue')
          },
          {
            path: '/discover/singer/:id',
            name: 'singer',
            component: () => import(/* webpackChunkName: "Singer" */ '../pages/Singer/index.vue')
          },
          {
            path: '/discover/playlist/:id',
            name: 'playlistDetail',
            component: () => import(/* webpackChunkName: "PlaylistDetail" */ '../pages/PlaylistDetail/index.vue')
          }
        ]
      },
      {
        path: '/my',
        name: 'my',
        component: () => import(/* webpackChunkName: "My" */ '../pages/My/index.vue')
      },
      {
        path: '/friend',
        name: 'friend',
        component: () => import(/* webpackChunkName: "Friend" */ '../pages/Friend/index.vue')
      }
    ]
  }
];

const router = createRouter({
  history: createWebHistory('/'),
  routes
});

export default router;
