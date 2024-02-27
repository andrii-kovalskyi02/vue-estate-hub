<template>
  <CustomButton
    custom-class="back"
    @click="goBack"
    :aria-label="label || 'Go Back to Previous Page'"
  >
    <TheIcon :type="isMobile ? 'back-mobile' : 'back'" />
    {{ label }}
  </CustomButton>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router';
import CustomButton from './CustomButton.vue'
import TheIcon from './TheIcon.vue'
import { housesRouteNames } from '@/views/houses/houses.routes'

const props = withDefaults(
  defineProps<{
    label?: string
    isMobile?: boolean
    goToMainPage?: boolean
  }>(),
  {
    isMobile: () => false,
    goToMainPage: () => false
  }
)

const router = useRouter()

const goBack = () => {
  if (props.goToMainPage) {
    router.push({ name: housesRouteNames.houses })
  } else {
    router.back()
  }
}
</script>
