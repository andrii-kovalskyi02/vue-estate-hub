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
  background-color: $background-color-1;
  color: $text-color-primary;
  
  &__main {
    margin: 0 auto;
    padding: 0 25px calc($mobileHeaderHeight + 18px);
    min-width: 320px;
    max-width: 1320px;
    min-height: 100vh;

    @include onTablet {
      padding-bottom: 20px;
    }
  }
}
</style>
