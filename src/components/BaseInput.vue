<template>
  <label v-if="label" :for="labelFor" :class="labelClass">
    {{ label }}
  </label>
  <input
    type="text"
    :value="modelValue"
    @input="handleInput"
    :id="labelFor"
    v-bind="$attrs"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    label: string | boolean
    labelFor: string
    labelClass?: string
    modelValue: string
  }>(),
  {
    label: () => false,
    labelFor: () => '',
    labelClass: () => '',
    modelValue: () => ''
  }
)

const emit = defineEmits<{
  'update:modelValue': [value: string]
}>()

const handleInput = (event: Event) => {
  const target = event.target as HTMLInputElement
  emit('update:modelValue', target.value)
}
</script>

<style scoped lang="scss"></style>
