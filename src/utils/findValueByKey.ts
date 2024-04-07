type ObjectWithNestedValues = { [key: string]: any }

export function findValueByKey<T extends ObjectWithNestedValues>(
  obj: T,
  keyToFind: keyof T
): T[keyof T] | undefined {
  for (const key in obj) {
    if (key === keyToFind) {
      return obj[key]
    }

    if (typeof obj[key] === 'object') {
      const result = findValueByKey(obj[key], keyToFind)

      if (result !== undefined) {
        return result
      }
    }
  }
}
