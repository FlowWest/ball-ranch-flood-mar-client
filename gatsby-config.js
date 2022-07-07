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
    `gatsby-plugin-typescript`,
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
      resolve: `gatsby-plugin-layout`,
      options: {
        component: require.resolve(`./src/components/layout/index.tsx`),
      },
    },
  ],
}
