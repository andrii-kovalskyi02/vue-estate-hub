import { ref } from 'vue'
import type { House } from '@/views/houses/houses.types'
import { getHouses, getHouse, createHouse, deleteHouse, uploadImage } from '@/api/houses'
import type { RequestMethod } from '@/utils/fetchClient'
import { useHousesStore } from '@/stores/houses'

export default function useHouseCrud() {
  const housesStore = useHousesStore()
  const house = ref<House | null>(null)
  const loading = ref(false)
  const error = ref<any>(null)

  async function dataOperation(
    type: RequestMethod,
    id: number | null,
    payload?: Array<any>
  ) {
    loading.value = true
    error.value = null
    
    try {
      switch (type) {
        case 'GET':
          if (id) {
            house.value = (await getHouse(id))[0]
            break
          }

          housesStore.houses = await getHouses()
          break
        
        case 'POST': {
          if (payload && payload.length > 0) {
            const newHouse: House = await createHouse(payload[0])

            if (newHouse) {
              await uploadImage(newHouse.id, payload[1])
              house.value = newHouse
            }
          }

          break
        }

        case 'DELETE':
          if (id) {
            await deleteHouse(id)
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
