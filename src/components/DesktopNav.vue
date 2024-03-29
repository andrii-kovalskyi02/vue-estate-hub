<template>
  <nav class="nav">
    <ul className="nav__list">
      <li class="nav__item">
        <RouterLink :to="{ name: housesRouteNames.houses }" class="nav__logo-link">
          <img src="/images/img_logo_dtt@3x.png" alt="DTT Logo" class="nav__logo-img" />
        </RouterLink>
      </li>
      <li v-for="{ name } in routes.slice(0, 2)" :key="name" class="nav__item">
        <RouterLink
          :to="{ name }"
          class="nav__link"
          :aria-current="$route.name === name ? 'page' : null"
        >
          {{ name }}
        </RouterLink>
      </li>
    </ul>

    <FavoritesNavLink />
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routes } from '@/router'
import { housesRouteNames } from '@/views/houses/houses.routes'
import FavoritesNavLink from '@/views/favorites/components/FavoritesNavLink.vue'
</script>

<style scoped lang="scss">
.nav {
  display: flex;
  align-items: center;
  justify-content: space-between;
  width: 100%;
  padding: 15px $paddingDefault;

  &__logo-link {
    display: flex;
    align-items: center;
  }

  &__logo-img {
    width: 120px;
  }

  &__list {
    display: flex;
    align-items: center;
    gap: 50px;

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
