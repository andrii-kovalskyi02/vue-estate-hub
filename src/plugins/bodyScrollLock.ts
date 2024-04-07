import type { App, Directive } from 'vue'
import { enableBodyScroll, disableBodyScroll } from 'body-scroll-lock'

const vScrollLock: Directive = {
  mounted(el, binding) {
    if (binding.value) {
      disableBodyScroll(el)
    }
  },
  updated(el, binding) {
    if (binding.value) {
      disableBodyScroll(el)
    } else {
      enableBodyScroll(el)
    }
  },
  unmounted(el) {
    enableBodyScroll(el)
  }
}

export default {
  install: (app: App) => {
    app.directive('scroll-lock', vScrollLock)
  }
}
