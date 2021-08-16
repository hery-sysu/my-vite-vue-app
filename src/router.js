import { createRouter, createWebHashHistory } from 'vue-router'
import Home from './pages/Home.vue'
import Second from './pages/Second.vue'

const routes = [{
  path: '/',
  component: Home
}, {
  path: '/second',
  component: Second
}]

export default createRouter({
  history: createWebHashHistory(),
  routes
})