export default ({ cols, left, right, parent, cssMode }) => {
  if (cssMode === 'grid') {
    return cols.map((col, index) => col + left[index] + right[index])
  }
  return cols.map((col, index) => (col * 100) / parent[index])
}
