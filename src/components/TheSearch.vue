<template>
  <form
    class="search"
    @submit.prevent
  >
    <div class="search__search-icon">
      <TheIcon type="search"/>
    </div>

    <input
      type="text"
      v-model.trim="query"
      class="search__input"
      placeholder="Search for a house"
    />

    <CustomButton
      v-if="query"
      type="reset"
      custom-class="clear"
      aria-label="Clear search query"
      @click="resetSearchInput"
    >
      <TheIcon type="clear"/>
    </CustomButton>
  </form>
</template>

<script setup lang="ts">
import { onUnmounted, ref, watch, watchEffect } from 'vue'
import TheIcon from './TheIcon.vue'
import { useSearchStore } from '@/stores/search'
import { useRoute, useRouter } from 'vue-router';
import debounce from 'lodash.debounce';
import CustomButton from './CustomButton.vue';

const searchStore = useSearchStore()
const router = useRouter()
const route = useRoute()
const query = ref('')
const debounceDelay = ref(500)
const loadingTimeout = ref<number>()

const resetSearchInput = () => {
  query.value = ''
}

const applySearchQuery = debounce(
  (query: string) => searchStore.appliedSearchQuery = query,
  debounceDelay.value,
)

watchEffect(() => {
  searchStore.searchQuery = query.value
  applySearchQuery(query.value)

  router.push({
    name: 'Houses',
    query: {
      ...route.query,
      query: query.value ? query.value : undefined
    },
  })
})

watch(query, (newSearchQuery) => {
  if (newSearchQuery) {
    clearTimeout(loadingTimeout.value)

    searchStore.isSearchLoading = true

    loadingTimeout.value = setTimeout(() => {
      searchStore.isSearchLoading = false
    }, debounceDelay.value + 100)
  } else {
    searchStore.isSearchLoading = false
  }
})

onUnmounted(() => clearTimeout(loadingTimeout.value))
</script>

<style lang="scss" scoped>
.search {
  position: relative;
  display: flex;
  align-items: center;

  @include onTablet {
    width: 38%;
  }

  &__search-icon {
    position: absolute;
    z-index: 1;
    left: 20px;
  }

  &__input {
    width: 100%;
    height: 35px;
    padding-left: 50px;
    border-radius: 5px;
    border: none;
    outline: none;

    background-color: $tertiary-color-1;

    @extend %text-style-input-field;

    @include onTablet {
      height: 46px;
      padding-left: 55px;
    }

    &::placeholder {
      color: $tertiary-color-2;
    }
  }
}
</style>
