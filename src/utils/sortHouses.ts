import type { House } from "@/types/House"
import { SortBy } from '@/types/SortByEnum'

export function sortHouses(
  houses: House[] = [],
  sortBy: SortBy,
): House[] {
  if (sortBy) {
    return [...houses].sort((firstHouse, secondHouse) => {
      switch (sortBy) {
        case SortBy.Price:
          return firstHouse.price - secondHouse.price
        case SortBy.Size:
          return firstHouse.size - secondHouse.size

        default:
          return 0
      }
    })
  }

  return houses
}
