<template>
  <section class="house-view">
    <div class="house-view__back-button-wrapper">
      <BackButton v-if="shouldRenderDesktopBackButton" label="Back to overview" />
      <BackButton v-else :isMobile="true" />
    </div>

    <div v-if="error">
      <ErrorNotification :errorMessage="ErrorMessages.ErrorFetchingData" />
    </div>
    <HouseDetails v-else-if="house" :house="house" />
    <LoadingIndicator v-else />
  </section>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue'
import { useRoute } from 'vue-router'
import ErrorNotification from '@/components/ErrorNotification.vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import useHouseCrud from '@/composables/useHouseCrud'
import { ErrorMessages } from '@/types/ErrorMessagesEnum'
import HouseDetails from '@/components/HouseDetails.vue'
import BackButton from '@/components/BackButton.vue'
import useIsMobile from '@/composables/useIsMobile'

const route = useRoute()

const { house, error, dataOperation } = useHouseCrud()
const { isMobile } = useIsMobile()

const shouldRenderDesktopBackButton = computed(() => !isMobile.value)

onMounted(() => dataOperation('GET', +route.params.houseId))
</script>

<style scoped lang="scss">
.house-view {
  &__back-button-wrapper {
    @include onTablet {
      margin-bottom: 30px;
    }
  }
}
</style>