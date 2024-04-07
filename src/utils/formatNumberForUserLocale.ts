export function formatNumberForUserLocale(number: number) {
  return number.toLocaleString(navigator.language)
}
