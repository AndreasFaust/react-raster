export default (prop) => {
  if (!prop) return false
  return prop.constructor === Array
}
