import { ref } from 'vue'
import type { House, ListingFormData } from '@/views/houses/houses.types'
import { getHouses, getHouse, createHouse, deleteHouse, uploadImage, updateHouse } from '@/api/houses'
import type { RequestMethod } from '@/utils/fetchClient'
import { useHousesStore } from '@/stores/houses'

type Payload = [ListingFormData, FormData | null]

export default function useHouseCrud() {
  const housesStore = useHousesStore()
  const house = ref<House | null>(null)
  const loading = ref(false)
  const error = ref<any>(null)

  async function dataOperation(
    type: RequestMethod,
    id: number | null,
    payload?: Payload
  ) {
    loading.value = true
    error.value = null

    try {
      switch (type) {
        case 'GET':
          if (id) {
            house.value = (await getHouse(id))[0] || null
            break
          }

          housesStore.setHouses(await getHouses())
          break

        case 'POST':
          if (payload) {
            const newHouse = await createHouse(payload[0])

            if (newHouse) {
              await uploadImage(newHouse.id, payload[1])
              house.value = newHouse
            }
          }
          break

        case 'PATCH':
          if (id && payload) {
            await updateHouse(id, payload[0])

            if (payload[1]) {
              await uploadImage(id, payload[1])
            }
          }
          break

        case 'DELETE':
          if (id) {
            await deleteHouse(id)
            const index = housesStore.houses.findIndex(house => house.id === id)
            housesStore.removeHouse(index)
          }
          break

        default:
          throw new Error('Invalid operation type')
      }
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  return { house, loading, error, dataOperation }
}
