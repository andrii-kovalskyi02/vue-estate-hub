<template>
  <span
    class="icon"
    :class="{ [`icon--${type}`]: true, [`icon--${type}-active`]: isActive }"
    :aria-label="`${type} Icon`"
  />
</template>

<script setup lang="ts">
withDefaults(defineProps<{
    type: String,
    isActive?: Boolean
  }>(), {
  isActive: () => false
})
</script>

<style scoped lang="scss">
.icon {
  display: block;
  width: 15px;
  height: 15px;

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
    background-image: url(@/assets/images/icons/ic_mobile_navigation_home@3x.png);

    &-active {
      background-image: url(@/assets/images/icons/ic_mobile_navigation_home_active@3x.png);
    }
  }

  &--about {
    width: 28px;
    height: 28px;
    background-image: url(@/assets/images/icons/ic_mobile_navigation_info@3x.png);

    &-active {
      background-image: url(@/assets/images/icons/ic_mobile_navigation_info_active@3x.png);
    }
  }

  &--bedroom {
    background-image: url(@/assets/images/icons/ic_bed@3x.png);
  }

  &--bathroom {
    background-image: url(@/assets/images/icons/ic_bath@3x.png);
  }

  &--size {
    background-image: url(@/assets/images/icons/ic_size@3x.png);
  }

  &--search {
    background-image: url(@/assets/images/icons/ic_search@3x.png);
  }

  &--clear {
    background-image: url(@/assets/images/icons/ic_clear@3x.png);
  }
}
</style>
