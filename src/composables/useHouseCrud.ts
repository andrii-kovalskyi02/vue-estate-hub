import { ref } from 'vue';
import type { House } from '@/types/House';
import { getHouses, getHouse, createHouse, updateHouse, deleteHouse } from '@/api/houses'
import type { RequestMethod } from '@/utils/fetchClient'

export default function useHouseCrud() {
  const housesData = ref<House[]>([])
  const house = ref<House | null>(null)
  const loading = ref(true)
  const error = ref<any>(null)

  async function dataOperation(
  type: RequestMethod | 'POST_IMAGE',
  id?: number,
  payload?: any
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

          housesData.value = await getHouses()
          break
        
        case 'POST': {
          const newHouse: House = await createHouse(payload)
          housesData.value.push(newHouse)
          break
        }

        default:
          throw new Error('Invalid operation type');
      }
    } catch (e) {
      error.value = e
    } finally {
      loading.value = false
    }
  }

  return { housesData, house, loading, error, dataOperation }
}
