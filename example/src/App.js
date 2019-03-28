import React from 'react'
// import './reset.css'
import './index.css'
import { Grid, Box } from 'react-raster'

const App = () => {
  return (
    <>
      <Grid
        breakpoints={[0, 500, 800, 1025, 1200, 1400]}
        left={'1.5vw'}
        right={'3vw'}
        top={'10vw'}
        bottom={'20vw'}
        gutterX={'1.5vw'}
        gutterY={'3vw'}
        colspan={12}
        alignX={'left'}
        alignY={'top'}
        control
        styleContent={`
          ::before {
            content: '';
            z-index: -1;
            display: block;
            background: yellow;
            position: absolute;    
            left: 0;           
            top: 0;           
            right: 0;           
            bottom: 0;           
          }
        `}
      >
        <Box className='Box--1' cols={[11]} reset={false}>
          <div className='content'>Welt!</div>
        </Box>
        <Box
          className='Box--2'
          cols={[6]}
          left={[1, 1, 2]}
          styleContent={[`
            border: 10px solid red;
            &::after {
              content: '';
              width: 10px;
              height: 100px;
              background: red;
              display: block;
              position: absolute;
              left: 0;
              top: 0;
            }
          `, 'border: 20px solid green;']}
        >
          <div className='content'>Welt!</div>
        </Box>
        <Box className='Box--3' cols={[6]}>
          <Box cols={[6, 6, 6, 3]}>
            <div className='content'>Welt!</div>
          </Box>
          <Box cols={[3]}>
            <div className='content'>Welt!</div>
          </Box>
        </Box>
      </Grid>
    </>
  )
}

export default App
