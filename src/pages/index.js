import React from 'react'
import { Grid, Box } from '../raster'
import '../scss/reset.scss'
import '../scss/index.scss'

import image1 from "../images/image-1.jpg"
import image2 from "../images/image-2.jpg"
import image3 from "../images/image-3.jpg"
import image4 from "../images/image-4.jpg"
import image5 from "../images/image-5.jpg"

import logo from "../images/react-raster-logo.svg"

export default () => (
  <Grid
    tag='section'
    colspan={12}
    breakpoints={[0, 500, 768, 1024, 1200, 1400]}
    left={'3vw'}
    right={'3vw'}
    top={'10vh'}
    bottom={'20vw'}
    gutterX={'1.5vw'}
    gutterY={'3vw'}
    alignY={'center'}
    alignX={'center'}
    control
    style={`
      // background: blue;
      // &.bp-768 {
      //   // background: black;
      // }
    `}
    attrs={{
    }}
  >
    <Box
      className='Logo'
      cols={[10, 8, 8]}
      tag='img'
      attrs={{
        src: logo,
        alt: "Logo"
      }}
    />
    <Box
      className='Logo'
      cols={[10, 8, 6]}
      tag='img'
      attrs={{
        src: logo,
        alt: "Logo"
      }}
    />
    <Box
      className='Logo'
      cols={[10, 8, 3]}
      tag='img'
      attrs={{
        src: logo,
        alt: "Logo"
      }}
    />

    {/* <Box
      className='header'
      tag='header'
    >
      <Box
        className='Logo'
        cols={[10, 8, 8, 6]}
        // left={[1, 2, 2, 3]}
        tag='img'
        attrs={{
          src: logo,
          alt: "Logo"
        }}
      />
      <Box
        className='Box--1'
        cols={[12, 10, 8, 6]}
        left={[0, 1, 2, 3]}
        style={`
          justify-content: center;
        `}
      >
        <h1><pre>react-raster</pre> is an advanced grid-system based on styled-components. <span role="img" aria-label="kissing cat">😽</span></h1>
      </Box>
    </Box>

    <Box
      className='Box--1'
      cols={[12, 10, 8, 6]}
      left={[0, 1, 2, 3]}
      style={`
        justify-content: center;
      `}
    >
      <p>Scale your Viewport to see the layout changing!</p>
      <p>Press <span>ESC</span> to see the column-grid</p>
    </Box> */}

  </Grid >
)