import React from 'react'

const Container = React.forwardRef(({
  className,
  children,
  src,
  alt,
  tag = 'div'
}, ref) => {
  return React.createElement(
    tag,
    { className, src, alt, ref },
    tag !== 'img' ? children : undefined
  )
})

export default Container
