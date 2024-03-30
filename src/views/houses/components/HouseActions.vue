<template>
  <DeleteListingModal :listingId="listing.id" :isModalOpen="isModalOpen" @close="closeModal" />

  <div class="house-actions">
    <CustomButton
      custom-class="favorite"
      @click="handleFavoritesClick"
      :aria-label="ariaFavoriteMessage"
    >
      <TheIcon v-if="isFavorite" type="favorite-filled" />
      <TheIcon v-else :type="isMobile ? 'favorite-mobile' : 'favorite'" />
    </CustomButton>
    <template v-if="listing.madeByMe">
      <CustomButton custom-class="edit" @click="handleEditClick" aria-label="Edit House">
        <TheIcon :type="isMobile ? 'edit-mobile' : 'edit'" />
      </CustomButton>
      <CustomButton custom-class="delete" @click="isModalOpen = true" aria-label="Delete House">
        <TheIcon :type="isMobile ? 'delete-mobile' : 'delete'" />
      </CustomButton>
    </template>
  </div>
</template>

<script setup lang="ts">
import { computed, ref } from 'vue'
import CustomButton from '@/components/CustomButton.vue'
import TheIcon from '@/components/TheIcon.vue'
import DeleteListingModal from './DeleteListingModal.vue'
import { housesRouteNames } from '../houses.routes'
import { useRouter } from 'vue-router'
import type { House } from '../houses.types'
import { useFavoritesStore } from '@/stores/favorites'

const props = withDefaults(
  defineProps<{
    listing: House
    isMobile?: boolean
  }>(),
  {
    isMobile: () => false
  }
)

const router = useRouter()
const favoritesStore = useFavoritesStore()

const isModalOpen = ref(false)

const isFavorite = computed(() => {
  return favoritesStore.favorites.some((favorite) => favorite.id === props.listing.id)
})

const ariaFavoriteMessage = computed(() => {
  return isFavorite.value ? 'Remove from Favorites' : 'Add to Favorites'
})

const handleFavoritesClick = () => {
  if (isFavorite.value) {
    favoritesStore.removeFavoriteListing(props.listing.id)
  } else {
    favoritesStore.addFavoriteListing(props.listing)
  }
}

const handleEditClick = () => {
  router.push({
    name: housesRouteNames.editListing,
    params: {
      houseId: props.listing.id
    }
  })
}

const closeModal = () => {
  isModalOpen.value = false
}
</script>

<style scoped lang="scss">
.house-actions {
  display: flex;
  gap: 12px;

  @media (max-width: 450px) {
    flex-wrap: wrap;
    justify-content: flex-end;
  }

  @include onTablet {
    gap: 15px;
  }
}
</style>
