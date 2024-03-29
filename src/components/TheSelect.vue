<template>
  <label v-if="label" :for="labelFor" :class="labelClass">
    {{ label }}
  </label>
  <div class="select" @keyup.esc="handleEscPress" v-on-click-outside="handleEscPress">
    <CustomButton
      :id="labelFor"
      :class="{ 'button--select--chosen': currentOption !== 'Select' }"
      custom-class="select"
      @click="toggleSelect"
      :is-active="isSelectClicked"
      :has-error="hasValidationError"
      :aria-label="`${label} ${currentOption}`"
      :aria-expanded="isSelectClicked"
      :aria-describedby="`${labelFor}-error`"
      :aria-invalid="hasValidationError"
      role="combobox"
    >
      {{ currentOption }}
      <div class="select__icons-container">
        <svg
          width="16"
          height="16"
          viewBox="0 2.5 16 16"
          xmlns="http://www.w3.org/2000/svg"
          transform="rotate(180)"
        >
          <use href="#arrow-down" />
        </svg>
        <svg width="16" height="16" viewBox="0 2.5 16 16" xmlns="http://www.w3.org/2000/svg">
          <path
            id="arrow-down"
            fill-rule="evenodd"
            clip-rule="evenodd"
            d="M12.4715 5.52864C12.7318 5.78899 12.7318 6.2111 12.4715 6.47145L8.47149 10.4714C8.21114 10.7318 7.78903 10.7318 7.52868 10.4714L3.52868 6.47144C3.26833 6.2111 3.26833 5.78899 3.52868 5.52864C3.78903 5.26829 4.21114 5.26829 4.47149 5.52864L8.00008 9.05723L11.5287 5.52864C11.789 5.26829 12.2111 5.26829 12.4715 5.52864Z"
            fill="#c3c3c3"
          />
        </svg>
      </div>
    </CustomButton>
    <ul class="select__list" :class="{ 'select__list--visible': isSelectClicked }">
      <li
        v-for="{ label, value } in options"
        :key="label"
        class="select__item"
        :class="{ 'select__item--hovered': label === currentOption }"
        @mouseenter="handleMouseEnter(label)"
        @click="handleOptionClick(label, value)"
        @keyup.enter="handleOptionClick(label, value)"
        :aria-selected="currentOption === label"
        role="option"
        tabindex="0"
      >
        {{ label }}
      </li>
    </ul>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import { vOnClickOutside } from '@vueuse/components'
import CustomButton from './CustomButton.vue'

const props = withDefaults(
  defineProps<{
    options: Array<any>
    option?: string
    label: string | boolean
    labelFor: string
    labelClass?: string
    hasValidationError: boolean
  }>(),
  {
    option: () => 'Select',
    label: () => false,
    labelFor: () => '',
    labelClass: () => '',
    hasValidationError: () => false
  }
)

const emit = defineEmits<{
  'option-change': [option: boolean]
}>()

const selectedOption = ref(props.option)
const currentOption = ref(props.option)
const isSelectClicked = ref(false)

const handleMouseEnter = (optionLabel: string) => {
  currentOption.value = optionLabel
}

const toggleSelect = () => (isSelectClicked.value = !isSelectClicked.value)

const handleOptionClick = (optionLabel: string, optionValue: boolean) => {
  selectedOption.value = optionLabel
  currentOption.value = selectedOption.value
  isSelectClicked.value = !isSelectClicked.value
  emit('option-change', optionValue)
}

const handleEscPress = () => {
  if (isSelectClicked.value) {
    currentOption.value = selectedOption.value
    isSelectClicked.value = false
  }
}
</script>

<style scoped lang="scss">
#arrow-down {
  @include transition(fill);
}

.select {
  position: relative;

  &__icons-container {
    display: flex;
    flex-direction: column;
  }

  &__list {
    position: absolute;
    top: 60px;

    display: none;
    flex-direction: column;
    width: 100%;
    padding: 6px 6px;

    list-style: none;

    border-radius: 8px;
    background-color: $background-color-2;
    box-shadow: 0 2px 15px 0 rgba(0, 0, 0, 0.05);

    &--visible {
      display: flex;
    }
  }

  &__item {
    padding: 6px 12px;
    border-radius: 8px;

    @extend %text-style-input-field;
    cursor: pointer;

    &--hovered {
      background-color: $background-color-1;
      color: $text-color-primary;
    }

    @include transition;
  }
}
</style>
