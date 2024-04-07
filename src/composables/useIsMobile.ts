import { computed } from 'vue'
import useWindowWidth from './useWindowWidth'

export default function useIsMobile() {
  const { clientWidth } = useWindowWidth()
  const tabletBreakpoint = 768

  const isMobile = computed(() => clientWidth.value < tabletBreakpoint)

  return { isMobile }
}
