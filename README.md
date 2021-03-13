![react-raster Logo](https://raw.github.com/andreasfaust/react-raster/master/assets/react-raster-logo.png?sanitize=true)

**react-raster** is an advanced grid-system based on **styled-components**. It is highly customizable while being easy to use. Regardless, if your grid is simple or complex: react-raster simplifies layouting. 😽

[![NPM](https://img.shields.io/npm/v/react-raster.svg)](https://www.npmjs.com/package/react-raster) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

- Custom Breakpoints and Colspan
- Free nesting of Boxes and Grids
- Custom styles for every element at every breakpoint
- Extending functionality of CSS-Grid-Layout
- Lightweight and performant architecture
- Visual control via ESC-key
- Written in TypeScript
- Ready for server-side-rendering
- Fallback for legacy browsers, which do not support CSS-Grid-Layout

✍️ [See the Documentation!](https://andreasfaust.github.io/react-raster-docs)

**⭐ Try it out and _star it_ if you like it!**

---

## PeerDependencies

- react: >= 16.8.0,
- react-dom: >= 16.8.0,
- styled-components: >= 5.2.0

---

## Install

Install all dependencies via `yarn` or `npm`.

```bash
yarn add react-raster styled-components react react-dom
```

---

## Usage

- `react-raster` has only two components: **Grid** and **Box**.
- `Grid` is the wrapper, that defines the grid’s basics like gutter, breakpoints and other things.
- `Box` is the element, that gets positioned inside the Grid.
- Boxes and Grids can be **freely nested inside each other**.

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

---

## Contributing

Every contribution is very much appreciated.

**If you like `react-raster`, don't hesitate to star it on [GitHub](https://github.com/AndreasFaust/react-raster).**

---

## License

Licensed under the MIT License, Copyright © 2019-present Andreas Faust.

See [LICENSE](LICENSE.md) for more information.
