import type { House } from '@/types/House'
import { client } from '@/utils/fetchClient'

export const getHouses = () => client.get<House[]>()