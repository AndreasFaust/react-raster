export default ({ cols, left, parent, cssMode }) => {
  if (cssMode === 'grid') {
    return cols.map((col, index) => col + left[index])
  }
  return cols.map((col, index) => (col * 100) / parent[index])
}
