export function formatNumber(number: number) {
  return number < 1000 ? number.toFixed(3) : number.toLocaleString('nl-NL')
}
