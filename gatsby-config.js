module.exports = {
  siteMetadata: {
    title: `Your Curator`,
    description: `Prismic and Snipcart demo store example.`,
    author: `@jasonwoa`,
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-prismic`,
      options: {
        repositoryName: `yourcurator`,
        accessToken: `MC5YNjMxZFJNQUFDSUFEaU5P.fO-_ve-_ve-_ve-_ve-_ve-_ve-_ve-_ve-_vVbvv73vv73vv73vv73vv71r77-977-977-977-977-9Pe-_vXPvv73vv71w77-9NO-_vXc`,
        schemas: {
          homepage: require("./src/schemas/homepage.json"),
          pages: require("./src/schemas/pages.json"),
          products: require("./src/schemas/products.json"),
          categories: require("./src/schemas/categories.json"),
          header_promotion: require("./src/schemas/header_promotion.json"),
        },
        shouldDownloadImage: ({ node, key, value }) => {
          return true
        },
      },
    },
    {
      resolve: `gatsby-plugin-snipcart-advanced`,
      options: {
        version: "3.0.19",
        publicApiKey:
          "OTY5YTk3NGMtNTE0Yy00YWQ0LWE1MDAtZTY0YzMwZjM0MTMzNjM3Mzk4NTkyNDIwMTYxMDQ3",
        defaultLang: "en",
        currency: "usd",
        openCartOnAdd: true,
      },
    },
    `gatsby-plugin-styled-components`,
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/gatsby-icon.png`, // This path is relative to the root of the site.
      },
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
  ],
}
