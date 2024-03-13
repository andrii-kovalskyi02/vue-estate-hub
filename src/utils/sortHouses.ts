import { type OrderKeys, type House } from '@/views/houses/houses.types'
import { SortBy } from '@/views/houses/houses.enums'
import { Order } from '@/views/houses/houses.constants'

export function sortHouses(
  houses: House[] = [],
  sortBy: SortBy,
  order: OrderKeys,
): House[] {
  const sortedHouses = [...houses].sort((firstHouse, secondHouse) => {
    switch (sortBy) {
      case SortBy.Price:
        return firstHouse.price - secondHouse.price
      case SortBy.Year:
        return firstHouse.constructionYear - secondHouse.constructionYear
      case SortBy.Size:
        return firstHouse.size - secondHouse.size

      default:
        return 0
    }
  })

  return order === Order.DESC ? sortedHouses.reverse() : sortedHouses
}
