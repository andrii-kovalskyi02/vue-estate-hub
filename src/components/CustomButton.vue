<template>
  <button
    type="button"
    class="button"
    :class="{
      [`button--${customClass}`]: true,
      [`button--${customClass}--active`]: isActive,
      [`button--${customClass}--error`]: hasError
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    customClass: string
    isActive?: boolean
    hasError?: boolean
  }>(),
  {
    isActive: () => false,
    hasError: () => false
  }
)
</script>

<style lang="scss">
.button {
  @include flexCenter;
  background-color: unset;
  cursor: pointer;

  &--clear {
    position: absolute;
    right: 20px;
  }

  &--sort-by-price,
  &--sort-by-size {
    width: 50%;
    height: 40px;
    background-color: $tertiary-color-2;

    @extend %text-style-buttons-and-tabs;
    color: $background-color-2;

    @include hover(background-color, $secondary-color-hover);

    @include onTablet {
      width: 170px;
      height: 46px;
    }

    &--active {
      background-color: $primary-color;

      @include hover(background-color, $primary-color-hover);
    }
  }

  &--sort-by-price {
    border-top-left-radius: 8px;
    border-bottom-left-radius: 8px;
  }

  &--sort-by-size {
    border-top-right-radius: 8px;
    border-bottom-right-radius: 8px;
  }

  &--back {
    gap: 10px;

    @extend %text-style-back-button-label;

    @include hover(color, $secondary-color);
  }

  &--create-new,
  &--post {
    gap: 15px;
    width: 220px;
    height: 50px;
    border-radius: 8px;
    background-color: $primary-color;

    @extend %text-style-buttons-and-tabs;
    text-transform: uppercase;
    color: $background-color-2;

    @include hover(background-color, $primary-color-hover);
  }

  &--clear-img {
    position: absolute;
    top: -10px;
    right: -10px;
  }

  &--select {
    justify-content: space-between;
    width: 100%;
    height: 55px;
    padding: 20px;
    border-radius: 10px;
    border: 1px solid transparent;

    background-color: $background-color-2;

    @extend %text-style-input-field;
    color: $tertiary-color-2;

    &--chosen {
      color: $secondary-color;
    }

    &--active {
      #arrow-down {
        fill: $text-color-primary;
      }
    }

    &--error {
      border-color: $primary-color;
      color: $primary-color;
    }

    transition: fill 0.3s;
  }

  &--delete-listing,
  &--go-back {
    width: 80%;
    height: 40px;
    border-radius: 8px;
    background-color: $primary-color;

    @extend %text-style-buttons-and-tabs;
    text-transform: uppercase;
    color: $background-color-2;

    @include hover(background-color, $primary-color-hover);

    @include onDesktop {
      height: 50px;
    }
  }

  &--go-back {
    background-color: $secondary-color;

    @include hover(background-color, $secondary-color-hover);
  }
}
</style>
