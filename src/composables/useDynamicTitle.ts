import { useRoute } from 'vue-router'
import { useHead } from '@unhead/vue'

const defaultTitle = 'Estate Hub'

export default function useDynamicTitle(dynamicTitle?: string) {
  const { meta } = useRoute()
  const pageTitle = dynamicTitle || meta.pageTitle

  useHead({
    title: pageTitle ? `${pageTitle} - ${defaultTitle}` : defaultTitle
  })
}
