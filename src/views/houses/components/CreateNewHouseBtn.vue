<template>
  <CustomButton
    :custom-class="isMobile ? 'create-new-mobile' : 'create-new'"
    aria-label="Create New House"
    @click="$router.push({ name: housesRouteNames.newListing })"
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
import CustomButton from '@/components/CustomButton.vue'
import TheIcon from '@/components/TheIcon.vue'
import { housesRouteNames } from '../houses.routes'

const { isMobile } = useIsMobile()
</script>
