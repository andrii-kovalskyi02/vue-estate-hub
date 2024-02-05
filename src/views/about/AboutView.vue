<template>
  <section class="about">
    <TheContainer>
      <h1>This is an about page</h1>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import TheContainer from '@/components/TheContainer.vue'
</script>

<style scoped lang="scss">
.about {
  min-height: 100vh;
  display: flex;
  align-items: center;
}
</style>
