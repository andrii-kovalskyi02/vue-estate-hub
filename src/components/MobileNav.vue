<template>
  <nav class="nav">
    <ul className="nav__list">
      <li v-for="{ name } in routes.slice(0, 2)" :key="name" class="nav__item">
        <RouterLink
          :to="{ name }"
          class="nav__link"
          :aria-current="$route.matched[0]?.name === name ? 'page' : null"
        >
          <TheIcon
            :type="getIconType(name as string)"
            :is-active="$route.matched[0]?.name === name"
          />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { routes } from '@/router'
import { RouterLink } from 'vue-router'
import { housesRouteNames } from '@/views/houses/houses.routes'
import TheIcon from './TheIcon.vue'

const getIconType = (name: string) => {
  return name === housesRouteNames.houses ? 'house' : name.toLowerCase()
}
</script>

<style scoped lang="scss">
.nav {
  width: 100%;

  &__list {
    @include flexCenter;
    justify-content: space-between;
    padding: 0 70px;

    list-style-type: none;
  }
}
</style>
