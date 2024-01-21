<template>
  <div class="app">
    <TheHeader />

    <main class="app__main">
      <RouterView />
    </main>
  </div>
</template>

<script setup lang="ts">
import { RouterView } from 'vue-router'
import TheHeader from '@/components/TheHeader.vue'
</script>

<style lang="scss">
@import "@/assets/styles/_normalize";
@import "@/assets/styles/_reset";

.app {
  min-height: 100vh;
  background-color: $background-color-1;
  color: $text-color-primary;
  
  &__main {
    margin: 0 auto;
    padding: 25px 25px calc($mobileHeaderHeight + 25px);
    min-width: 320px;
    max-width: 1320px;

    @include onTablet {
      /* padding: 0 25px 25px; */
      padding-top: 0;
    }
  }
}
</style>
