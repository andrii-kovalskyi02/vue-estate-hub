import { ref } from 'vue'
import { defineStore } from 'pinia'

export const useSearchStore = defineStore('search', () => {
  const searchQuery = ref('')
  const appliedSearchQuery = ref('')
  const isSearchLoading = ref(false)

  return { searchQuery, appliedSearchQuery, isSearchLoading }
})
