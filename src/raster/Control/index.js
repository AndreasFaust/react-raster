import React from 'react'
import styled from 'styled-components'

import Grid from '../grid'
import Box from '../box'

const ControlGrid = (props) => {
  return (
    <Grid
      {...props}
      position='absolute'
      className='Grid--Control'
      alignY='stretch'
      isControl
    >
      {[...Array(props.colspan)].map((col, index) => (
        <Box
          key={index}
          cols={1}
          style={`
            background-color: ${props.controlColor};
          `}
        />
      ))}
    </Grid>
  )
}

const StyledControlBox = styled('div')`
  position: absolute;
  z-index: 10000;
  left: 0;
  top: 0;
  right: 0;
  bottom: 0;
  background-color: ${props => props.controlColor};
  pointer-events: none;
`

const ControlBox = (props) => {
  return <StyledControlBox {...props} />
}

export { ControlGrid, ControlBox }
