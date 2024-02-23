<template>
  <div class="sort-container" role="group" aria-label="Sort Houses">
    <template v-for="{ value, label } in sortByValues" :key="value">
      <CustomButton
        :custom-class="`sort-by-${value}`"
        :is-active="$route.query.sort === value"
        :aria-label="`Sort by ${label}`"
        @click="handleClick(value)"
      >
        {{ label }}
      </CustomButton>
    </template>
  </div>
</template>

<script setup lang="ts">
import { useRoute, useRouter } from 'vue-router'
import { housesRouteNames } from '@/views/houses/houses.routes'
import { sortByValues } from '@/views/houses/houses.constants'
import type { SortBy } from '@/views/houses/houses.enums'
import CustomButton from '@/components/CustomButton.vue'

const router = useRouter()
const route = useRoute()

const handleClick = (value: SortBy) => {
  router.push({
    name: housesRouteNames.houses,
    query: { ...route.query, sort: value }
  })
}
</script>

<style scoped lang="scss">
.sort-container {
  display: flex;
}
</style>
