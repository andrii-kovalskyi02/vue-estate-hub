<template>
  <CustomButton custom-class="back" @click="goToMainPage" aria-label="Back to Overview">
    <TheIcon :type="isBackWhite ? 'back-mobile' : 'back'" />
    {{ isMobile ? '' : 'Back to overview' }}
  </CustomButton>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import CustomButton from './CustomButton.vue'
import TheIcon from './TheIcon.vue'
import { housesRouteNames } from '@/views/houses/houses.routes'

withDefaults(
  defineProps<{
    isMobile?: boolean
    isBackWhite?: boolean
  }>(),
  {
    isMobile: () => false,
    isBackWhite: () => false
  }
)

const router = useRouter()

const goToMainPage = () => {
  router.push({ name: housesRouteNames.houses })
}
</script>
