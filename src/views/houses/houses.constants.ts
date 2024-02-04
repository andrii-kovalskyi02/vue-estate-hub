import { SortBy } from "./houses.enums"

const ErrorMessages = {
  ErrorFetchingData: "Oops! Something went wrong while fetching the data. Please give it another try in a moment. If the issue persists, don't hesitate to reach out to our support team at support@example.com. We apologize for any inconvenience.",
  ErrorSubmittingForm: "We're sorry, but there was an issue submitting your form. Please check your internet connection and try again. If the problem persists, feel free to contact our support team at support@example.com. We apologize for any inconvenience."
} as const

const sortByValues = [
  { value: SortBy.Price, label: 'Price' },
  { value: SortBy.Size, label: 'Size' },
]

export { ErrorMessages, sortByValues }
