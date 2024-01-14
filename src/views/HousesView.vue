<template>
  <main>
    <TheSearch />

    <template v-if="!searchStore.isSearchLoading && !loading && !error">
      <HousesList v-if="filteredHouses.length" :houses="filteredHouses"/>
      <NotFound v-else />
    </template>
    <LoadingIndicator v-else-if="!error" />

    <ErrorNotification v-if="error" :error-message="error" />
  </main>
</template>

<script setup lang="ts">
import { computed, onMounted } from 'vue';
import { storeToRefs } from 'pinia';
import { useHousesStore } from '@/stores/houses';
import { useSearchStore } from '@/stores/search';
import { filterHouses } from '@/utils/filterHouses';
import ErrorNotification from '@/components/ErrorNotification.vue';
import HousesList from '@/components/HousesList.vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import NotFound from '@/components/NotFound.vue';
import TheSearch from '@/components/TheSearch.vue';

const housesStore = useHousesStore()
const searchStore = useSearchStore()
const { houses, loading, error } = storeToRefs(housesStore)

const filteredHouses = computed(() => {
  return filterHouses(houses.value, searchStore.appliedSearchQuery)
})

onMounted(() => housesStore.fetchData())
</script>
