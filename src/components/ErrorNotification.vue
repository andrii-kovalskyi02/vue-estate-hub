<template>
  <div class="error">
    <h2 class="error__message">{{ errorMessage }}</h2>
  </div>
</template>

<script setup lang="ts">
defineProps<{
  errorMessage: string
}>()

</script>

<style lang="scss" scoped>
.error {
  width: fit-content;
  margin: 10px auto;
  padding: 16px;
  border-radius: 8px;

  background-color: $primary-color;
  box-shadow: $primaryShadowBox;

  animation: $initialAnimation;

  &__message {
    @extend %text-style-error-message;
    text-align: center;
  }
}
</style>
