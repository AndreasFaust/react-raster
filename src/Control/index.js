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
      styleOuter={`
        width: 100%;
        z-index: 10000;
        left: 0; 
        top: 0; 
        bottom: 0;
      `}
    >
      {[...Array(props.colspan)].map((col, index) => (
        <Box
          key={index}
          cols={1}
          styleInner={`
            background-color: ${props.controlColor};
          `}
        />
      ))}
    </Grid>
  )
}

export default Control
