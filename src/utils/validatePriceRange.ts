export function validatePriceRange(price: number, currentListingPrice: number): boolean {
  const fiftyPercentOfCurrentListingPrice = currentListingPrice * 0.5
  const lowerBound = currentListingPrice - fiftyPercentOfCurrentListingPrice
  const upperBound = currentListingPrice + fiftyPercentOfCurrentListingPrice

  return price >= lowerBound && price <= upperBound
}
