<template>
  <NotFound v-if="!hasFavorites">
    There are no favorite listings currently selected. <br />
    Please feel free to browse our collection and add listings to your favorites list!
  </NotFound>
  <NotFound v-else>
    No results found. <br />
    Please try another keyword.
  </NotFound>
</template>

<script setup lang="ts">
import NotFound from '@/components/NotFound.vue'

defineProps<{
  hasFavorites: boolean
}>()
</script>
