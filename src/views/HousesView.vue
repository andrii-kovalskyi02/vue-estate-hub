<template>
  <main>
    <LoadingIndicator v-if="loading" />
    <HouseCard v-else-if="houses" :house="houses[2]"/>

    <ErrorNotification v-if="error" :error-message="error" />
  </main>
</template>

<script setup lang="ts">
import ErrorNotification from '@/components/ErrorNotification.vue';
import HouseCard from '@/components/HouseCard.vue';
import LoadingIndicator from '@/components/LoadingIndicator.vue';
import { useHousesStore } from '@/stores/houses';
import { storeToRefs } from 'pinia';
import { onMounted } from 'vue';

const housesStore = useHousesStore()
const { houses, loading, error } = storeToRefs(housesStore)

onMounted(() => housesStore.fetchData())
</script>
