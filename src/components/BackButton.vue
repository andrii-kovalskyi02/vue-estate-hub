<template>
  <CustomButton
    type="button"
    customClass="back"
    @click="$router.back"
  >
    <TheIcon v-if="isMobile" type="back-mobile" />
    <TheIcon v-else type="back" />
    {{ label }}
  </CustomButton>
</template>

<script setup lang="ts">
import CustomButton from './CustomButton.vue'
import TheIcon from './TheIcon.vue'

withDefaults(defineProps<{
    label?: String,
    isMobile?: Boolean
  }>(), {
  isMobile: () => false
})
</script>
