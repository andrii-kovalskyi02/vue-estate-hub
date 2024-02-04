import type { RouteRecordRaw } from 'vue-router'
import HousesView from '@/views/houses/HousesView.vue'

export const housesRouteNames = {
  houses: 'Houses',
  house: 'House',
  newListing: 'NewListing'
}

export const housesRoutes: RouteRecordRaw[] = [
  {
    name: housesRouteNames.houses,
    path: '/',
    component: HousesView,
    children: [
      {
        name: housesRouteNames.house,
        path: 'houses/:houseId/:slug',
        component: () => import('@/views/houses/HouseDetailsView.vue')
      },
      {
        name: housesRouteNames.newListing,
        path: 'new-listing',
        component: () => import('@/views/houses/NewListingView.vue')
      },
    ]
  }
]
