<template>
  <RouterLink
    :to="{ name: favoritesRouteNames.favorites }"
    class="nav__link--favorites"
    :aria-current="isFavoritesRoute ? 'page' : null"
    aria-label="Go to favorites page"
  >
    <TheIcon :is-active="isFavoritesRoute" type="favorite-nav" />
    <QuantityCounter :quantity="favoritesStore.favorites.length" :aria-label="description" />
  </RouterLink>
</template>

<script setup lang="ts">
import { computed } from 'vue'
import { RouterLink, useRoute } from 'vue-router'
import { favoritesRouteNames } from '../favorites.routes'
import TheIcon from '@/components/TheIcon.vue'
import QuantityCounter from '@/components/QuantityCounter.vue'
import useFavoritesCountDescription from '@/composables/useFavoritesCountDescription'

const route = useRoute()
const { description, favoritesStore } = useFavoritesCountDescription()

const isFavoritesRoute = computed(() => {
  return route.name === favoritesRouteNames.favorites
})
</script>

<style scoped lang="scss">
.nav {
  &__link--favorites {
    position: relative;
    @include flexCenter;
    width: 40px;
    height: 40px;
  }
}
</style>
