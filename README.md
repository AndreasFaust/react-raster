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

### Group Boxes inside custom components

react-raster automatically detects, if a Grid or Box contains other Boxes. This is important to keep the grid adjusted. If you want to combine certain Boxes or groupings of Boxes into a custom component, you have to tell react-raster, that this component contains Boxes. This is done by setting **hasChildBoxes** on the parent Grid/Box:

```jsx
  const MyChildBoxes = () => (
    <>
      <Box cols={3}>
        Hello!
      <Box>
      <Box cols={3}>
        World!
      <Box>
    </>
  )

  const MySpecialBox = () => (
    <Box
      top={3}
      hasChildBoxes
    >
      <MyChildBoxes />
    <Box>
  )

  const Component = () => (
    <Grid
      colspan={6}
      hasChildBoxes
    >
      <MySpecialBox />
    </Grid>
  )
```

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
            hasChildBoxes
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

## Grid

List of all props of the Grid-Component:

```jsx
<Grid
    breakpoints
    // Array of integers. Should start with zero and be in ascending order.
    // Default: [0, 500, 800, 1025, 1200, 1400]
    // Unit: Pixels
    colspan
    // Integer. Number of columns.
    // Default: 1
    left
    // String or Array. Left padding of the Grid.
    // Default: '0'
    right
    // String or Array. Right padding of the Grid.
    // Unit: any CSS unit
    // Default: '0'
    top
    // String or Array. Top padding of the Grid.
    // Unit: any CSS unit
    // Default: '0'
    bottom
    // String or Array. Bottom padding of the Grid.
    // Unit: any CSS unit
    // Default: '0'
    gutterX
    // String or Array. Horizontal Gutter.
    // Unit: any CSS unit
    // Default: '0'
    gutterY
    // String or Array. Vertical Gutter.
    // Unit: any CSS unit
    // Default: '0'
    alignX
    // String or Array. Horizontal Align of child elements.
    // Values: Anything that works with "justify-content".
    //         Shortcuts 'left' for 'flex-start' and 'right' for 'flex-end'.
    // Default: ''
    alignY
    // String or Array. Vertical Align of child elements.
    // Values: Anything that works with "align-items".
    //         Shortcuts 'top' for 'flex-start' and 'bottom' for 'flex-end'.
    // Default: ''
    control
    // Bool. Enable visual control via ESC-Key.
    // Default: false
    controlColor
    // String. Customize color of the grid-control.
    // Default: 'rgba(0, 100, 255, 0.1)'
    className
    // String. Custom class for the Grid-Outer-Container-Tag.
    // Default: ''
    tag
    // String. Define HTML-Tag of the Grid-Outer-Container-Tag.
    // Default: 'div'
    styleOuter
    // String or Array. Define styles of the Grid-Outer-Container-Tag.
    // Default: ''
    styleInner
    // String or Array. Define styles of the Grid-Inner-Container-Tag.
    // Default: ''
    hasChildBoxes
    // Boolean. Tell react-raster that you have child-Boxes inside this Grid- or Box-Component.
    // See the topic "Group Boxes inside custom components" for more information. If the Boxes are nested inside other components react-raster does not know, that you are sitll using its grid.
    // Default: undefined
/>
```

## Box

List of all props of the Box-Component:

```jsx
<Box
    cols
    // Integer or Array. Width of the Box.
    // Default: Width of parent Box or Grid
    // Unit: Grid columns defined with the prop "colspan"
    left
    // String or Array. Left margin of the Box.
    // Default: '0'
    right
    // String or Array. Right margin of the Box.
    // Unit: any CSS unit
    // Default: '0'
    top
    // String or Array. Top margin of the Box.
    // Unit: any CSS unit
    // Default: '0'
    bottom
    // String or Array. Bottom margin of the Box.
    // Unit: any CSS unit
    // Default: '0'
    alignX
    // String or Array. Horizontal Align of child elements.
    // Values: Anything that works with "justify-content".
    //         Shortcuts 'left' for 'flex-start' and 'right' for 'flex-end'.
    // Default: ''
    alignY
    // String or Array. Vertical Align of child elements.
    // Values: Anything that works with "align-items".
    //         Shortcuts 'top' for 'flex-start' and 'bottom' for 'flex-end'.
    // Default: ''
    className
    // String. Custom class for the Box-Outer-Container-Tag.
    // Default: ''
    tag
    // String. Define HTML-Tag of the Box-Outer-Container-Tag.
    // Default: 'div'
    styleOuter
    // String or Array. Define styles of the Box-Outer-Container-Tag.
    // Default: ''
    styleInner
    // String or Array. Define styles of the Box-Inner-Container-Tag.
    // Default: ''
    hasChildBoxes
    // Boolean. Tell react-raster that you have child-Boxes inside this Grid- or Box-Component.
    // See the topic "Group Boxes inside custom components" for more information. If the Boxes are nested inside other components react-raster does not know, that you are sitll using its grid.
    // Default: undefined
/>
```

## To-Do

-   [ ] Nice documentation with live examples (using Docz)
-   [ ] Stricter type-checking / props validation
-   [ ] automated testing

## Contributing

Every contribution is very much appreciated.

**If you like react-raster, don't hesitate to star it on [GitHub](https://github.com/AndreasFaust/react-raster).**

## License

MIT © [AndreasFaust](https://github.com/AndreasFaust)

## Thanks

This Library is created using [create-react-hook](https://github.com/hermanya/create-react-hook), which is based on [create-react-library](https://github.com/transitive-bullshit/create-react-library).
