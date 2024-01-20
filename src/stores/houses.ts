import { defineStore } from 'pinia'
import useHouseCrud from '@/composables/useHouseCrud'

export const useHousesStore = defineStore('houses', () => {
  const { housesData, loading, error, dataOperation } = useHouseCrud()
  const houses = housesData

  function fetchData() {
    dataOperation('GET')
  }

  return { houses, loading, error, fetchData }
})
