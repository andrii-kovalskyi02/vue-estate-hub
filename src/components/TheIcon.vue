<template>
  <span
    class="icon"
    :class="{ [`icon--${type}`]: true, [`icon--${type}-active`]: isActive }"
    :aria-label="`${type} icon`"
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
  @include size(18px, 18px);

  background-size: contain;
  background-position: center;
  background-repeat: no-repeat;

  @include onTablet {
    @include size(20px, 20px);
  }

  &--house {
    @include size(28px, 28px);
    background-image: url(/images/icons/ic_mobile_navigation_home@3x.png);

    &-active {
      background-image: url(/images/icons/ic_mobile_navigation_home_active@3x.png);
    }
  }

  &--about {
    @include size(28px, 28px);
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
    @include size(35px, 35px);
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
    @include size(30px, 30px);
    background-image: url(/images/icons/ic_upload@3x.png);
  }

  &--from-a-to-z,
  &--from-z-to-a {
    @include size(30px, 30px);
    background-image: url(/images/icons/ic_from-a-to-z@3x.png);
  }

  &--from-z-to-a {
    background-image: url(/images/icons/ic_from-z-to-a@3x.png);
  }

  &--favorite,
  &--favorite-nav {
    background-image: url(/images/icons/ic_favorite@3x.png);
  }

  &--favorite-nav {
    @include size(28px, 28px);
    @include hover(background-image, url(/images/icons/ic_favorite_black@3x.png));
  }

  &--favorite-mobile {
    background-image: url(/images/icons/ic_favorite_white@3x.png);
  }

  &--favorite-filled,
  &--favorite-nav-active {
    background-image: url(/images/icons/ic_favorite_filled@3x.png);
  }
}
</style>
