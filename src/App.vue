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
@import '@/assets/styles/_normalize';
@import '@/assets/styles/_reset';

.app {
  min-height: 100vh;
  background-color: $background-color-1;
  color: $text-color-primary;
}
</style>
