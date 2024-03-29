<template>
  <section class="about">
    <TheContainer>
      <section class="about__section about__section--about" tabindex="0">
        <h1 class="about__title">About DTT Real Estate</h1>
        <div class="about__paragraphs-divider">
          <p class="about__paragraph">
            Lorem ipsum dolor sit amet consectetur, adipisicing elit. Sit veritatis maxime tempora
            dignissimos odit culpa illum voluptatibus, inventore expedita ducimus tenetur commodi
            harum minima amet perspiciatis facere aliquid mollitia possimus quod quas quasi fuga,
            quis asperiores delectus! Facere asperiores porro illum repellat ratione nesciunt
            aliquid unde dolorem temporibus! Ad sapiente consectetur atque reiciendis repudiandae
            impedit alias quam soluta eius, velit placeat neque omnis a autem.
          </p>
          <p class="about__paragraph">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor
            incididunt ut labore et dolore magna aliqua.
          </p>
        </div>
      </section>
      <section class="about__section about__section--design-development" tabindex="0">
        <h1 class="about__title">Design and Development</h1>
        <div class="about__logo-link-wrapper">
          <img src="/images/img_logo_dtt@3x.png" alt="DTT Logo" class="about__logo" />
          <div class="about__hyperlink-wrapper">
            <span class="about__hyperlink-text">By DTT</span>
            <a href="https://www.d-tt.nl" class="about__hyperlink" target="_blank" rel="”noopener”">
              www.d-tt.nl
            </a>
          </div>
        </div>
      </section>
    </TheContainer>
  </section>
</template>

<script setup lang="ts">
import TheContainer from '@/components/TheContainer.vue'
</script>

<style scoped lang="scss">
.about {
  animation: $initialAnimation;

  &__section {
    &--about {
      margin-bottom: 50px;
    }
  }

  &__title {
    margin-bottom: 25px;
    @extend %text-style-header1;
  }

  &__paragraphs-divider {
    display: flex;
    flex-direction: column;
    gap: 30px;
  }

  &__paragraph {
    @extend %text-style-body;
  }

  &__logo-link-wrapper {
    display: flex;
    flex-wrap: wrap;
    align-items: center;
    gap: 35px;
  }

  &__logo {
    width: 280px;
  }

  &__hyperlink-wrapper {
    display: flex;
    flex-direction: column;
    gap: 5px;
  }

  &__hyperlink-text {
    @extend %text-style-empty-state-message;
  }

  &__hyperlink {
    @extend %text-style-empty-state-message;
    color: $text-color-hyperlink;

    &:visited {
      color: $text-color-hyperlink-visited;
    }

    @include hover(color, $text-color-hyperlink-hovered);
  }
}
</style>
