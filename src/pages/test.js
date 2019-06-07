import React, { useEffect, useRef } from 'react'
import { Link } from 'gatsby'
import { Grid, Box } from '../raster'
import image1 from '../images/image-1.jpg'
import image2 from '../images/image-2.jpg'
import image3 from '../images/image-3.jpg'
import image4 from '../images/image-4.jpg'
import image5 from '../images/image-5.jpg'

const ImageBox = () => (
  <Box
    top={1}
    left={1}
    cols={3}
    style={`
      background: pink;

      img { 
        display: block;
        width: 100%; 
        width: 100% !important;
        height: auto !important;
      
      }
    `}
    styleInner={`
      background: pink;

      img { 
        display: block;
        width: 100%; 
        width: 100% !important;
        height: auto !important;
      
      }
    `}
  >
    <div>
      <img src={image2} alt='Sample Image' />
    </div>
  </Box>
)

const IndexPage = () => {
  const ref = useRef()
  useEffect(() => {
    console.log(ref.current)
  }, [])
  return (
    <Grid
      tag='section'
      breakpoints={[0, 500, 800, 1025, 1200, 1400]}
      left={'1.5vw'}
      right={'3vw'}
      top={'10vw'}
      bottom={'20vw'}
      gutterX={'1.5vw'}
      gutterY={'3vw'}
      colspan={12}
      alignX={'center'}
      alignY={'center'}
      control
      styleOuter={`
    background: blue;
    align-items: center;
  `}
      cssMode='flex'
    >
      <Box
        ref={ref}
        className='Box--1'
        cols={[5]}
        left={[0]}
        top={[2]}
        styleInner={`
        background: yellow;
      `}
      >
        <ImageBox />
      </Box>
      {/* <Box
      className='Box--1'
      cols={[5]}
      left={[2]}
      top={[2]}
      styleInner={`
        background: green;
      `}
    >
      <Box
        className='Box--1'
        cols={[2]}
        left={[2]}
        styleInner={`
        background: pink;
        height: 200px;
      `}
      >
        <div className='content'>Welt!</div>
      </Box>
    </Box> */}

      {/* <Box
    className='Box--3'
    hasChildBoxes
    cols={[8, 7, 6, 5, 4, 3]}
    alignY={'top'}
    styleInner={`
      background: grey;
    `}
  >
    <ChildBox />
  </Box> */}
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

  )
}
export default IndexPage
