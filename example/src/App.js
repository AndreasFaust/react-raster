import React from 'react'
// import './reset.css'
import './index.css'
import { Grid, Box } from 'react-raster'

const ChildBox = () => (
  <Box
    className='Box--1'
    cols={[8, 7, 6, 5, 4, 3]}
  >
    <div className='content'>Welt!</div>
  </Box>
)

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
        controlColor='rgba(200,255,200,0.3)'
        styleInner={`
          background: yellow;
          // ::before {
          //   content: '';
          //   z-index: -1;
          //   display: block;
          //   background: yellow;
          //   position: absolute;
          //   left: 0;
          //   top: 0;
          //   right: 0;
          //   bottom: 0;
          // }
        `}
      >
        {/* <Box
          className='Box--1'
          cols={[11]}
          // reset={false}
        >
          <div className='content'>Welt!</div>
        </Box> */}
        <Box
          className='Box--3'
          hasChildBoxes
          cols={[8, 7, 6, 5, 4, 3]}
          styleInner={`
            background: grey;
          `}
        >
          <ChildBox />
        </Box>
        {/* <Box
          className='Box--2'
          cols={[6]}
          left={[1, 1, 2]}
        >
          <div className='content'>Welt!</div>
        </Box>
        <Box
          className='Box--3'
          cols={[6]}
          styleInner={[`
            // background: pink;
          `]}
        >
          <Box
            cols={[6, 6, 6, 3]}
            styleInner={[`
              background: blue;
            `]}
          >
            <div className='content'>Welt!</div>
          </Box>
          <Box cols={[3]} left={1}>
            <div className='content'>Welt!</div>
          </Box>
        </Box> */}
      </Grid>
    </>
  )
}

export default App
