<template>
  <TransitionGroup name="list" tag="ul" class="housesList" role="list">
    <li
      v-for="house in houses"
      :key="house.id"
      class="housesList__item"
      role="listItem"
    >
      <HouseCard :house="house" />
    </li>
  </TransitionGroup>
</template>

<script setup lang="ts">
import type { House } from '@/types/House';
import HouseCard from './HouseCard.vue';

defineProps<{
  houses: House[]
}>()
</script>

<style lang="scss" scoped>
.housesList {
  display: flex;
  flex-direction: column;
  gap: 20px;
  list-style: none;
}

.list-move,
.list-enter-active,
.list-leave-active {
  transition: all 0.5s ease;
}
.list-enter-from,
.list-leave-to {
  opacity: 0;
  transform: translateX(30px);
}
</style>
