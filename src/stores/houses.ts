import { ref } from 'vue'
import { defineStore } from 'pinia'
import useHouseCrud from '@/composables/useHouseCrud'
import useSearch from '@/composables/useSearch'
import type { House } from '@/views/houses/houses.types'

export const useHousesStore = defineStore('houses', () => {
  const { loading, error, dataOperation } = useHouseCrud()
  const {
    searchQuery,
    appliedSearchQuery,
    isSearchLoading,
    setSearchQuery,
    setAppliedSearchQuery,
    setIsSearchLoading
  } = useSearch()
  const houses = ref<House[]>([])

  function fetchData() {
    dataOperation('GET', null)
  }

  function setHouses(listings: House[]) {
    houses.value = listings
  }

  function removeHouse(index: number) {
    houses.value.splice(index, 1)
  }

  return {
    houses,
    loading,
    error,
    searchQuery,
    appliedSearchQuery,
    isSearchLoading,
    fetchData,
    setHouses,
    removeHouse,
    setSearchQuery,
    setAppliedSearchQuery,
    setIsSearchLoading
  }
})
