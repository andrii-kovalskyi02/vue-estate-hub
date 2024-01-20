import type { House } from '@/types/House'
import { client } from '@/utils/fetchClient'

export const createHouse = (house: House) => client.post<House>('', house)

export const createImage = (houseId: number, img: any) => { 
  return client.post(`/${houseId}/upload`, img)
}

export const getHouses = () => client.get<House[]>('')

export const getHouse = (hosueId: number) => client.get<House[]>(`/${hosueId}`)

export const deleteHouse = (houseId: number) => client.delete(`/${houseId}`)

export const updateHouse = (houseId: number, house: House) => {
  return client.patch<House>(`/${houseId}`, house)
}
