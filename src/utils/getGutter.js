import isArray from 'lodash/isArray'
import normalizeProp from './normalizeProps'

const defaultProp = 0

function getDefaultGutter (defaultProp, breakpoints) {
  return {
    x: normalizeProp({ prop: defaultProp, breakpoints }),
    y: normalizeProp({ prop: defaultProp, breakpoints })
  }
}

function validateArray (prop) {
  const array = prop.map(p => validateString(p))
  return [
    array.map(ar => ar[0]),
    array.map(ar => ar[1] || ar[0])
  ]
}

function validateString (prop) {
  return prop.includes('-')
    ? prop.split('-')
    : [prop]
}

function buildObjectFromArray (array, breakpoints) {
  return {
    x: normalizeProp({ prop: array[0], breakpoints }),
    y: normalizeProp({ prop: array[1], breakpoints })
  }
}

export default ({ prop, breakpoints }) => {
  if (typeof prop === 'string') return buildObjectFromArray(validateString(prop), breakpoints)
  if (isArray(prop)) return buildObjectFromArray(validateArray(prop), breakpoints)
  return getDefaultGutter(defaultProp, breakpoints)
}
