enum SortBy {
  Price = 'price',
  Size = 'size'
}

const sortByArray = [
  { value: SortBy.Price, label: 'Price' },
  { value: SortBy.Size, label: 'Size' },
]

export { SortBy, sortByArray }