<template>
  <template v-if="route.name === housesRouteNames.houses">
    <section class="houses-view">
      <TheContainer>
        <div class="houses-view__create-house-container">
          <h1 class="houses-view__title" tabindex="0">
            {{ housesRouteNames.houses }}
          </h1>
          <div class="houses-view__create-new-wrapper">
            <CreateNewHouseBtn />
          </div>
        </div>
        <div v-if="!error && houses.length" class="houses-view__filter-container">
          <div class="houses-view__search-container">
            <TheSearch
              :set-search-query="housesStore.setSearchQuery"
              :set-applied-search-query="housesStore.setAppliedSearchQuery"
              :set-is-search-loading="housesStore.setIsSearchLoading"
            />
          </div>
          <HousesSorter />
        </div>
        <template v-if="!housesStore.isSearchLoading && !loading && !error">
          <template v-if="filteredHouses.length">
            <div v-if="housesStore.searchQuery" class="houses-view__search-count">
              <SearchResultsCount :filtered-data="filteredHouses" />
            </div>
            <HousesList :houses="filteredHouses" />
          </template>
          <div v-else class="houses-view__not-found-wrapper">
            <NotFound>
              No results found. <br />
              Please try another keyword.
            </NotFound>
          </div>
        </template>
        <LoadingIndicator v-else-if="!error" />
        <ErrorNotification v-else :error-message="ErrorMessages.ErrorFetchingData" />
      </TheContainer>
    </section>
  </template>

  <RouterView :key="route.path" />
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { storeToRefs } from 'pinia'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
import { useHousesStore } from '@/stores/houses'
import TheContainer from '@/components/TheContainer.vue'
import { filterHouses } from '@/utils/filterHouses'
import { sortHouses } from '@/utils/sortHouses'
import ErrorNotification from '@/components/ErrorNotification.vue'
import HousesList from './components/HousesList.vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import NotFound from '@/components/NotFound.vue'
import TheSearch from '@/components/TheSearch.vue'
import SearchResultsCount from '@/components/SearchResultsCount.vue'
import HousesSorter from './components/HousesSorter.vue'
import type { SortBy } from './houses.enums'
import CreateNewHouseBtn from './components/CreateNewHouseBtn.vue'
import { housesRouteNames } from './houses.routes'
import { ErrorMessages } from './houses.constants'
import type { OrderKeys } from './houses.types'

const route = useRoute()

const housesStore = useHousesStore()
const { houses, loading, error } = storeToRefs(housesStore)

const sortedHouses = computed(() => {
  return sortHouses(houses.value, route.query.sort as SortBy, route.query.order as OrderKeys)
})

const filteredHouses = computed(() => {
  return filterHouses(sortedHouses.value, housesStore.appliedSearchQuery)
})

onBeforeRouteUpdate((to, from) => {
  if (from.matched.length > 1 && to.name === housesRouteNames.houses) {
    housesStore.fetchData()
  }
})

onMounted(() => housesStore.fetchData())
</script>

<style scoped lang="scss">
.houses-view {
  animation: $initialAnimation;

  &__create-house-container {
    position: relative;
    display: flex;
    justify-content: center;
    align-items: center;
    margin-bottom: 20px;

    @include onTablet {
      justify-content: space-between;
      margin-bottom: 35px;
    }
  }

  &__create-new-wrapper {
    position: absolute;
    right: 0;

    @include onTablet {
      position: static;
    }
  }

  &__title {
    @extend %text-style-header1;
  }

  &__filter-container {
    display: flex;
    flex-direction: column;
    flex-wrap: wrap;
    gap: 15px;
    margin-bottom: 25px;

    @include onTablet {
      flex-direction: row;
      justify-content: space-between;
      margin-bottom: 35px;
    }
  }

  &__search-container {
    @include onTablet {
      width: 38%;
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
