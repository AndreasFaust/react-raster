import React from 'react'
import styled from 'styled-components'
import Container from '../utils/container'

const GridContainer = styled(Container)`
  display: grid;
  grid-template-columns: repeat(${props => props.colspan}, 1fr);
  grid-auto-columns: ${props => props.colspan}fr;
  box-sizing: border-box;

  ${props => props.media.map((media, index) => {
    return media`
      position: ${props => props.position[index]};
      padding-left: ${props.left[index]};
      padding-right: ${props.right[index]};
      padding-top: ${props.top[index]};
      padding-bottom: ${props.bottom[index]};
      grid-column-gap: ${props.gutterX[index]};
      grid-row-gap: ${props.gutterY[index]};
      ${props.style[index]}
      align-items: ${props => props.alignY[index]};
      justify-content: ${props => props.alignX[index]};
    `
  })}
`

const FlexContainer = styled(Container)`
  display: flex;
  align-items: stretch;
  box-sizing: border-box;

  ${props => props.media.map((media, index) => {
    return media`
      position: ${props => props.position[index]};
      padding-left: ${props.left[index]};
      padding-right: ${props.right[index]};
      padding-top: ${props.top[index]};
      padding-bottom: ${props.bottom[index]};
      ${props.style[index]}
    `
  })}
`

export default (props) => {
  if (props.cssMode === 'flex') {
    return <FlexContainer {...props} />
  }
  return <GridContainer {...props} />
}
