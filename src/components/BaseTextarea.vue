<template>
  <label
    v-if="label"
    :for="labelFor"
    :class="labelClass"
  >
    {{ label }}
  </label>
  <textarea
    :value="modelValue"
    @input="$emit('update:modelValue', ($event.target as HTMLInputElement)?.value)"
    :id="labelFor"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string | boolean,
    labelFor: string,
    labelClass?: string,
    modelValue: string,
  }>(),
  {
    label: () => false,
    labelFor: () => '',
    labelClass: () => '',
    modelValue: () => '',
  }
)
</script>

<style scoped lang="scss">
</style>
