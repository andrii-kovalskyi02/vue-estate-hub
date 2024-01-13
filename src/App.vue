<template>
  <div class="app">
    <TheHeader />

    <RouterView />
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
  margin: 0 auto;
  background-color: $background-color-1;
}
</style>
