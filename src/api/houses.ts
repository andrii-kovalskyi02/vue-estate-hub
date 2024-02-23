import type { House } from '@/views/houses/houses.types'
import { client } from '@/utils/fetchClient'

const createHouse = (house: House) => client.post<House>('', house)

const uploadImage = (houseId: number, img: any) => {
  return client.post(`/${houseId}/upload`, img)
}

const getHouses = () => client.get<House[]>('')

const getHouse = (hosueId: number) => client.get<House[]>(`/${hosueId}`)

const deleteHouse = (houseId: number) => client.delete(`/${houseId}`)

const updateHouse = (houseId: number, house: House) => {
  return client.patch<House>(`/${houseId}`, house)
}

export { createHouse, uploadImage, getHouses, getHouse, deleteHouse, updateHouse }
