![react-raster Logo](https://raw.github.com/andreasfaust/react-raster/master/assets/react-raster-logo.svg?sanitize=true)

**react-raster** is an advanced grid-system based on **styled-components**. It is highly customizable while being easy to use. Regardless, if your grid is simple or complex: react-raster simplifies layouting. 😽

[![NPM](https://img.shields.io/npm/v/react-raster.svg)](https://www.npmjs.com/package/react-raster) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

- Custom Breakpoints and Colspan
- Free nesting of Boxes and Grids
- Custom styles for every element at every breakpoint
- Works in all browsers
- Lightweight and performant architecture
- Visual control via ESC-key
- Completely re-written in TypeScript
- Ready for server-side-rendering

✍️ [See the Example!](https://andreasfaust.github.io/react-raster)

---

## Concept

Layouting user-interfaces is tough. Every viewport-size needs its own layout.
`react-raster` provides a simplified interface for `CSS Grid Layout`, to setup the layout for every breakpoint directly in your `React`-component.
It emulates `flexbox`-like behaviour, that is missing in `CSS Grid Layout` like:

- Automatic aligning of sibling boxes
- Add margin to boxes

Additionally it polyfills `Grid Layout` with `Flexbox`, if you need to support very old browsers for some reason.
With `react-raster` defining a grid and placing and stacking some boxes is as easy as never before.

> Try it out and **star it** if you like it!

## Install

Install all dependencies via `yarn` or `npm`.

```bash
yarn add react-raster styled-components react react-dom
```

---

## Usage

- react-raster has only two components: Grid and Box.
- **Grid** is the wrapper, that defines the grid’s basics like gutter, breakpoints and other things.
- **Box** is the element, that gets positioned inside the Grid.
- Boxes and Grids can be freely nested inside each other.

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

- 0px — 499px: 3vw
- 500px — 999px: 2vw
- 1000px — infinite: 1vw

**Almost all props support this feature.**
Look up the props-specification for `Grid` and `Box` below.

### Avoid mixing Boxes with other components

Avoid mixing Boxes with other components inside Grids or Boxes.
Either a Box/Grid contains Boxes or regular elements/components.

---

## What about cssMode `grid` and `flex`?

`cssMode` is the prop, that defines which CSS-layout-engine `react-raster` should use.
`grid` uses Grid-Layout, `flex` the older Flexbox. `grid` is default, but if the user’s browser does not support it, it automatically falls back to `flex`.

---

## Use `Styled-Components` with `NextJS`

`NextJS` is great. To use it alongside `styled-components` you need to:

### Install `babel-plugin-styled-components`

```bash
yarn add -D babel-plugin-styled-components
```

### Create `.babelrc` file in your `root`-directory

```json
{
  "presets": ["next/babel"],
  "plugins": [["styled-components", { "ssr": true }]]
}
```

### Add `_document.jsx` to your `pages`-directory

```jsx
import Document from "next/document";
import { ServerStyleSheet } from "styled-components";

export default class MyDocument extends Document {
  static async getInitialProps(ctx) {
    const sheet = new ServerStyleSheet();
    const originalRenderPage = ctx.renderPage;

    try {
      ctx.renderPage = () =>
        originalRenderPage({
          enhanceApp: (App) => (props) =>
            sheet.collectStyles(<App {...props} />),
        });

      const initialProps = await Document.getInitialProps(ctx);
      return {
        ...initialProps,
        styles: (
          <>
            {initialProps.styles}
            {sheet.getStyleElement()}
          </>
        ),
      };
    } finally {
      sheet.seal();
    }
  }
}
```

---

## Combine Box with the `Link`-component of NextJS

The best way to combine links in `NextJS` with `react-raster` is to set the `passHref`-prop on your `Link`-Component. This will automatically infuse a `href`- and `onClick`-prop to its wrapped `Box`, which also needs to have set `tag="a"`, to be an `anchor`-tag. So there is no need for an extra anchor-tag, which might complicate your data-structure!

```jsx
import React from "react";
import { Grid, Box } from "react-raster";
import Link from "next/link";

const BoxLink = (props) => (
  <Link href={props.href} passHref>
    <Box tag="a" {...props}>
      {props.children}
    </Box>
  </Link>
);

const ExampleTeaser = () => (
  <BoxLink href="/article" cols={[6, 6, 3]}>
    <img src="/image" alt="Image" />
    <h2>I am a Teaser!</h2>
    <p>Click me, to read an interesting article.</p>
  </BoxLink>
);
```

---

## Advanced Example

The following code gives you a more detailed example of what you can do with react-raster:

```jsx
import React from "react";
import { Grid, Box } from "react-raster";

const MyCustomChildBox = ({ children }) => (
  <Box className="Testgrid__ChildBox" cols={6} top={[2, 1]} alignY={"center"}>
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
            &&.bp-0, 
            &&.bp-432, 
            &&.bp-768 {
                background: red;
            }
            &&.bp-1024, 
            &&.bp-1200, 
            &&.bp-1400 {
                background: blue;
            }
        `}
    // the "bp-"-classes have also an index-based indication
    style={`
            &&.bp-1, 
            &&.bp-2, 
            &&.bp-3 {
                background: red;
            }
            &&.bp-4, 
            &&.bp-5, 
            &&.bp-6 {
                background: blue;
            }
        `}
    // … or use an array of strings, to address certain breakpoints
    style={[
      `background: red;`,
      `background: red;`,
      `background: red;`,
      `background: blue;`, // from width 1024 on, the background is blue
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

              .bp-1024 &&, .bp-1200 &&, .bp-1400 && {
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
          src: "https://my-image-source.io",
          alt: "A box can be an image, too!",
        }}
      />
    </Box>
  </Grid>
);
```

---

## Grid

| **Name**         | **Type**                   | **Default**                       | **Description**                                                                      |
| :--------------- | :------------------------- | :-------------------------------- | :----------------------------------------------------------------------------------- |
| **breakpoints**  | Array                      | `[0, 432, 768, 1024, 1200, 1400]` | Breakpoints in Pixels, in ascending order starting with zero.                        |
| **colspan**      | Number                     | `1`                               | Number of columns.                                                                   |
| **left**         | String or Array of Strings | `'0'`                             | Left padding of the Grid.                                                            |
| **right**        | String or Array of Strings | `'0'`                             | Right padding of the Grid.                                                           |
| **top**          | String or Array of Strings | `'0'`                             | Top padding of the Grid.                                                             |
| **bottom**       | String or Array of Strings | `'0'`                             | Bottom padding of the Grid.                                                          |
| **gutterX**      | String or Array of Strings | `'0px'`                           | Horizontal gutter.                                                                   |
| **gutterY**      | String or Array of Strings | `'0px'`                           | Verical gutter.                                                                      |
| **alignX**       | String or Array of Strings | `''`                              | Horizontal align of child elements. Possible values: `left`, `center`, `right`       |
| **alignY**       | String or Array of Strings | `''`                              | Vertical align of child elements.                                                    |
| **control**      | Boolean                    | `false`                           | Enable visual control via ESC-Key.                                                   |
| **controlColor** | Boolean                    | `'rgba(0, 0, 0, 0.1)'`            | Custom color for the grid-control.                                                   |
| **position**     | String or Array of Strings | `'relative'`                      | CSS-position                                                                         |
| **className**    | String                     | `''`                              | CSS-Class(es)                                                                        |
| **style**        | String or Array of Strings | `''`                              | Custom styles with styled-components.                                                |
| **cssMode**      | String                     | `undefined`                       | Use CSS Grid Layout or Flexbox. Override automatic detection of Grid-Layout-support. |
| **tag**          | String                     | `'div'`                           | HTML-Tag                                                                             |
| **attrs**        | Object                     | `{}`                              | Attributes of the HTML-Tag                                                           |
| **ref**          | React ref-object           | `null`                            | Pass a ref.                                                                          |

---

## Box

| **Name**          | **Type**                   | **Default** | **Description**                                                                                                                                       |
| :---------------- | :------------------------- | :---------- | :---------------------------------------------------------------------------------------------------------------------------------------------------- |
| **cols**          | Number or Array of Numbers | `undefined` | Width of the Box. Falls back to width of parent Box or Grid. Unit: Grid-columns defined with the prop "colspan". The value `0` sets `display: none;`. |
| **left**          | Number or Array of Numbers | `0`         | Left margin of the Box. Unit: Grid-columns.                                                                                                           |
| **right**         | Number or Array of Numbers | `0`         | Right margin of the Box. Unit: Grid-columns.                                                                                                          |
| **top**           | Number or Array of Numbers | `0`         | Top margin of the Box. Unit: Grid-columns.                                                                                                            |
| **bottom**        | Number or Array of Numbers | `0`         | Bottom margin of the Box. Unit: Grid-columns.                                                                                                         |
| **alignX**        | String or Array of Strings | `0`         | Horizontal Align of child elements. Possible values: `left`, `center`, `right`                                                                        |
| **alignY**        | String or Array of Strings | `0`         | Vertical Align of child elements.                                                                                                                     |
| **padding**       | String or Array of Strings | `null`      | Padding of the Box.                                                                                                                                   |
| **style**         | String or Array of Strings | `''`        | Custom styles with styled-components.                                                                                                                 |
| **hasChildBoxes** | Boolean                    | `undefined` | Tell react-raster that you have child-Boxes inside this Grid- or Box-Component.                                                                       |
| **tag**           | String                     | `'div'`     | HTML-Tag                                                                                                                                              |
| **attrs**         | Object                     | `{}`        | Attributes added to the HTML-Tag                                                                                                                      |
| **ref**           | React ref-object           | `null`      | Pass a ref.                                                                                                                                           |
| **href**          | String                     | `''`        | Pass a `href`. Added for the `Link`-component of `nextJS`.                                                                                            |
| **onClick**       | Function                   | `null`      | Pass a click handler.                                                                                                                                 |

---

## Contributing

Every contribution is very much appreciated.

**If you like `react-raster`, don't hesitate to star it on [GitHub](https://github.com/AndreasFaust/react-raster).**

---

## License

Licensed under the MIT License, Copyright © 2019-present Andreas Faust.

See [LICENSE](LICENSE) for more information.
