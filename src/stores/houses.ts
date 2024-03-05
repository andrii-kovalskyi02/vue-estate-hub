import { defineStore } from 'pinia'
import useHouseCrud from '@/composables/useHouseCrud'
import type { House } from '@/views/houses/houses.types'
import { ref } from 'vue'

export const useHousesStore = defineStore('houses', () => {
  const { loading, error, dataOperation } = useHouseCrud()
  const houses = ref<House[]>([])
  const searchQuery = ref('')
  const appliedSearchQuery = ref('')
  const isSearchLoading = ref(false)

  function fetchData() {
    dataOperation('GET', null)
  }

  function setHouses(listings: House[]) {
    houses.value = listings
  }

  function removeHouse(index: number) {
    houses.value.splice(index, 1)
  }

  function setSearchQuery(query: string) {
    searchQuery.value = query
  }

  function setAppliedSearchQuery(query: string) {
    appliedSearchQuery.value = query
  }

  function setIsSearchLoading(loading: boolean) {
    isSearchLoading.value = loading
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
