import { createRouter, createWebHistory, RouteRecordRaw } from 'vue-router';
import HomeLayout from '../layouts/HomeLayout.vue'

const routes: Array<RouteRecordRaw> = [
  {
    path: '/',
    name: 'Home',
    component: HomeLayout
  },
//   {
//     path: '/about',
//     name: 'About',
//     component: () => import(/* webpackChunkName: "about" */ '../views/About.vue')
//   }
]

const router = createRouter({
  history: createWebHistory(process.env.BASE_URL),
  routes
})

export default router;