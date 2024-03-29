import { ref } from 'vue'
import { defineStore } from 'pinia'
import useSearch from '@/composables/useSearch'
import type { House } from '@/views/houses/houses.types'

export const useFavoritesStore = defineStore('favorites', () => {
  const favorites = ref<House[]>(JSON.parse(localStorage.getItem('favorites') || '[]'))
  const {
    searchQuery,
    appliedSearchQuery,
    isSearchLoading,
    setSearchQuery,
    setAppliedSearchQuery,
    setIsSearchLoading
  } = useSearch()

  function setFavoritesInLocalStorage() {
    localStorage.setItem('favorites', JSON.stringify(favorites.value))
  }

  function addFavoriteListing(listing: House) {
    favorites.value.push(listing)
    setFavoritesInLocalStorage()
  }

  function removeFavoriteListing(id: number) {
    favorites.value = favorites.value.filter((listing) => listing.id !== id)
    setFavoritesInLocalStorage()
  }

  return {
    favorites,
    searchQuery,
    appliedSearchQuery,
    isSearchLoading,
    addFavoriteListing,
    removeFavoriteListing,
    setSearchQuery,
    setAppliedSearchQuery,
    setIsSearchLoading
  }
})
