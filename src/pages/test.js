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
    // top={0.5}
    // left={0.5}
    cols={2}
    alignY={'center'}
    style={`
      background: pink;
      height: 300px;

      img { 
        display: block;
        width: 100%; 
      }
    `}
    // styleInner={`
    //   background: pink;

    //   img {
    //     display: block;
    //     width: 100%;
    //     width: 100% !important;
    //     height: auto !important;

    //   }
    // `}
  >
    <img src={image2} alt='Sample Image' />
  </Box>
)

const IndexPage = () => {
  const boxRef = useRef()
  const gridRef = useRef()
  useEffect(() => {
    console.log(boxRef.current)
    console.log(gridRef.current)
  }, [])
  return (
    <Grid
      tag='section'
      breakpoints={[0, 500, 768, 1024, 1200, 1400]}
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
      // styleOuter={`width: 80%;`}
      style={`
        background: blue;
        &.bp-768 {
          // background: black;
        }
      `}
      // cssMode='flex'
      ref={gridRef}
    >
      <Box
        ref={boxRef}
        className='Box--1'
        cols={[4]}
        left={[2]}
        right={[1]}
        alignY='center'
        style={`
        background: yellow;
        height: 400px;
        
        .bp-768 & {
          background: black;
        }
      `}
      >
        <ImageBox />
        <Box
          className='Box--3'
          cols={[1]}
          left={[1]}
          alignY='center'
          style={`
            background: green;
            height: 150px;
          `}
        />
      </Box>
      <Box
        ref={boxRef}
        className='Box--2'
        cols={[4]}
        left={[0]}
        style={`
          background: yellow;
          height: 200px;
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
