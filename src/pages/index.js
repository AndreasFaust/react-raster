import React from 'react'
import { Grid, Box } from '../raster'
import '../scss/reset.scss'
import '../scss/index.scss'

import headerImage from "../images/header-bg.jpg"
import esc from "../images/esc.svg"
import scale from "../images/scale.svg"
import GitHub from "../components/github-logo"
import Select from 'react-select'

// import image2 from "../images/image-2.jpg"
// import image3 from "../images/image-3.jpg"
// import image4 from "../images/image-4.jpg"
// import image5 from "../images/image-5.jpg"

import logo from "../images/react-raster-logo.svg"

const gridProps = {
  colspan: 12,
  breakpoints: [0, 500, 768, 1024, 1200, 1400],
  left: '3vw',
  right: '3vw',
  gutterX: '1.5vw',
  gutterY: '3vw',
  control: true
}


export default () => {
  const [mode, setMode] = React.useState('grid')
  function onSelect({ value }) {
    setMode(value)
  }
  return (
    <>
      <nav className="topnav">
        <GitHub />
        <Select
          className="modeSelect"
          placeholder='CSS Grid Layout'
          options={[
            { label: 'CSS Grid Layout', value: 'grid', },
            { label: 'Flexbox', value: 'flex', },
          ]}
          onChange={onSelect}
        />
      </nav>
      <Grid
        tag='header'
        {...gridProps}
        alignY={'center'}
        alignX={'center'}
        cssMode={mode}
        key={mode + 'header'}
        style={`
        background-image: url(${headerImage});
        background-size: cover;
        background-position: center bottom;
        background-repeat: no-repeat;
        height: 66.666vh;
      `}
      >
        <Box
          className='logo'
          cols={[8, 6, 4, 4, 3, 2]}
          tag='img'
          attrs={{
            src: logo,
            alt: "Logo"
          }}
        />
      </Grid >
      <Grid
        tag='section'
        {...gridProps}
        alignX={'center'}
        alignY={'center'}
        cssMode={mode}
        key={mode + 'section-1'}
        bottom='5vh'
        style={`
          min-height: 33.333vh;
        `}
      >
        <Box
          tag='h1'
          cols={[12, 8, 7, 6]}
          style={`
            justify-content: center;
          `}
        >
          <pre>react-raster</pre> is an advanced grid-system based on styled-components.
          <br /><span role="img" aria-label="kissing cat">😽</span>
        </Box>
        <Box
          className='hints'
          cols={[12]}
          top={0.5}
          alignX='center'
        >
          <Box
            className='hint'
            cols={[12, 12, 5, 4]}
            left={[0, 0, 0, 1]}
            alignX={['center', 'center', 'right']}
          >
            <img className="hintIcon" src={scale} alt="Scale icon" />
            <small>Scale your Viewport to see the layout changing!</small>
          </Box>
          <Box
            className='hint'
            cols={[12, 12, 5, 4]}
            alignX={['center', 'center', 'left']}
          >
            <img className="hintIcon" src={esc} alt="Escape icon" />
            <small>Press <pre>ESC</pre> to see the column-grid</small>
          </Box>
        </Box>
      </Grid>

    </>
  )
}