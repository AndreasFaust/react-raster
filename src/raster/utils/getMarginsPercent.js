export default ({ margin, cols, parent, cssMode, gutterX }) => {
  if (cssMode === 'grid') {
    return margin.map((mar, index) => {
      return `calc(((100% + ${gutterX[index]}) / ${cols[index]}) * ${mar})`
    })
  }
  return margin.map((mar, index) => {
    const percentValue = (mar * 100) / parent[index]
    return `${percentValue}%`
  })
}
