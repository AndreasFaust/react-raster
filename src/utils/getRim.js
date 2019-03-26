import isArray from 'lodash/isArray'
import normalizeProp from './normalizeProps'

const defaultProp = 0

function getDefaultGutter (defaultProp, breakpoints) {
  const norm = normalizeProp({ prop: defaultProp, breakpoints })
  return { top: norm, bottom: norm, left: norm, right: norm }
}

function validateArray (prop) {
  const array = prop.map(p => validateString(p))
  return [
    array.map(ar => ar[0]),
    array.map(ar => ar[1] || ar[0]),
    array.map(ar => ar[2] || ar[0]),
    array.map(ar => ar[3] || ar[1] || ar[0])
  ]
}

function validateString (prop) {
  return prop.includes('-')
    ? prop.split('-')
    : [prop]
}

function buildObjectFromArray (array, breakpoints) {
  return {
    top: normalizeProp({ prop: array[0], breakpoints }),
    right: normalizeProp({ prop: array[1] || array[0], breakpoints }),
    bottom: normalizeProp({ prop: array[2] || array[0], breakpoints }),
    left: normalizeProp({ prop: array[3] || array[1] || array[0], breakpoints })
  }
}

export default ({ prop, breakpoints }) => {
  if (typeof prop === 'string') return buildObjectFromArray(validateString(prop), breakpoints)
  if (isArray(prop)) return buildObjectFromArray(validateArray(prop), breakpoints)
  return getDefaultGutter(defaultProp, breakpoints)
}
