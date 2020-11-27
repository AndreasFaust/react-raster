module.exports = {
  siteMetadata: {
    title: "react-raster",
    siteUrl: "https://andreasfaust.github.io/react-raster/",
    description:
      "react-raster is an advanced grid-system based on styled-components.",
  },
  pathPrefix: "/react-raster",
  plugins: [
    {
      resolve: "gatsby-plugin-sass",
      options: {
        implementation: require("sass"),
        includePaths: ["src/components", "src/layout", "src/pages", "src/scss"],
      },
    },
  ],
};
