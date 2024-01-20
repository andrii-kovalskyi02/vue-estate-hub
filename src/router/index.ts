import { createRouter, createWebHistory } from 'vue-router'
import HousesView from '@/views/HousesView.vue'

export const routes = [
  {
    path: '/',
    name: 'Houses',
    component: HousesView,
    children: [
      {
        path: 'houses/:houseId/:slug',
        name: 'House',
        component: () => import('@/views/HouseDetailsView.vue')
      },
    ]
  },
  {
    path: '/about',
    name: 'About',
    component: () => import('@/views/AboutView.vue'),
  }
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link'
})

export default router
