import type { RouteRecordRaw } from 'vue-router'

export const favoritesRouteNames = {
  favorites: 'Favorites'
}

export const favoritesRoutes: RouteRecordRaw[] = [
  {
    name: favoritesRouteNames.favorites,
    path: '/favorites',
    component: () => import('@/views/favorites/FavoritesView.vue'),
    meta: {
      pageTitle: 'Favorites'
    }
  }
]
