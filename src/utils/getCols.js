export default ({ cols, parent }) => {
  return cols.map((col, index) => (col * 100) / parent[index])
}
