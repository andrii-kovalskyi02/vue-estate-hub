<template>
  <section class="new-listing-view">
    <!-- <div class="new-listing-view__background-img" /> -->

    <div class="new-listing-view__top-elements-container">
      <div class="new-listing-view__back-button-wrapper">
        <BackButton :label="isMobile ? '' : 'Back to overview'" />
      </div>
      <h1 class="new-listing-view__title">Create new listing</h1>
    </div>
    <NewListingForm />
  </section>
</template>

<script setup lang="ts">
import BackButton from '@/components/BackButton.vue'
import useIsMobile from '@/composables/useIsMobile'
import NewListingForm from './components/NewListingForm.vue'

const { isMobile } = useIsMobile()
</script>

<style scoped lang="scss">
.new-listing-view {
  background-image: url(@/assets/images/img_background@3x.png);
  background-repeat: no-repeat;
  background-position: bottom;
  background-size: contain;

  @include onTablet {
    background-size: cover;
  }

  &__background-img {
    position: absolute;
    left: 0;
    bottom: $mobileHeaderHeight;
    width: 100%;
    height: 100%;
  
    background-image: url(@/assets/images/img_background@3x.png);
    background-repeat: no-repeat;
    background-position: bottom;
    background-size: contain;

    @include onTablet {
      top: 0;
      bottom: unset;

      background-position: center bottom;
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
