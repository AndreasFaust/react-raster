![react-raster Logo](https://raw.github.com/andreasfaust/react-raster/master/assets/react-raster-logo.svg?sanitize=true)

**react-raster** is an advanced grid-system based on **styled-components**. It is highly customizable while being easy to use. Regardless, if your grid is simple or complex: react-raster simplifies layouting. 😽

[![NPM](https://img.shields.io/npm/v/react-raster.svg)](https://www.npmjs.com/package/react-raster) [![JavaScript Style Guide](https://img.shields.io/badge/code_style-standard-brightgreen.svg)](https://standardjs.com)

-   Custom Breakpoints and Colspan
-   Free nesting of Boxes and Grids
-   Custom styles for every element at every breakpoint
-   Works in all browsers.
-   Lightweight and performant architecture
-   Visual control via ESC-key
-   Ready for server-side-rendering

✍️ [See the Example!](https://andreasfaust.github.io/react-raster)

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
            <h2>Stop</h2>
        </Box>
        <Box cols={[4, 4, 2]} left={[2, 2, 1]}>
            <h2>Wars!</h2>
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

## What about cssMode `grid` and `flex`?
`cssMode` is the prop, that defines which CSS-layout-engine `react-raster` should use. 
`grid` uses Grid-Layout, `flex` the older Flexbox. `grid` is default, but if the user’s browser does not support it, it automatically falls back to `flex`. 

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
        alignY={"center"}
    >
        {children}
    </Box>
);

const Example = () => (
    <Grid
        className="Testgrid"
        tag="section"
        breakpoints={[0, 432, 768, 1024, 1200, 1400]}
        colspan={12}
        left={["3vw", "3vw", "3vw", "2vw"]}
        right={["3vw", "3vw", "3vw", "2vw"]}
        top={"10vw"}
        bottom={"20vw"}
        gutterX={["1.5vw", "1.5vw", "2vw"]}
        gutterY={"3vw"}
        control={process.env.NODE_ENV !== "production"}
        controlColor="rgba(0, 100, 255, 0.1)"
        // use the "bp-"-classes to limit styles to certain breakpoints…
        style={`
            &.bp-0, 
            &.bp-432, 
            &.bp-768 {
                background: red;
            }
            &.bp-1024, 
            &.bp-1200, 
            &.bp-1400 {
                background: blue;
            }
        `}
        // the "bp-"-classes have also an index-based indication
        style={`
            &.bp-1, 
            &.bp-2, 
            &.bp-3 {
                background: red;
            }
            &.bp-4, 
            &.bp-5, 
            &.bp-6 {
                background: blue;
            }
        `}
        // … or use an array of strings, to address certain breakpoints
        style={[
            `background: red;`,
            `background: red;`,
            `background: red;`,
            `background: blue;` // from width 1024 on, the background is blue
        ]}
    >
        <Box
            className="Testgrid__Box"
            tag="article"
            cols={[12, 12, 6]}
            top={1}
            left={[0, 0, 3]}
            style={`
              background: pink;

              .bp-1024 &, .bp-1200 &, .bp-1400 & {
                background: red;
              }

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

            <Box
                className="Testgrid__Image"
                tag="img"
                cols={12}
                top={1}
                attr={{
                    src: 'https://my-image-source.io',
                    alt: 'A box can be an image, too!'
                }}
            >
        </Box>
    </Grid>
);
```

## Grid

| **Name**     | **Type** | **Default**                       | **Description**                                                                           |
| :----------- | :------- | :-------------------------------- | :---------------------------------------------------------------------------------------- |
| **breakpoints** | Array   | `[0, 432, 768, 1024, 1200, 1400]`                            | Breakpoints in Pixels, in ascending order starting with zero.                                                   |
| **colspan** | Number   | `1`                            | Number of columns.                                                   |
| **left** | String or Array of Strings   | `'0'`                            | Left padding of the Grid.                                                   |
| **right** | String or Array of Strings   | `'0'`                            | Right padding of the Grid.                                                   |
| **top** | String or Array of Strings   | `'0'`                            | Top padding of the Grid.                                                   |
| **bottom** | String or Array of Strings   | `'0'`                            | Bottom padding of the Grid.                                                   |
| **gutterX** | String or Array of Strings   | `'0'`                            | Horizontal gutter.                                                   |
| **gutterY** | String or Array of Strings   | `'0'`                            | Verical gutter.                                                   |
| **alignX** | String or Array of Strings   | `''`                            | Horizontal align of child elements. Possible values: `left`, `center`, `right`
| **alignY** | String or Array of Strings   | `''`                            | Vertical align of child elements.                                                   |
| **control** | Boolean   | `false`                            | Enable visual control via ESC-Key.                                                   |
| **controlColor** | Boolean   | `'rgba(0, 0, 0, 0.1)'`                            | Custom color for the grid-control.                                                   |
| **position** | String or Array of Strings   | `'relative'`                            | CSS-position                                                   |
| **className** | String   | `''`                            | CSS-Class(es)                                                   |
| **style** | String or Array of Strings   | `''`                            | Custom styles with styled-components.                                                   |
| **cssMode** | String | `undefined`                            | Use CSS Grid Layout or Flexbox. Override automatic detection of Grid-Layout-support.                                                 |
| **tag** | String | `'div'`                            | HTML-Tag                                                 |
| **attrs** | Object | `{}`                            | Attributes of the HTML-Tag                                                 |
| **ref** | React ref-object | `null`                            | Pass a ref.                                                 |

## Box

| **Name**     | **Type** | **Default**                       | **Description**                                                                           |
| :----------- | :------- | :-------------------------------- | :---------------------------------------------------------------------------------------- |
| **cols** | Number or Array of Numbers   | `undefined`                            | Width of the Box. Falls back to width of parent Box or Grid. Unit: Grid-columns defined with the prop "colspan". The value `0` sets `display: none;`.                                                  |
| **left** | Number or Array of Numbers   | `0`                            | Left margin of the Box. Unit: Grid-columns.                                                   |
| **right** | Number or Array of Numbers   | `0`                            | Right margin of the Box. Unit: Grid-columns.                                                   |
| **top** | Number or Array of Numbers   | `0`                            | Top margin of the Box. Unit: Grid-columns.                                                   |
| **bottom** | Number or Array of Numbers   | `0`                            | Bottom margin of the Box. Unit: Grid-columns.                                                   |
| **alignX** | String or Array of Strings   | `0`                            | Horizontal Align of child elements. Possible values: `left`, `center`, `right`                                                   |
| **alignY** | String or Array of Strings   | `0`                            | Vertical Align of child elements.                                                   |
| **style** | String or Array of Strings   | `''`                            | Custom styles with styled-components.                                                   |
| **hasChildBoxes** | Boolean   | `undefined`                            | Tell react-raster that you have child-Boxes inside this Grid- or Box-Component. |
| **tag** | String | `'div'`                            | HTML-Tag                                                 |
| **attrs** | Object | `{}`                            | Attributes of the HTML-Tag                                                 |
| **ref** | React ref-object | `null`                            | Pass a ref.                                                 |


## Contributing

Every contribution is very much appreciated.

**If you like react-raster, don't hesitate to star it on [GitHub](https://github.com/AndreasFaust/react-raster).**

## License

MIT © [AndreasFaust](https://github.com/AndreasFaust)
