import type { Criteria, House } from "@/views/houses/houses.types"
import { getRandomSuggestions } from "./getRandomSuggestions"
import { matchesCriteria } from "./matchesCriteria"

export function getSuggestions(
  listings: House[],
  currentListing: House,
  criteria: Criteria,
  numberOfSuggestions: number
): House[] {
  const filteredListings = listings
    .filter(listing => listing.id !== currentListing.id && !listing.madeByMe)

  const matchedListings: House[] = []
  let key: keyof Criteria

  filteredListings.some(listing => {
    for (key in criteria) {
      if (!matchesCriteria(listing, key, criteria[key])) {
        return false
      }
    }
  
    matchedListings.push(listing)
    return matchedListings.length >= numberOfSuggestions
  })

  if (matchedListings.length < 3) {
    if (!matchedListings.length) {
      return getRandomSuggestions(filteredListings, numberOfSuggestions)
    }

    const unmatchedListings = filteredListings.filter(listing => {
      return !matchedListings.some(item => item.id === listing.id)
    })

    const suggestionsNeeded = numberOfSuggestions - matchedListings.length

    const randomSuggestions = getRandomSuggestions(unmatchedListings, suggestionsNeeded)

    return [ ...matchedListings, ...randomSuggestions]
  }

  return matchedListings
}
