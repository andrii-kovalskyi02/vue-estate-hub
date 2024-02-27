<template>
  <DeleteListingModal
    :id="listingId"
    :isModalOpen="isModalOpen"
    @close="closeModal"
  />

  <div class="house-actions">
    <CustomButton
      custom-class="edit"
      @click="handleEditClick"
      aria-label="Edit House"
    >
      <TheIcon :type="isMobile ? 'edit-mobile' : 'edit'" />
    </CustomButton>
    <CustomButton
      custom-class="delete"
      @click="isModalOpen = true"
      aria-label="Delete House"
    >
      <TheIcon :type="isMobile ? 'delete-mobile' : 'delete'" />
    </CustomButton>
  </div>
</template>

<script setup lang="ts">
import { ref } from 'vue'
import CustomButton from '@/components/CustomButton.vue'
import TheIcon from '@/components/TheIcon.vue'
import DeleteListingModal from './DeleteListingModal.vue'
import { housesRouteNames } from '../houses.routes'
import { useRouter } from 'vue-router'

const props = withDefaults(
  defineProps<{
    isMobile?: boolean
    listingId?: number
    slug?: string
  }>(),
  {
    isMobile: () => false
  }
)

const router = useRouter()

const isModalOpen = ref(false)

const handleEditClick = () => {
  router.push({
    name: housesRouteNames.editListing,
    params: {
      houseId: props.listingId,
      slug: props.slug
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

  @include onTablet {
    gap: 15px;
  }
}
</style>
