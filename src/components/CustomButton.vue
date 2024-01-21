<template>
  <button
    type="button"
    class="button"
    :class="{
      [`button--${customClass}`]: true,
      [`button--${customClass}-active`]: isActive
    }"
  >
    <slot />
  </button>
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    customClass: String,
    isActive?: Boolean
  }>(), {
  isActive: () => false
})
</script>

<style lang="scss" scoped>
.button {
  position: relative;
  z-index: 1;
  @include flexCenter;
  background-color: unset;
  cursor: pointer;

  &--clear {
    position: absolute;
    z-index: 1;
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

    &-active {
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

  &--create-new {
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
}
</style>
