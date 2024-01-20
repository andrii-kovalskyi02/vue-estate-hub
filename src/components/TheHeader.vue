<template>
  <header class="header" role="banner" aria-label="Site header">
    <div class="header__content">
      <DesktopNav v-if="shouldRenderDesktopNav" />
      <MobileNav v-else/>
    </div>
  </header>
  <h1>{{ clientWidth }}</h1>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import useWindowWidth from '@/composables/useWindowWidth'
import useIsMobile from '@/composables/useIsMobile'
import DesktopNav from './DesktopNav.vue'
import MobileNav from './MobileNav.vue'

const { clientWidth } = useWindowWidth()

const { isMobile } = useIsMobile()

const shouldRenderDesktopNav = computed(() => !isMobile.value)
</script>

<style scoped lang="scss">
.header {
  position: fixed;
  bottom: 0;
  z-index: 100;
  width: 100%;
  background-color: $background-color-2;
  box-shadow: $primaryShadowBox;

  @include onTablet {
    position: initial;
  }

  &__content {
    @include flexCenter;
    justify-content: flex-start;
    margin: 0 auto;
    max-width: 1320px;
    height: $mobileHeaderHeight;

    @include onTablet {
      height: 75px;
    }
  }
}
</style>
