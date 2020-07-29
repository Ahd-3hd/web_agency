module.exports = {
  siteMetadata: {
    title: `Zaat.dev`,
    description: `Zaat.dev For developing digital soultion, developing webapps, tasks autmation, SEO fast website, creating state of the art (AI) smart soultion and more `,
    author: `@zaatdev`,
  },
  plugins: [
    {
  resolve: `gatsby-plugin-google-gtag`,
    options: {
        // You can add multiple tracking ids and a pageview event will be fired for all of them.
      trackingIds: [
          "UA-173974064-1", // Google Analytics / GA
      ]
    }
  },
    `gatsby-plugin-styled-components`,
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Zaat.dev`,
        short_name: `Zaat`,
        start_url: `/`,
        background_color: `#4FCC5D`,
        theme_color: `#4FCC5D`,
        display: `standalone`,
        icon: `src/images/zaat_logo_square.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
