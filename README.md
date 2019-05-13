![react-raster Logo](https://raw.github.com/andreasfaust/react-raster/master/assets/react-raster-logo.svg?sanitize=true)

**react-raster** is an advanced grid-system based on **styled-components**. It is highly customizable while being easy to use. Regardless, if your grid is simple or complex: react-raster simplifies layouting. 😽

[![NPM](https://img.shields.io/npm/v/react-raster.svg)](https://www.npmjs.com/package/react-raster) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

-   Custom Breakpoints and Colspan
-   Free nesting of Boxes and Grids
-   Custom styles for every element at every breakpoint
-   Lightweight and performant architecture
-   Visual control via ESC-key
-   Ready for server-side-rendering
-   Uses CSS-grid-layout in newer and flexbox in legacy browsers.

✍️ [See the Documentation!](https://andreasfaust.github.io/react-raster)

## Install

Install all dependencies via Yarn or NPM.

```bash
yarn add react-raster styled-components react react-dom
```

## Usage

react-raster has only two components: Grid and Box.
**Grid** is the wrapper, that defines the grid’s basics like gutter, breakpoints and other things.
**Box** is the element, that gets positioned inside the Grid. Boxes and Grids can be freely nested inside each other.

```jsx
<Grid
    breakpoints={[0, 400, 800, 1200]}
    colspan={6}
    left={"2vw"}
    right={"2vw"}
    top={"2vw"}
    bottom={"2vw"}
    gutterX={"2vw"}
    gutterY={"2vw"}
    control
>
    <Box cols={[6, 6, 3]}>
        <h1>Hello World!</h1>
    </Box>
    <Box cols={[6, 6, 3]}>
        <Box cols={[4, 4, 2]} left={[2, 2, 1]}>
            <h2>Stop wars!</h2>
        </Box>
    </Box>
</Grid>
```

### Defining Breakpoints

Breakpoints is an array of numbers starting with `0`.
Every number defines a `min-width`.

### Props matching Breakpoints

Often you want to bind props to certain breakpoints.
You can achieve this by defining an **array** instead of a single string or number for your prop.
An array-element’s index matches the index of the breakpoint.
If the prop-array is shorter than the breakpoints-array, the last value is adapted for all larger breakpoints.

This simple example defines a grid with a left padding:

![Graphic to illustrate how the elements of an props-array match breakpoints.](https://github.com/andreasfaust/react-raster/raw/master/assets/graphic-breakpoints.png)

-   0px — 499px: 3vw
-   500px — 999px: 2vw
-   1000px — infinite: 1vw

**Almost all props support this feature.**
Look up the props-specification for `Grid` and `Box` below.

### Avoid mixing Boxes with other components

Avoid mixing Boxes with other components inside Grids or Boxes.
Either a Box/Grid contains Boxes or regular elements/components.

## Advanced Example

The following code gives you a more detailed example of what you can do with react-raster:

```jsx
import React from "react";
import { Grid, Box } from "react-raster";

const MyCustomChildBox = ({ children }) => (
    <Box
        className="Testgrid__ChildBox"
        cols={6}
        top={[2, 1]}
        alignX={"center"}
        alignY={"center"}
    >
        {children}
    </Box>
);

const Example = () => (
    <Grid
        className="Testgrid"
        tag="section"
        breakpoints={[0, 500, 800, 1025, 1200, 1400]}
        colspan={12}
        left={["3vw", "3vw", "3vw", "2vw"]}
        right={["3vw", "3vw", "3vw", "2vw"]}
        top={"10vw"}
        bottom={"20vw"}
        gutterX={["1.5vw", "1.5vw", "2vw"]}
        gutterY={"3vw"}
        control={process.env.NODE_ENV !== "production"}
        controlColor="rgba(0, 100, 255, 0.1)"
        styleOuter={`
          width: 80%;
        `}
        styleInner={[
            `background: red;`,
            `background: red;`,
            `background: blue;`
        ]}
    >
        <Box
            className="Testgrid__Box"
            tag="article"
            cols={[12, 12, 6]}
            top={1}
            left={[0, 0, 3]}
            styleInner={`
              background: pink;

              ::after {
                content: 'Hallo!';
                position: absolute;
                left: 50%;
                top: 50%;
              }
            `}
        >
            <MyCustomChildBox>
                <h2>Hello</h2>
            </MyCustomChildBox>

            <MyCustomChildBox>
                <h2>World</h2>
            </MyCustomChildBox>
        </Box>
    </Grid>
);
```

## To-Do

-   [ ] Stricter type-checking / props validation
-   [ ] automated testing

## Contributing

Every contribution is very much appreciated.

**If you like react-raster, don't hesitate to star it on [GitHub](https://github.com/AndreasFaust/react-raster).**

## License

MIT © [AndreasFaust](https://github.com/AndreasFaust)
