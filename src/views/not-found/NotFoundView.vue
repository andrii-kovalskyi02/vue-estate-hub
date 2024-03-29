<template>
  <section class="not-found-view">
    <TheContainer>
      <BackButton label="Back" />
      <div class="not-found-view__main-container">
        <NotFound> The page you’re looking for can’t be found. </NotFound>
        <CustomButton
          custom-class="go-home"
          @click="$router.push({ name: housesRouteNames.houses })"
        >
          Home
        </CustomButton>
      </div>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import TheContainer from '@/components/TheContainer.vue'
import useDynamicTitle from '@/composables/useDynamicTitle'
import NotFound from '@/components/NotFound.vue'
import BackButton from '@/components/BackButton.vue'
import CustomButton from '@/components/CustomButton.vue'
import { housesRouteNames } from '../houses/houses.routes'

useDynamicTitle()
</script>

<style scoped lang="scss">
.not-found-view {
  animation: $initialAnimation;

  &__main-container {
    display: flex;
    flex-direction: column;
    align-items: center;
    justify-content: center;
    gap: 60px;
    min-height: 65vh;
  }
}
</style>
