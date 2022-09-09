require('dotenv').config()

module.exports = {
  siteMetadata: {
    title: `Ball Ranch Flood Mar`,
    siteUrl: `https://www.yourdomain.tld`,
    author: {
      name: `FlowWest`,
      content: `Solving the greatest water and natural resources challenges`,
    },
    social: {
      github: `https://github.com/FlowWest`,
    },
  },
  plugins: [
    // Typescript Plugin
    'gatsby-plugin-typescript',
    // MUI Plugins
    {
      resolve: 'gatsby-plugin-material-ui',
      // If you want to use styled components you should change the injection order.
      options: {
        // stylesProvider: {
        //   injectFirst: true,
        // },
      },
    },
    {
      resolve: `gatsby-plugin-styled-components`,
      options: {
        // Add any options here
      },
    },
    // Custom Gatsby Layout Plugin
    {
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/index.tsx`),
      },
    },
    // Image Plugins
    {
      resolve: `gatsby-source-filesystem`,
      options: { name: `images`, path: `${__dirname}/src/images` },
    },
    {
      resolve: `gatsby-plugin-google-fonts`,
      options: {
        fonts: [`Oswald\:300,600,700`, `Lato\:300,x400,500,600,700,900`],
        display: 'swap',
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
  ],
}
