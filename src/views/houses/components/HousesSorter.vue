<template>
  <div class="sort-houses" role="group" aria-label="Sort Houses">
    <div class="sort-houses__options">
      <CustomButton
        v-for="{ value, label } in listingSortOptions" :key="value"
        :custom-class="`sort-by-${value}`"
        :is-active="$route.query.sort === value"
        :aria-label="`Sort by ${label}`"
        @click="handleOptionsClick(value)"
      >
        {{ label }}
      </CustomButton>
    </div>
    <RouterLink
      :to="{ query: { ...$route.query, order: nextSortOrder } }"
      :aria-label="sortHousesOrderAriaLabel"
    >
      <TheIcon :type="isOrderAscending ? 'from-a-to-z' : 'from-z-to-a'"/>
    </RouterLink>
  </div>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { useRoute, useRouter } from 'vue-router'
import { Order, listingSortOptions } from '../houses.constants'
import type { SortBy } from '@/views/houses/houses.enums'
import CustomButton from '@/components/CustomButton.vue'
import TheIcon from '@/components/TheIcon.vue'

const router = useRouter()
const route = useRoute()

const handleOptionsClick = (value: SortBy) => {
  router.push({
    query: { ...route.query, sort: value }
  })
}

const isOrderAscending = computed(() => {
  return route.query.order === Order.ASC
})

const sortHousesOrderAriaLabel = computed(() => {
  return `Sort houses in ${isOrderAscending.value ? 'ascending' : 'descending' } order`
})

const nextSortOrder = computed(() => {
  return isOrderAscending.value ? Order.DESC : Order.ASC
})
</script>

<style scoped lang="scss">
.sort-houses {
  display: flex;
  align-items: center;
  gap: 20px;

  &__options {
    display: flex;
    flex-grow: 1;
  }

}
</style>
