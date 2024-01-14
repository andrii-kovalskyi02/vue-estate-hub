<template>
  <button
    :class="`button button--${customClass}`"
    @click="$emit('click')"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
defineProps<{
  customClass: string
}>()
</script>

<style lang="scss" scoped>
.button {
  @include flexCenter;
  cursor: pointer;

  &--clear {
    position: absolute;
    z-index: 1;
    right: 20px;
  }
}
</style>
