import { ref, onMounted, onUnmounted } from 'vue'

export default function useWindowWidth() {
  const clientWidth = ref(window.innerWidth)
  const updateWidth = () => {
    clientWidth.value = window.innerWidth
  }

  onMounted(() => {
    window.addEventListener('resize', updateWidth)
  })

  onUnmounted(() => {
    window.removeEventListener('resize', updateWidth)
  })

  return { clientWidth }
}
