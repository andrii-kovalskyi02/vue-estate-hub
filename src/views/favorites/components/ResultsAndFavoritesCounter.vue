<template>
  <div v-if="searchQuery" class="favorites-view__search-count">
    <SearchResultsCount
      :filteredDataLength="filteredListingsLength"
      class="favorites-view__listing-count"
    />
  </div>
  <div
    v-else
    class="favorites-view__listing-count"
    aria-live="polite"
    :aria-label="description"
    tabindex="0"
  >
    {{ numberOfFavorites }}
  </div>
</template>

<script setup lang="ts">
import SearchResultsCount from '@/components/SearchResultsCount.vue'

defineProps<{
  filteredListingsLength: number
  numberOfFavorites: string
  description: string
  searchQuery: string
}>()
</script>
