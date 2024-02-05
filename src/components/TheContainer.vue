<template>
  <div class="container">
    <slot/>
  </div>
</template>

<style scoped lang="scss">
.container {
  margin: 0 auto;
  padding: $paddingDefault $paddingDefault calc($mobileHeaderHeight + $paddingDefault);
  min-width: 320px;
  max-width: 1320px;

  @include onTablet {
    padding-top: 55px;
  }

  &--house-details-mobile {
    padding: 0;
  }
}
</style>