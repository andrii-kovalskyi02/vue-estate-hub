<template>
  <TheModal :isModalOpen="isModalOpen" @close="close">
    <div class="modal-delete-listing">
      <div class="modal-delete-listing__messages-wrapper">
        <h1 class="modal-delete-listing__title">Delete listing</h1>
        <h2 class="modal-delete-listing__subtitle">
          Are you shure you want to delete this listing?
          <br />
          This action cannot be undone.
        </h2>
      </div>
      <div class="modal-delete-listing__buttons-wrapper">
        <CustomButton customClass="delete-listing" @click="handleRemove">
          <LoadingIndicator v-if="loading" />
          <template v-else>Yes, delete</template>
        </CustomButton>
        <CustomButton customClass="go-back" @click="close"> Go back </CustomButton>
      </div>
    </div>
  </TheModal>
</template>

<script setup lang="ts">
import { useRouter } from 'vue-router'
import TheModal from '@/components/TheModal.vue'
import CustomButton from '@/components/CustomButton.vue'
import LoadingIndicator from '@/components/LoadingIndicator.vue'
import useHouseCrud from '@/composables/useHouseCrud'
import { housesRouteNames } from '../houses.routes'

const props = defineProps<{
  isModalOpen: boolean
  listingId: number
}>()

const emit = defineEmits<{
  close: [null]
}>()

const router = useRouter()
const { loading, dataOperation } = useHouseCrud()

const handleRemove = () => {
  dataOperation('DELETE', props.listingId)
  router.replace({ name: housesRouteNames.houses })
}

const close = () => {
  emit('close', null)
}
</script>

<style scoped lang="scss">
.modal-delete-listing {
  @include flexCenter;
  flex-direction: column;
  gap: 30px;

  @include onDesktop {
    gap: 60px;
  }

  &__messages-wrapper {
    text-align: center;
  }

  &__title {
    margin-bottom: 20px;
    @extend %text-style-header1;

    @include onDesktop {
      margin-bottom: 30px;
    }
  }

  &__subtitle {
    @extend %text-style-body;
  }

  &__buttons-wrapper {
    @include flexCenter;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
}
</style>
