<template>
  <section class="favorites-view">
    <TheContainer>
      <div class="favorites-view__top-container">
        <h1 class="favorites-view__title" tabindex="0">
          {{ favoritesRouteNames.favorites }}
        </h1>
        <div v-if="favorites.length" class="favorites-view__search-container">
          <TheSearch
            :set-search-query="favoritesStore.setSearchQuery"
            :set-applied-search-query="favoritesStore.setAppliedSearchQuery"
            :set-is-search-loading="favoritesStore.setIsSearchLoading"
          />
        </div>
      </div>

      <template v-if="!favoritesStore.isSearchLoading">
        <template v-if="filteredListings.length">
          <ResultsAndFavoritesCounter
            :filtered-listings-length="filteredListings.length"
            :number-of-favorites="numberOfFavorites"
            :description="description"
            :search-query="favoritesStore.searchQuery"
          />
          <HousesList :houses="filteredListings" />
        </template>
        <div v-else class="favorites-view__not-found-wrapper">
          <NoResultsMessage :hasFavorites="favorites.length > 0" />
        </div>
      </template>
      <div v-else class="favorites-view__loading-indicator-container">
        <LoadingIndicator />
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { storeToRefs } from 'pinia'
import TheContainer from '@/components/TheContainer.vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import TheSearch from '@/components/TheSearch.vue'
import { favoritesRouteNames } from './favorites.routes'
import { filterHouses } from '@/utils/filterHouses'
import HousesList from '../houses/components/HousesList.vue'
import useFavoritesCountDescription from '@/composables/useFavoritesCountDescription'
import useDynamicTitle from '@/composables/useDynamicTitle'
import ResultsAndFavoritesCounter from './components/ResultsAndFavoritesCounter.vue'
import NoResultsMessage from './components/NoResultsMessage.vue'

const { description, favoritesStore } = useFavoritesCountDescription()
const { favorites, appliedSearchQuery } = storeToRefs(favoritesStore)

useDynamicTitle()

const filteredListings = computed(() => {
  return filterHouses(favorites.value, appliedSearchQuery.value)
})

const numberOfFavorites = computed(() => {
  const favoritesLength = favorites.value.length
  return `${favoritesLength} ${favoritesLength === 1 ? 'listing' : 'listings'}`
})
</script>

<style scoped lang="scss">
.favorites-view {
  animation: $initialAnimation;

  &__top-container {
    display: flex;
    align-items: center;
    justify-content: space-between;
    margin-bottom: 5px;

    @include onTablet {
      margin-bottom: 10px;
    }
  }

  &__title {
    @extend %text-style-header1;
  }

  &__search-container {
    width: 60%;

    @include onTablet {
      width: 40%;
    }
  }

  &__search-count,
  &__listing-count {
    margin-bottom: 25px;

    @include onTablet {
      margin-bottom: 35px;
    }
  }

  &__listing-count {
    @extend %text-style-empty-state-message;
    color: $secondary-color;
  }

  &__loading-indicator-container,
  &__not-found-wrapper {
    margin-top: 150px;
  }
}
</style>
