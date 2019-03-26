import React from 'react'
import styled from 'styled-components'

const Container = ({
  className,
  children,
  // style = {},
  tag = 'div'
}) => (
  React.createElement(
    tag,
    { className },
    children
  )
)

const StyledContainer = styled(Container)`
  display: flex;
  overflow: hidden;
  ${props => props.media.map((media, index) => {
    return media`
      width: ${props.cols[index]}%;
      
      padding-left: calc(${props => props.gutterX[index]} / 2);
      padding-right: calc(${props => props.gutterX[index]} / 2);
      padding-top: calc(${props => props.gutterY[index]} / 2);
      padding-bottom: calc(${props => props.gutterY[index]} / 2);

      margin-left: ${props => props.left[index]}%;
      margin-right: ${props => props.right[index]}%;
      margin-top: ${props => props.top[index]}%;
      margin-bottom: ${props => props.bottom[index]}%;
    `
  })
}
`

const StyledContainerCustom = styled(StyledContainer)`
  ${props => props.style}
`

export default StyledContainerCustom
