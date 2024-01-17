<template>
  <nav class="nav">
    <ul className="nav__list">
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
          :aria-current="$route.name === name ? 'page' : null"
        >
          <TheIcon
            :type="getIconType(name)"
            :isActive="$route.name === name"
          />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink } from 'vue-router'
import { routes } from '@/router'
import TheIcon from './TheIcon.vue'

const getIconType = (name: string) => {
  return name === 'Houses' ? 'house' : name.toLowerCase()
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
