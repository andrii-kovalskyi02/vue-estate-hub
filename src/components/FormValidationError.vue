<template>
  <span
    v-if="isErrorVisible"
    :id="id"
    class="form-error-msg"
    role="alert"
    tabindex="0"
  > 
    {{ message }}
  </span>
</template>

<script setup lang="ts">
import type { Ref } from 'vue'

defineProps<{
  id: string,
  isErrorVisible: boolean,
  message: string | Ref<string>,
}>()
</script>

<style lang="scss">
.form-error-msg {
  @extend %text-style-error-message;
  color: $primary-color;
}
</style>