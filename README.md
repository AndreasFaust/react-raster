# React Raster 😽

[![NPM](https://img.shields.io/npm/v/react-raster.svg)](https://www.npmjs.com/package/react-raster) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

**React Raster** is an advanced grid-system based on **Styled Components**. It is highly customizable while being very easy to use. It has no further dependencies and does not force you into a Ui-Framework, you don't want to use.
React Raster uses React Hooks and Context API.

**React Raster provides:**

- Custom Breakpoints
- Custom colspan
- Free nesting of Boxes and Grids
- Custom styles for every element at every breakpoint
- Lightweight and performant architecture
- Visual control via ESC-key
- Ready for server-side-rendering

**React Raster is under development.**
**A detailed documentation with examples is about to follow.**

## Install

Install all dependencies via Yarn or NPM.

```bash
yarn add react-raster styled-components react react-dom
```

## Example

```jsx
import React from "react";
import { Grid, Box } from "react-raster";

const Example = () => {
  return (
    <Grid
      className="Testgrid"
      tag="section"
      breakpoints={[0, 500, 800, 1025, 1200, 1400]}
      colspan={12}
      left={["3vw", "3vw", "3vw", "2vw"]}
      right={["3vw", "3vw", "3vw", "2vw"]}
      top={"10vw"}
      bottom={"20vw"}
      gutterX={"1.5vw"}
      gutterY={"3vw"}
      control
    >
      <Box
        className="Testgrid__Box"
        cols={[12, 12, 6]}
        top={1}
        left={[0, 0, 3]}
      >
        <Box
          className="Testgrid__ChildBox"
          cols={[6]}
          alignX={"center"}
          alignY={"center"}
        >
          Hello!
        </Box>
        <Box
          className="Testgrid__ChildBox"
          cols={[6]}
          alignX={"center"}
          alignY={"center"}
        >
          World!
        </Box>
      </Box>
    </Grid>
  );
};
```

## Contributing

Every contribution is very much appreciated!

**If this plugin is helpful for you, please star it on [GitHub](https://github.com/AndreasFaust/react-raster).**

## License

MIT © [AndreasFaust](https://github.com/AndreasFaust)

## Thanks

This Library is created using [create-react-hook](https://github.com/hermanya/create-react-hook), which is based on [create-react-library](https://github.com/transitive-bullshit/create-react-library).
