import type { RouteRecordRaw } from 'vue-router'

export const aboutRouteNames = {
  about: 'About'
}

export const aboutRoutes: RouteRecordRaw[] = [
  {
    name: aboutRouteNames.about,
    path: '/about',
    component: () => import('@/views/about/AboutView.vue'),
    meta: {
      pageTitle: 'About Us'
    }
  }
]
