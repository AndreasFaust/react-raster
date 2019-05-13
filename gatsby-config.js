module.exports = {
  siteMetadata: {
    title: `react-raster`,
    siteUrl: `https://andreasfaust.github.io/react-raster/`,
    description: `react-raster is an advanced grid-system based on styled-components.`
  },
  pathPrefix: `/react-raster`,
  __experimentalThemes: ['gatsby-theme-docz'],
  plugins: [
    // 'gatsby-plugin-layout',
    {
      resolve: 'gatsby-plugin-sass',
      options: {
        includePaths: [
          'src/components',
          'src/layout',
          'src/transitions'
        ]
      }
    }
  ]
}
