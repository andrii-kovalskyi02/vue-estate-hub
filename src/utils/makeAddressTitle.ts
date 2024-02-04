export const makeAddressTitle = (
  streetName: string,
  houseNumber: number,
  addition: string | null
): string => `${streetName} ${houseNumber}${addition ? addition : ''}`
