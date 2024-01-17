<template>
  <section class="houses-view">
    <div v-if="!error && houses.length" class="houses-view__filter-container">
      <TheSearch />
      <HousesSorter />
    </div>

    <template v-if="!searchStore.isSearchLoading && !loading && !error">
      <template v-if="filteredHouses.length">
        <div v-if="searchStore.searchQuery" class="houses-view__search-count">
          <SearchResultsCount :filteredData="filteredHouses" />
        </div>
        <HousesList :houses="filteredHouses"/>
      </template>

      <div v-else class="houses-view__not-found-wrapper">
        <NotFound>No results found. <br> Please try another keyword.</NotFound>
      </div>
    </template>
    <LoadingIndicator v-else-if="!error" />
    <ErrorNotification v-else :error-message="error" />
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted, ref, watch, watchEffect } from 'vue'
import { storeToRefs } from 'pinia'
import { useRoute, useRouter } from 'vue-router'
import { useHousesStore } from '@/stores/houses'
import { useSearchStore } from '@/stores/search'
import { filterHouses } from '@/utils/filterHouses'
import { sortHouses } from '@/utils/sortHouses'
import ErrorNotification from '@/components/ErrorNotification.vue'
import HousesList from '@/components/HousesList.vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import NotFound from '@/components/NotFound.vue'
import TheSearch from '@/components/TheSearch.vue'
import SearchResultsCount from '@/components/SearchResultsCount.vue'
import HousesSorter from '@/components/HousesSorter.vue'
import { SortBy } from '@/types/SortByEnum'

const route = useRoute()
const router = useRouter()

const housesStore = useHousesStore()
const searchStore = useSearchStore()
const { houses, loading, error } = storeToRefs(housesStore)

const sortBy = ref(SortBy.Price)

watch(
  [error, houses],
  () => {
    router.push({
      name: 'Houses',
      query: { sort: error.value ? undefined : SortBy.Price },
    })
  },
  { immediate: true }
)

watchEffect(() => sortBy.value = route.query.sort as SortBy)

const sortedHouses = computed(() => {
  return sortHouses(houses.value, sortBy.value)
})

const filteredHouses = computed(() => {
  return filterHouses(sortedHouses.value, searchStore.appliedSearchQuery)
})

onMounted(() => housesStore.fetchData())
</script>

<style scoped lang="scss">
.houses-view {
  &__filter-container {
    display: flex;
    flex-direction: column;
    gap: 15px;
    margin-bottom: 25px;
    
    @include onTablet {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 35px;
    }
  }

  &__search-count {
    margin-bottom: 15px;

    @include onTablet {
      margin-bottom: 20px;
    }
  }

  &__not-found-wrapper {
    margin-top: 150px;
  }
}
</style>