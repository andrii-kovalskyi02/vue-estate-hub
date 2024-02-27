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
          <HouseActions v-if="isMobile && !error && house?.madeByMe" :is-mobile="isMobile" />
        </div>
        <template v-if="error && !house">
          <ErrorNotification :error-message="ErrorMessages.ErrorFetchingData" />
        </template>
        <HouseDetails v-else-if="house" :house="house" :is-mobile="isMobile" />
      </TheContainer>
    </section>
  </template>

  <RouterView v-if="house" :house-data="house" />
  <LoadingIndicator v-if="loading" />
</template>

<script setup lang="ts">
import { onMounted, ref } from 'vue'
import { onBeforeRouteUpdate, useRoute } from 'vue-router'
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

const route = useRoute()
const { house, loading, error, dataOperation } = useHouseCrud()
const { isMobile } = useIsMobile()

const houseId = ref(+route.params.houseId)

onBeforeRouteUpdate(async (to, from) => {
  window.scrollTo(0, 0)

  if (from.name === housesRouteNames.editListing) {
    await dataOperation('GET', houseId.value)
  }
})

onMounted(() => dataOperation('GET', houseId.value))
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
}
</style>
