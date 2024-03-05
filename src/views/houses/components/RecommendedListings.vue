<template>
  <div class="recommended-listings">
    <h1 class="recommended-listings__title" tabindex="0">Recommended for you</h1>
    <HousesList :houses="suggestedListings"/>
  </div>
</template>

<script setup lang="ts">
import type { House } from '../houses.types';
import HousesList from './HousesList.vue'

defineProps<{
  suggestedListings: House[]
}>()
</script>

<style scoped lang="scss">
.recommended-listings {
  width: 100%;

  @include onDesktop {
    width: initial;
  }

  &__title {
    margin-bottom: 25px;
    @extend %text-style-header2;
  }
}
</style>
