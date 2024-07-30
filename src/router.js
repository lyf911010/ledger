import { createWebHistory, createRouter } from 'vue-router';

import LaunchView from './pages/launch/index.vue'
import LoginView from './pages/login/index.vue'

const routes = [
  {
    path: '/',
    name: 'Launch',
    component: LaunchView
  },
  {
    path: '/login',
    name: 'Login',
    component: LoginView
  }
]

export default createRouter({
  history: createWebHistory(),
  routes
})