<template>
  <span v-if="quantity" class="counter" tabindex="0">
    {{ quantity }}
  </span>
</template>

<script setup lang="ts">
defineProps<{
  quantity: number
}>()
</script>

<style scoped lang="scss">
.counter {
  position: absolute;
  top: 3px;
  right: 0px;

  width: 16px;
  height: 16px;
  border-radius: 50%;

  background-color: $text-color-primary;

  @extend %text-style-empty-state-message;
  font-size: 10px;
  line-height: 16px;
  color: $text-color-white;
  text-align: center;
}
</style>
