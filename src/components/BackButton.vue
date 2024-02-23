<template>
  <CustomButton
    custom-class="back"
    @click="$router.back"
    :aria-label="label || 'Go Back to Previous Page'"
  >
    <TheIcon :type="isMobile ? 'back-mobile' : 'back'" />
    {{ label }}
  </CustomButton>
</template>

<script setup lang="ts">
import CustomButton from './CustomButton.vue'
import TheIcon from './TheIcon.vue'

withDefaults(
  defineProps<{
    label?: String
    isMobile?: Boolean
  }>(),
  {
    isMobile: () => false
  }
)
</script>
