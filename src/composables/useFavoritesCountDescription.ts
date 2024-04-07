import { computed } from 'vue'
import { useFavoritesStore } from '@/stores/favorites'

export default function useFavoritesCountDescription() {
  const favoritesStore = useFavoritesStore()

  const description = computed(() => {
    const favoritesLength = favoritesStore.favorites.length
    const isSingular = favoritesLength === 1
    const verb = isSingular ? 'is' : 'are'
    const itemDescription = isSingular ? 'listing' : 'listings'
    return `There ${verb} ${favoritesLength} ${itemDescription} in your favorites list`
  })

  return { description, favoritesStore }
}
