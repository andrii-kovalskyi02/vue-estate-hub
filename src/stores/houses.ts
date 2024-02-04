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

  return {
    houses,
    loading,
    error,
    fetchData,
    searchQuery,
    appliedSearchQuery,
    isSearchLoading
  }
})
