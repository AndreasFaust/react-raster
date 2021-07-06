![react-raster Logo](https://raw.github.com/andreasfaust/react-raster/master/assets/react-raster-logo.png?sanitize=true)

**react-raster** is an advanced grid- and layout-system based on **styled-components**. It is highly customizable while being easy to use. Regardless, if your grid is simple or complex: react-raster simplifies layouting. 😽

[![NPM](https://img.shields.io/npm/v/react-raster.svg)](https://www.npmjs.com/package/react-raster) [![code style: prettier](https://img.shields.io/badge/code_style-prettier-ff69b4.svg?style=flat-square)](https://github.com/prettier/prettier)

- Custom Breakpoints and Colspan
- Free nesting of Boxes while preserving the grid
- Custom styles for every element at every breakpoint
- Extending functionality of CSS-Grid-Layout
- Lightweight and performant architecture
- Visual control via ESC-key
- Written in TypeScript
- Ready for server-side-rendering

## ✍️ [See the Documentation!](https://andreasfaust.github.io/react-raster-docs)

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

## Basic Usage

- `react-raster` has only one component called **Box**.
- Define `brekpoints` and a `colspan` to start a new Grid and nest `Box`-Elements inside each other — they will preserve the Grid automatically.
- Further style your `Box`-Elements directly via `props`. The API is close to CSS, only CamelCase.

```jsx
<Box
  breakpoints={[0, 400, 800, 1200]}
  colspan={6}
  paddingLeft={"2vw"}
  paddingRight={"2vw"}
  paddingTop={"2vw"}
  paddingBottom={"2vw"}
  gridRowGap={"2vw"}
  gridColumnGap={"2vw"}
  control
>
  <Box as="h1" cols={[6, 6, 3]} height={["25vh", "200px"]}>
    Hello World!
  </Box>
  <Box cols={[6, 6, 3]} background="blue" height="50vh">
    <Box
      as="h2"
      cols={[4, 4, 2]}
      marginLeft={[2, 2, 1]}
      color="white"
      alignContent="center"
      justifyContent="center"
    >
      Stop
    </Box>
    <Box
      cols={[4, 4, 2]}
      paddingLeft={[2, 2, 1]}
      color="white"
      alignContent="center"
      justifyContent="center"
    >
      Wars!
    </Box>
  </Box>
</Box>
```

---

## Contributing

Every contribution is very much appreciated.

**If you like `react-raster`, don't hesitate to star it on [GitHub](https://github.com/AndreasFaust/react-raster).**

---

## License

Licensed under the MIT License, Copyright © 2019-present Andreas Faust.

See [LICENSE](LICENSE.md) for more information.
