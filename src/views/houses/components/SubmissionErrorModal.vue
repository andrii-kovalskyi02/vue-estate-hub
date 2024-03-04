<template>
  <TheModal :isModalOpen="isModalOpen" @close="close">
    <div class="modal-error-notification">
      <h2 class="modal-error-notification__main-message">
        {{ ErrorMessages.ErrorSubmittingForm }}
      </h2>
      <div class="modal-error-notification__buttons-wrapper">
        <CustomButton customClass="try-again" @click="handleTryAgain">
          Try again
        </CustomButton>
        <CustomButton customClass="close" @click="close">
          Close
        </CustomButton>
      </div>
    </div>
  </TheModal>
</template>

<script setup lang="ts">
import TheModal from '@/components/TheModal.vue'
import CustomButton from '@/components/CustomButton.vue'
import { ErrorMessages } from '../houses.constants'

const props = defineProps<{
  isModalOpen: boolean,
  submitAgain: () => {}
}>()

const emit = defineEmits<{
  'close': [null]
}>()

const close = () => {
  emit('close', null)
}

const handleTryAgain = () => {
  close()
  props.submitAgain()
}
</script>

<style scoped lang="scss">
.modal-error-notification {
  @include flexCenter;
  flex-direction: column;
  gap: 30px;

  @include onDesktop {
    gap: 60px;
  }

  &__main-message {
    @extend %text-style-body;
    text-align: center;
  }

  &__buttons-wrapper {
    @include flexCenter;
    flex-direction: column;
    gap: 20px;
    width: 100%;
  }
}
</style>
