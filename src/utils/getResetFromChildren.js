import React from 'react'

export default (children, resetProps) => {
  if (typeof resetProps === 'boolean') return resetProps
  let reset = true
  React.Children.forEach(children, (child) => {
    if (child && child.type && child.type.displayName === 'Box') {
      reset = false
    }
  })
  return reset
}
