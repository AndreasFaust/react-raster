import isArray from './isArray'

function addValues ({ array, breakpointsLength }) {
  const lastKnownValue = array[array.length - 1]
  while (array.length < breakpointsLength) {
    array.push(lastKnownValue)
  }
  return array
}

function getArray (prop, defaultProp) {
  if (!prop) return [defaultProp]
  if (!isArray(prop)) return [prop]
  return prop
}

export default ({ prop, defaultProp, breakpoints }) => {
  const breakpointsLength = breakpoints.length
  let array = getArray(prop, defaultProp)
  if (array.length < breakpointsLength) array = addValues({ array, breakpointsLength })
  if (array.length > breakpointsLength) array = array.splice(breakpointsLength)
  return array
}
