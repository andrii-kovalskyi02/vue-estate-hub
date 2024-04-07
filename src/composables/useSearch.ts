import { ref } from 'vue'

export default function useSearch() {
  const searchQuery = ref('')
  const appliedSearchQuery = ref('')
  const isSearchLoading = ref(false)

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
    searchQuery,
    appliedSearchQuery,
    isSearchLoading,
    setSearchQuery,
    setAppliedSearchQuery,
    setIsSearchLoading
  }
}
