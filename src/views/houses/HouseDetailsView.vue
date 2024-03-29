<template>
  <template v-if="$route.name === housesRouteNames.house">
    <section class="house-view">
      <TheContainer :class="{ 'container--house-details-mobile': isMobile }">
        <div class="house-view__top-actions">
          <div class="house-view__back-button-wrapper">
            <BackButton
              :label="isMobile ? '' : 'Back to overview'"
              :is-mobile="isMobile"
              :go-to-main-page="true"
            />
          </div>
          <HouseActions v-if="isMobile && !error && house" :listing="house" :is-mobile="isMobile" />
        </div>
        <template v-if="error && !house">
          <ErrorNotification :error-message="ErrorMessages.ErrorFetchingData" />
        </template>
        <div v-else-if="house" class="house-view__main-wrapper">
          <HouseDetails :house="house" :is-mobile="isMobile" />
          <RecommendedListings
            v-if="suggestedListings && !isMobile"
            :suggestedListings="suggestedListings"
          />
        </div>
      </TheContainer>
      <TheContainer v-if="suggestedListings && isMobile">
        <RecommendedListings :suggestedListings="suggestedListings" />
      </TheContainer>
    </section>
  </template>

  <RouterView v-if="house" :house-data="house" />
  <LoadingIndicator v-if="loading" />
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import { ErrorMessages } from './houses.constants'
import useHouseCrud from '@/composables/useHouseCrud'
import useIsMobile from '@/composables/useIsMobile'
import TheContainer from '@/components/TheContainer.vue'
import ErrorNotification from '@/components/ErrorNotification.vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import HouseDetails from './components/HouseDetails.vue'
import BackButton from '@/components/BackButton.vue'
import HouseActions from './components/HouseActions.vue'
import { housesRouteNames } from './houses.routes'
import { getSuggestions } from '@/utils/getSuggestions'
import { useHousesStore } from '@/stores/houses'
import RecommendedListings from './components/RecommendedListings.vue'

const route = useRoute()
const housesStore = useHousesStore()
const { house, loading, error, dataOperation } = useHouseCrud()
const { isMobile } = useIsMobile()

const suggestedListings = computed(() => {
  if (house.value && housesStore.houses.length) {
    const criteria = {
      price: house.value.price,
      city: house.value.location.city
    }

    return getSuggestions(housesStore.houses, house.value, criteria, 3)
  }

  return null
})

onMounted(() => {
  dataOperation('GET', +route.params.houseId)
  window.scrollTo(0, 0)
})
</script>

<style scoped lang="scss">
.house-view {
  animation: $initialAnimation;

  &__top-actions {
    position: absolute;
    display: flex;
    justify-content: space-between;
    width: 100%;
    padding: $paddingDefault;

    @include onTablet {
      position: initial;
      padding: 0;
    }
  }

  &__back-button-wrapper {
    @include onTablet {
      margin-bottom: 30px;
    }
  }

  &__main-wrapper {
    display: flex;
    flex-wrap: wrap;
    justify-content: center;
    gap: 50px;

    @include onDesktop {
      gap: 100px;
    }

    @media (min-width: 1315px) {
      justify-content: space-between;
    }
  }
}
</style>
