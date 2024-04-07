<template>
  <div class="not-found" tabindex="0">
    <div class="not-found__container">
      <img src="/images/img_empty_houses@3x.png" alt="Not Found Image" class="not-found__img" />
      <h3 class="not-found__title" aria-live="assertive">
        <slot />
      </h3>
    </div>
  </div>
</template>

<style scoped lang="scss">
.not-found {
  &__container {
    display: flex;
    flex-direction: column;
    gap: 30px;

    animation: $initialAnimation;

    @include onTablet {
      gap: 50px;
    }
  }

  &__title {
    @extend %text-style-empty-state-message;
    color: $secondary-color;
    text-align: center;
  }

  &__img {
    display: block;
    width: 70%;
    margin: 0 auto;

    @include onTablet {
      width: 450px;
    }
  }
}
</style>
