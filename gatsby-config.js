module.exports = {
  siteMetadata: {
    title: `Alejandro Roman's Blog`,
    description: `This is my personal blog`,
    author: `@gatsbyjs`,
  },
  plugins: [
    {
      resolve: `gatsby-mdx`,
      options: {
        // Apply gatsby-mdx to both .mdx and .md files
        extensions: [".mdx", ".md"],
        defaultLayout: require.resolve(
          "./src/components/BlogPostLayout/BlogPostLayout.js"
        ),
        mdPlugins: [
          require("remark-images"),
          require("remark-emoji"),
          require("remark-slug"),
          require("remark-autolink-headings"),
        ],
      },
    },
    `gatsby-plugin-react-helmet`,
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`,
      },
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `blog`,
        path: `${__dirname}/src/pages/blog`,
      },
    },
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
