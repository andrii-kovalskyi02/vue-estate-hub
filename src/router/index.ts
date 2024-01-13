import { createRouter, createWebHistory } from 'vue-router'
import HousesView from '@/views/HousesView.vue'

export const routes = [
  {
    path: '/',
    name: 'Houses',
    component: HousesView
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue')
  },
  {
    path: '/house/:houseId',
    name: 'house',
    component: () => import('@/views/HouseDetailsView.vue')
  },
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link'
})

export default router
