import { ref } from 'vue'
import { defineStore } from 'pinia'
import { getHouses } from '@/api/houses'
import type { House } from '@/types/House'

export const useHousesStore = defineStore('houses', () => {
  const houses = ref<House[]>([])
  const loading = ref(false)
  const error = ref<any>(null)

  async function fetchData() {
    loading.value = true
    error.value = null
    try {
      houses.value = await getHouses()
    } catch (e) {
      error.value = 'Oops! There was an error fetching the data. Please try again later.'
    } finally {
      loading.value = false
    }
  }

  return { houses, loading, error, fetchData }
})
