import type { House } from "@/views/houses/houses.types"

export function getRandomSuggestions(
listings: House[],
numberOfSuggestions: number
) {
  const randomListings = []

  for (let i = 0; i < numberOfSuggestions; i += 1) {
    const randomIndex = Math.floor(Math.random() * listings.length)
    const selectedListing = listings.splice(randomIndex, 1)[0]

    randomListings.push(selectedListing)
  }

  return randomListings
}
