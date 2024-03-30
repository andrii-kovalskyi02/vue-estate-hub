<template>
  <ListingTemplate listing-title="Create new listing" :show-overview-button="true">
    <ListingForm
      :listingId="house?.id"
      :loading="loading"
      :error="error"
      submit-button-text="Post"
      @submit="handleSubmit"
    />
  </ListingTemplate>
</template>

<script setup lang="ts">
import useHouseCrud from '@/composables/useHouseCrud'
import ListingTemplate from './components/ListingTemplate.vue'
import ListingForm from './components/ListingForm.vue'
import type { ListingFormData } from './houses.types'
import useDynamicTitle from '@/composables/useDynamicTitle'

useDynamicTitle()

const { house, loading, error, dataOperation } = useHouseCrud()

const handleSubmit = async (
  formData: ListingFormData,
  imgFile: FormData | null,
  redirect: () => void
) => {
  await dataOperation('POST', null, [formData, imgFile])
  redirect()
}
</script>

<style scoped lang="scss"></style>
