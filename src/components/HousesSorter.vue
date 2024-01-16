<template>
  <div class="sort-container" role="group" aria-label="Sort Houses">
    <template v-for="{ value, label } in sortByArray" :key="value">
      <CustomButton
        :customClass="`sort-by-${value}`"
        :isActive="$route.query.sort === value"
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
import { SortBy, sortByArray } from '@/types/SortByEnum'
import CustomButton from './CustomButton.vue'

const router = useRouter()
const route = useRoute()

const handleClick = (value: SortBy) => {
  router.push({
    name: 'Houses',
    query: { ...route.query, sort: value },
  })
}
</script>

<style scoped lang="scss">
.sort-container {
  display: flex;
}
</style>