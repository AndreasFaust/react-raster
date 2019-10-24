import React from 'react'
import Grid from '../Grid'
import Box from '../Box'

const Control = (props) => {
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

export default Control
