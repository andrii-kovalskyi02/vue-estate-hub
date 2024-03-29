<template>
  <teleport to="#modals">
    <transition name="modal-animation">
      <div v-show="isModalOpen" ref="modalRef" class="modal" role="dialog" aria-modal="true">
        <transition name="modal-content-animation">
          <div
            v-show="isModalOpen"
            class="modal-content"
            v-scroll-lock="isModalOpen"
            v-on-click-outside="close"
            tabindex="0"
          >
            <slot />
          </div>
        </transition>
      </div>
    </transition>
  </teleport>
</template>

<script setup lang="ts">
import { nextTick, onMounted, onUnmounted, ref, watch } from 'vue'
import { useFocusTrap } from '@vueuse/integrations/useFocusTrap.mjs'
import { vOnClickOutside } from '@vueuse/components'

const props = defineProps<{
  isModalOpen: boolean
}>()

const emit = defineEmits<{
  close: [null]
}>()

const modalRef = ref<HTMLDivElement | null>(null)
const { activate, deactivate } = useFocusTrap(modalRef)

const close = () => {
  emit('close', null)
}

const handleKeyUp = (event: KeyboardEvent) => {
  if (event.key === 'Escape') {
    close()
  }
}

watch(
  () => props.isModalOpen,
  async () => {
    if (props.isModalOpen) {
      await nextTick()
      activate()
    } else {
      deactivate()
    }
  }
)

onMounted(() => {
  document.addEventListener('keyup', handleKeyUp)
})
onUnmounted(() => {
  document.removeEventListener('keyup', handleKeyUp)
})
</script>

<style lang="scss">
.modal-animation {
  &-enter-active,
  &-leave-active {
    @include transition(opacity, $_timing-function: cubic-bezier(0.3, 0.1, 0.3, 1));
  }

  &-enter-from,
  &-leave-to {
    opacity: 0;
  }
}

.modal-content-animation {
  &-enter-active,
  &-leave-active {
    @include transition(all, $_timing-function: cubic-bezier(0.3, 0.1, 0.3, 1));
  }

  &-enter-from {
    opacity: 0;
    transform: scale(0.8);
  }

  &-leave-to {
    transform: scale(0.8);
  }
}

.modal {
  position: fixed;
  z-index: 1;
  left: 0;
  top: 0;
  @include flexCenter;
  width: 100vw;
  height: 100vh;
  overflow: auto;
  background-color: rgba(0, 0, 0, 0.4);

  &-content {
    width: 80%;
    padding: 30px;
    background-color: $background-color-1;
    border-radius: 10px;

    @include onTablet {
      width: 640px;
      padding: 50px;
    }
  }
}
</style>
