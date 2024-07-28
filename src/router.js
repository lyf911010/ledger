import { createWebHistory, createRouter } from 'vue-router';

import HomeView from './pages/home/index.vue'
import ListView from './pages/list/index.vue'

const routes = [
  {
    path: '/',
    name: 'home',
    component: HomeView
  },
  {
    path: '/list',
    name: 'list',
    component: ListView
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})