import { SortBy } from "./houses.enums"

const ErrorMessages = {
  ErrorFetchingData:
    "Oops! Something went wrong while fetching the data. Please give it another try in a moment. If the issue persists, don't hesitate to reach out to our support team at support@example.com. We apologize for any inconvenience.",
  ErrorSubmittingForm:
    "We're sorry, but there was an issue submitting your form. Please check your internet connection and try again. If the problem persists, feel free to contact our support team at support@example.com. We apologize for any inconvenience."
} as const

const Order = {
  ASC: 'asc',
  DESC: 'desc'
} as const

const listingSortOptions = [
  { value: SortBy.Price, label: 'Price' },
  { value: SortBy.Year, label: 'Year' },
  { value: SortBy.Size, label: 'Size' }
]

const garageSelectOptions = [
  { label: 'Yes', value: true },
  { label: 'No', value: false }
]

export { ErrorMessages, Order, listingSortOptions, garageSelectOptions }
