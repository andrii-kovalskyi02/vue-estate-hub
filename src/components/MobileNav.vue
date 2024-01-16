<template>
  <nav class="nav">
    <ul className="nav__list">
      <li
        class="nav__item"
      >
        <RouterLink
          :to="{
            name: 'Houses',
            query: $route.query
          }"
          class="nav__link"
        >
          <TheIcon type="house" :isActive="isActiveLink('Houses')" />
        </RouterLink>
      </li>
      <li
        class="nav__item"
      >
        <RouterLink
          :to="{ name: 'About' }"
          class="nav__link"
        >
          <TheIcon type="about" :isActive="isActiveLink('About')" />
        </RouterLink>
      </li>
    </ul>
  </nav>
</template>

<script setup lang="ts">
import { RouterLink, useRoute } from 'vue-router'
import TheIcon from './TheIcon.vue'

const route = useRoute()
const isActiveLink = (routeName: string) => route.name === routeName
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
