<template>
  <h3 class="count" aria-live="polite" tabindex="0">
    {{ resultsMessage }}
  </h3>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  filteredDataLength: number
}>()

const resultsMessage = computed(() => {
  return `${props.filteredDataLength} ${props.filteredDataLength === 1 ? 'result' : 'results'} found`
})
</script>

<style scoped lang="scss">
.count {
  @extend %text-style-buttons-and-tabs;
}
</style>
