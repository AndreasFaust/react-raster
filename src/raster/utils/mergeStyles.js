export default (style, inner, outer) => {
  return style.map((s, i) => {
    return outer[i] + inner[i] + s
  })
}
