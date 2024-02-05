<template>
  <section class="new-listing-view">
    <div class="new-listing-view__background">
      <TheContainer>
        <div class="new-listing-view__top-elements-container">
          <div class="new-listing-view__back-button-wrapper">
            <BackButton :label="isMobile ? '' : 'Back to overview'" />
          </div>
          <h1 class="new-listing-view__title">Create new listing</h1>
        </div>
        <NewListingForm />
      </TheContainer>
    </div>
  </section>
</template>

<script setup lang="ts">
import TheContainer from '@/components/TheContainer.vue'
import NewListingForm from './components/NewListingForm.vue'
import BackButton from '@/components/BackButton.vue'
import useIsMobile from '@/composables/useIsMobile'

const { isMobile } = useIsMobile()
</script>

<style scoped lang="scss">
.new-listing-view {
  &__background {
    background-image: url(/images/img_background@3x.png);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;

    @include onTablet {
      background-size: cover;
    }
  }

  &__top-elements-container {
    position: relative;
    @include flexCenter;
    margin-bottom: 30px;

    @include onTablet {
      flex-direction: column;
      align-items: flex-start;
      gap: 30px;
    }
  }

  &__back-button-wrapper {
    position: absolute;
    left: 0;

    @include onTablet {
      position: static;
    }
  }

  &__title {
    @extend %text-style-header1;
  }
}
</style>
