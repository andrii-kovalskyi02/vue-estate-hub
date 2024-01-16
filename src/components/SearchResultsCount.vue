<template>
  <h3 class="count">
    {{ resultsMessage }}
  </h3>
</template>

<script setup lang="ts">
import { computed } from 'vue'

const props = defineProps<{
  filteredData: Array<any>
}>()

const resultsMessage = computed(() => {
  const itemCount = props.filteredData.length
  return `${itemCount} ${itemCount === 1 ? 'result' : 'results'} found`
})
</script>

<style scoped lang="scss">
.count {
  @extend %text-style-buttons-and-tabs;
}
</style>
