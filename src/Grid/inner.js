import React from 'react'
import styled from 'styled-components'

const Inner = ({ className, children }) => {
  return <div className={className}>{children}</div>
}

const StyledInner = styled(Inner)`  
  display: flex;
  flex-wrap: wrap;
  ${props => props.media.map((media, index) => {
    return media`
      width: calc(100% + (${props.gutterX[index]}));
      
      margin-left: calc(-${props.gutterX[index]} / 2);
      margin-right: calc(-${props.gutterX[index]} / 2);
      margin-top: calc(-${props.gutterY[index]} / 2);
      margin-bottom: calc(-${props.gutterY[index]} / 2);

      align-items: ${props => props.alignY[index]};
      justify-content: ${props => props.alignX[index]};    
    `
  })}
`

export default StyledInner
