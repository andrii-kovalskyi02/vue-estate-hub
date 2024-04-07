<template>
  <TransitionGroup name="list" tag="ul" class="houses-list" role="list">
    <li v-for="house in houses" :key="house.id" class="houses-list__item" role="listItem">
      <HouseCard :house="house" />
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">
import type { House } from '@/views/houses/houses.types'
import HouseCard from './HouseCard.vue'

defineProps<{
  houses: House[]
}>()
</script>

<style lang="scss" scoped>
.houses-list {
  display: flex;
  flex-direction: column;
  gap: 15px;
  list-style: none;

  animation: $initialAnimation;

  @include onTablet {
    gap: 18px;
  }
}

.list-move,
.list-enter-active,
.list-leave-active {
  @include transition($_duration: 0.5s);
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
.list-leave-active {
  position: absolute;
}
</style>
