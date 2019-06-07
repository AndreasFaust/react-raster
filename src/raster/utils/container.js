import React from 'react'

const Container = React.forwardRef(({
  className,
  children,
  tag = 'div'
}, ref) => {
  return React.createElement(
    tag,
    { className, ref },
    children
  )
})

export default Container
