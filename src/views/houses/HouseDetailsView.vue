<template>
  <section class="house-view">
    <TheContainer :class="{ 'container--house-details-mobile': isMobile }">
      <div class="house-view__top-actions">
        <div class="house-view__back-button-wrapper">
          <BackButton v-if="isMobile" :is-mobile="isMobile" />
          <BackButton v-else label="Back to overview" />
        </div>
        <HouseActions v-if="isMobile && !error && house?.madeByMe" :is-mobile="isMobile" />
      </div>
      <template v-if="error && !house">
        <ErrorNotification :error-message="ErrorMessages.ErrorFetchingData" />
      </template>
      <HouseDetails v-else-if="house" :house="house" :is-mobile="isMobile" />
      <LoadingIndicator v-else />
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import { onMounted } from 'vue'
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

const route = useRoute()

const { house, error, dataOperation } = useHouseCrud()
const { isMobile } = useIsMobile()

onMounted(() => dataOperation('GET', +route.params.houseId))
</script>

<style scoped lang="scss">
.house-view {
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
