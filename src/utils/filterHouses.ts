import type { House } from "@/types/House";


export function filterHouses(
  houses: House[] = [],
  searchQuery: string,
): House[] {
  if (!searchQuery) {
    return houses
  }

  const formattedSearchQuery = searchQuery.toLowerCase()

  return houses.filter(({ price, size, location: { city, houseNumber, street, zip } }) => {
    const houseData = [
      `${street} ${houseNumber}`.toLowerCase(),
      price.toString(),
      zip.toLowerCase(),
      size.toString(),
      city.toLowerCase(),
    ]

    // Check if any property of the house matches the search query
    return houseData.some(data => data.includes(formattedSearchQuery))
    // const normalizedProductName = name.toLowerCase().replace(/\s/g, '')

    // return formattedSearchQuery
    //   .every(searchTerm => normalizedProductName.includes(searchTerm))
  })
}
