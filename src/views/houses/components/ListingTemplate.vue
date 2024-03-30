<template>
  <section class="listing-view">
    <div class="listing-view__background">
      <TheContainer>
        <div class="listing-view__top-elements-container">
          <div class="listing-view__back-button-wrapper">
            <BackToOverviewBtn v-if="showOverviewButton" :is-mobile="isMobile" />
            <BackButton v-else :is-mobile="isMobile" />
          </div>
          <h1 class="listing-view__title">{{ listingTitle }}</h1>
        </div>
        <slot />
      </TheContainer>
    </div>
  </section>
</template>

<script setup lang="ts">
import TheContainer from '@/components/TheContainer.vue'
import useIsMobile from '@/composables/useIsMobile'
import BackButton from '@/components/BackButton.vue'
import BackToOverviewBtn from '@/components/BackToOverviewBtn.vue'

withDefaults(
  defineProps<{
    listingTitle: string
    showOverviewButton: boolean
  }>(),
  { showOverviewButton: () => false }
)

const { isMobile } = useIsMobile()
</script>

<style scoped lang="scss">
.listing-view {
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

    animation: $initialAnimation;

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
