export const imports = {
  'src/pages/Box.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-box" */ 'src/pages/Box.mdx'
    ),
  'src/pages/Grid.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-grid" */ 'src/pages/Grid.mdx'
    ),
  'src/pages/index.mdx': () =>
    import(
      /* webpackPrefetch: true, webpackChunkName: "src-pages-index" */ 'src/pages/index.mdx'
    ),
}
