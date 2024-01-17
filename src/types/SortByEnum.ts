enum SortBy {
  Price = 'price',
  Size = 'size'
}

const sortByValues = [
  { value: SortBy.Price, label: 'Price' },
  { value: SortBy.Size, label: 'Size' },
]

export { SortBy, sortByValues }