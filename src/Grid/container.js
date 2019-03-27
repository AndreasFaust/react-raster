import React from 'react'
import styled from 'styled-components'

const Container = ({
  className,
  children,
  tag = 'div'
}) => {
  return React.createElement(
    tag,
    { className },
    children
  )
}

const StyledContainer = styled(Container)`
  width: 100%;
  overflow: hidden;
  display: flex;
  align-items: stretch;

  ${props => props.media.map((media, index) => {
    return media`
      position: ${props => props.position[index]};
      padding-left: ${props.left[index]};
      padding-right: ${props.right[index]};
      padding-top: ${props.top[index]};
      padding-bottom: ${props.bottom[index]};
    `
  })}
`

const StyledContainerCustom = styled(StyledContainer)`
  ${props => props.media.map((media, index) => {
    return media`
      ${props.style[index]}   
    `
  })}
`

export default StyledContainerCustom
