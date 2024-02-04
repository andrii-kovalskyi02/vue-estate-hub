import type { House } from '@/views/houses/houses.types'

export function filterHouses(
  houses: House[] = [],
  searchQuery: string,
): House[] {
  if (!searchQuery) {
    return houses
  }

  const formattedSearchQuery = searchQuery.toLowerCase()

  return houses.filter(({
    price,
    size, 
    location: { city, houseNumber, street, zip }
  }) => {
    const houseData = [
      `${street} ${houseNumber}`.toLowerCase(),
      price.toString(),
      zip.toLowerCase(),
      size.toString(),
      city.toLowerCase(),
    ]

    return houseData.some(data => data.includes(formattedSearchQuery))
  })
}
