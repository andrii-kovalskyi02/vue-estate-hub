import type { RouteRecordRaw } from 'vue-router'
import HousesView from '@/views/houses/HousesView.vue'

export const housesRouteNames = {
  houses: 'Houses',
  house: 'House',
  editListing: 'Edit',
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
        component: () => import('@/views/houses/HouseDetailsView.vue'),
        children: [
          {
            name: housesRouteNames.editListing,
            path: 'edit',
            component: () => import('@/views/houses/EditListingView.vue')
          }
        ]
      },
      {
        name: housesRouteNames.newListing,
        path: 'new-listing',
        component: () => import('@/views/houses/NewListingView.vue')
      }
    ]
  }
]
