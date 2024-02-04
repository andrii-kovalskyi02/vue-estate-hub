import { createRouter, createWebHistory } from 'vue-router'
import { housesRouteNames, housesRoutes } from '@/views/houses/houses.routes'
import { aboutRoutes } from '@/views/about/about.routes'
import { SortBy } from '@/views/houses/houses.enums'

export const routes = [
  ...housesRoutes,
  ...aboutRoutes
]

const router = createRouter({
  history: createWebHistory(import.meta.env.BASE_URL),
  routes,
  linkActiveClass: 'active-link',
  linkExactActiveClass: 'exact-active-link'
})

router.beforeEach((to, from, next) => {
  if (!to.query.sort && to.name === housesRouteNames.houses) {
    next({ ...to, query: { sort: SortBy.Price } })
  } else {
    next()
  }
})

export default router
