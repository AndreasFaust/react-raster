module.exports = {
  siteMetadata: {
    title: 'react-raster',
    siteUrl: 'https://andreasfaust.github.io/react-raster/',
    description: 'react-raster is an advanced grid-system based on styled-components.'
  },
  pathPrefix: '/react-raster',
  plugins: [
    'gatsby-theme-docz',
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
