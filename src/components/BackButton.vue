<template>
  <CustomButton custom-class="back" @click="$router.back()" aria-label="Go Back to Previous Page">
    <TheIcon :type="isBackWhite ? 'back-mobile' : 'back'" />
    {{ isMobile ? '' : 'Back' }}
  </CustomButton>
</template>

<script setup lang="ts">
import CustomButton from './CustomButton.vue'
import TheIcon from './TheIcon.vue'

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
</script>
