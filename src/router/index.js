import { createRouter, createWebHistory } from 'vue-router'
import ClientView from '../components/ClientView.vue'

const routes = [
  { path: '/', name: 'ClientView', component: ClientView },
]

const router = createRouter({
  history: createWebHistory('/Online-Portfolio/'), // 👈 This is essential
  routes,
})

export default router
