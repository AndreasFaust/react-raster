export default ({ margin, cols, parent, cssMode, gutterX }) => {
  if (cssMode === 'grid') {
    return margin.map((mar, index) => {
      return mar
        ? `calc(((100% + ${gutterX[index]}) / ${cols[index]}) * ${mar})`
        : undefined
    })
  }
  return margin.map((mar, index) => {
    return mar
      ? `${(mar * 100) / parent[index]}%`
      : undefined
  })
}
