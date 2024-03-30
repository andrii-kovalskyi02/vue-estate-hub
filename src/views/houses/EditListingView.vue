<template>
  <ListingTemplate listing-title="Edit listing">
    <ListingForm
      :listing-data="dataToEdit"
      :listing-image="houseData.image"
      :listing-id="houseData.id"
      :loading="loading"
      :error="error"
      submit-button-text="Save"
      @submit="handleSubmit"
    />
  </ListingTemplate>
</template>

<script setup lang="ts">
import useHouseCrud from '@/composables/useHouseCrud'
import ListingTemplate from './components/ListingTemplate.vue'
import ListingForm from './components/ListingForm.vue'
import type { House, ListingFormData } from './houses.types'
import useDynamicTitle from '@/composables/useDynamicTitle'

const props = defineProps<{
  houseData: House
}>()

useDynamicTitle()

const { loading, error, dataOperation } = useHouseCrud()
const { location, price, size, hasGarage, rooms, constructionYear, description } = props.houseData

const dataToEdit: ListingFormData = {
  streetName: location.street,
  houseNumber: location.houseNumber.toString(),
  houseNumberAddition: location.houseNumberAddition || undefined,
  zip: location.zip,
  city: location.city,
  price: price.toString(),
  size: size.toString(),
  hasGarage: hasGarage,
  bedrooms: rooms.bedrooms.toString(),
  bathrooms: rooms.bathrooms.toString(),
  constructionYear: constructionYear.toString(),
  description: description.toString()
}

const handleSubmit = async (
  formData: ListingFormData,
  imgFile: FormData | null,
  redirect: () => void
) => {
  let key: keyof ListingFormData
  const changes = new Map<typeof key, any>()

  for (key in dataToEdit) {
    if (dataToEdit[key] !== formData[key]) {
      changes.set(key, formData[key])
    }
  }

  if (changes.size) {
    await dataOperation('PATCH', props.houseData.id, [formData, imgFile])
  }

  redirect()
}
</script>
