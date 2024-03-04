import type { House } from "@/views/houses/houses.types"
import { findValueByKey } from "./findValueByKey"
import { validatePriceRange } from "./validatePriceRange"

export function matchesCriteria(listing: House, key: string, value: any): boolean {
  switch (key) {
    case 'price':
      return validatePriceRange(listing.price, value)

    default:
      return findValueByKey(listing, key as keyof House) === value
  }
}
