import type { RouteRecordRaw } from 'vue-router'

export const notFoundRouteNames = {
  notFound: 'NotFound'
}

export const notFoundRoutes: RouteRecordRaw[] = [
  {
    name: notFoundRouteNames.notFound,
    path: '/:pathMatch(.*)*',
    component: () => import('@/views/not-found/NotFoundView.vue'),
    meta: {
      pageTitle: 'Not Found'
    }
  }
]
