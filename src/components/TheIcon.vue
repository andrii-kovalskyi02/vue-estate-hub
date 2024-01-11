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
    isActive: Boolean
  }>(), {
  isActive: () => false
})
</script>

<style scoped lang="scss">
.icon {
  display: block;
  width: 30px;
  height: 30px;

  background-size: cover;
  background-position: center;
  background-repeat: no-repeat;

  &--house {
    background-image: url(@/assets/images/icons/ic_mobile_navigation_home@3x.png);

    &-active {
      background-image: url(@/assets/images/icons/ic_mobile_navigation_home_active@3x.png);
    }
  }

  &--about {
    background-image: url(@/assets/images/icons/ic_mobile_navigation_info@3x.png);

    &-active {
      background-image: url(@/assets/images/icons/ic_mobile_navigation_info_active@3x.png);
    }
  }
}
</style>
