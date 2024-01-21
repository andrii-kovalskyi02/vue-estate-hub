<template>
  <CustomButton
    :custom-class="isMobile ? 'create-new-mobile' : 'create-new'"
    aria-label="Create New House"
  >
    <TheIcon v-if="isMobile" type="create-new-mobile" />
    <template v-else>
      <TheIcon type="create-new" />
      Create new
    </template>
  </CustomButton>
</template>

<script setup lang="ts">
import useIsMobile from '@/composables/useIsMobile'
import CustomButton from './CustomButton.vue'
import TheIcon from './TheIcon.vue'

const { isMobile } = useIsMobile()

</script>

<style scoped lang="scss">
</style>