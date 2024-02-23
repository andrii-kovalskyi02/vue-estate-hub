<template>
  <nav class="nav">
    <ul className="nav__list">
        <li class="nav__item">
          <RouterLink
            :to="{ name: housesRouteNames.houses }"
            class="nav__logo-link"
          >
            <img
              src="/images/img_logo_dtt@3x.png"
              alt="DTT Logo"
              class="nav__logo-img"
            />
          </RouterLink>
        </li>
        <li
          v-for="{ name } in routes.slice(0, 2)"
          :key="name"
          class="nav__item"
        >
          <RouterLink
            :to="{ name }"
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
import { housesRouteNames } from '@/views/houses/houses.routes'
</script>

<style scoped lang="scss">
.nav {
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
    padding: 15px $paddingDefault;

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
