<template>
  <span
    class="icon"
    :class="{ [`icon--${type}`]: true, [`icon--${type}-active`]: isActive }"
    :aria-label="`${type} Icon`"
    role="img"
  />
</template>

<script setup lang="ts">
withDefaults(
  defineProps<{
    type: string
    isActive?: boolean
  }>(),
  {
    isActive: () => false
  }
)
</script>

<style scoped lang="scss">
.icon {
  display: block;
  width: 18px;
  height: 18px;

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @include onTablet {
    width: 20px;
    height: 20px;
  }

  &--house {
    width: 28px;
    height: 28px;
    background-image: url(/images/icons/ic_mobile_navigation_home@3x.png);

    &-active {
      background-image: url(/images/icons/ic_mobile_navigation_home_active@3x.png);
    }
  }

  &--about {
    width: 28px;
    height: 28px;
    background-image: url(/images/icons/ic_mobile_navigation_info@3x.png);

    &-active {
      background-image: url(/images/icons/ic_mobile_navigation_info_active@3x.png);
    }
  }

  &--bedroom {
    background-image: url(/images/icons/ic_bed@3x.png);
  }

  &--bathroom {
    background-image: url(/images/icons/ic_bath@3x.png);
  }

  &--size {
    background-image: url(/images/icons/ic_size@3x.png);
  }

  &--location {
    background-image: url(/images/icons/ic_location@3x.png);
  }

  &--price {
    background-image: url(/images/icons/ic_price@3x.png);
  }

  &--construction {
    background-image: url(/images/icons/ic_construction_date@3x.png);
  }

  &--garage {
    background-image: url(/images/icons/ic_garage@3x.png);
  }

  &--search {
    background-image: url(/images/icons/ic_search@3x.png);
  }

  &--clear {
    background-image: url(/images/icons/ic_clear@3x.png);
  }

  &--clear-white {
    width: 35px;
    height: 35px;
    background-image: url(/images/icons/ic_clear_white@3x.png);
  }

  &--back {
    background-image: url(/images/icons/ic_back_grey@3x.png);
  }

  &--back-mobile {
    background-image: url(/images/icons/ic_back_white@3x.png);
  }

  &--edit {
    background-image: url(/images/icons/ic_edit@3x.png);
  }

  &--edit-mobile {
    background-image: url(/images/icons/ic_edit_white@3x.png);
  }

  &--delete {
    background-image: url(/images/icons/ic_delete@3x.png);
  }

  &--delete-mobile {
    background-image: url(/images/icons/ic_delete_white@3x.png);
  }

  &--create-new {
    background-image: url(/images/icons/ic_plus_white@3x.png);
  }

  &--create-new-mobile {
    background-image: url(/images/icons/ic_plus_grey@3x.png);
  }

  &--upload {
    width: 30px;
    height: 30px;
    background-image: url(/images/icons/ic_upload@3x.png);
  }
}
</style>
