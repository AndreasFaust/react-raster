import React from 'react'
import styled from 'styled-components'

const InnerTag = ({ className, children }) => (
  <div className={className}>
    {children}
  </div>
)

const StyledInner = styled(InnerTag)`  
  display: flex;
  position: relative;
  flex-wrap: wrap;
  width: 100%;
  ${props => props.media.map((media, index) => {
    return media`
      align-items: ${props.alignY[index]};
      justify-content: ${props.alignX[index]};
      ${props.style && props.style[index]}   
    `
  })}
`

const Inner = ({
  media,
  className,
  alignX,
  alignY,
  style,
  children,
  cssMode
}) => {
  if (cssMode === 'grid') return children
  return (
    <StyledInner
      className={className}
      media={media}
      alignX={alignX}
      alignY={alignY}
      style={style}
    >
      {children}
    </StyledInner>
  )
}

export default Inner
