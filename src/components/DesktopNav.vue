<template>
  <nav class="nav">
    <ul className="nav__list">
        <li>
          <RouterLink :to="{ name: 'Houses', query: $route.query }">
            <img
              src="@/assets/images/img_logo_dtt@3x.png"
              alt="DTT Logo"
              class="nav__logo"
            >
          </RouterLink>
        </li>
        <li
          v-for="{ name } in routes.slice(0, 2)"
          :key="name"
          class="nav__item"
        >
          <RouterLink
            :to="{
              name,
              query: name === 'Houses' ? $route.query : {}
            }"
            class="nav__link"
            :aria-current="$route.matched[0]?.name === name ? 'page' : null"
          >
            {{ name }}
          </RouterLink>
        </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routes } from '@/router'
</script>

<style scoped lang="scss">
.nav {
  &__logo {
    width: 120px;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 50px;
    padding-left: 25px;

    list-style-type: none;
  }

  &__link {
    @extend %text-style-desktop-header-inactive-menu;
    @include hover(color, $secondary-color);
  }

  .active-link {
    @extend %text-style-desktop-header-active-menu;
  }
}
</style>
