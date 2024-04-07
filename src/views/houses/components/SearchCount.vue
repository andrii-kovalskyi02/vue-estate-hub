<template>
  <div v-if="searchQuery" class="houses-view__search-count">
    <SearchResultsCount :filteredDataLength="filteredDataLength" />
  </div>
</template>

<script setup lang="ts">
import SearchResultsCount from '@/components/SearchResultsCount.vue'

defineProps<{
  searchQuery: string
  filteredDataLength: number
}>()
</script>
