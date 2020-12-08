const config = require('./config/site');

module.exports = {
  siteMetadata: {
    title: `Queer Conscious`,
    description: `Coming Out Coach`,
    author: `@salemaziel`,
    siteUrl: `https://queerconscious.com/`
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
      resolve: 'gatsby-plugin-robots-txt',
      options: {
        host: 'https://queerconscious.com',
        sitemap: 'https://queerconscious.com/sitemap.xml',
      }
    },
    {
      resolve: `gatsby-plugin-sass`,
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-styled-components`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `Queer Conscious`,
        short_name: `Queer Concious`,
        start_url: `/`,
        background_color: `#ccaea1`,
        theme_color: `#9e7870`,
        display: `minimal-ui`,
        icon: `src/images/logo-image.png`, // This path is relative to the root of the site.
      },
    },
//    { 
//      resolve: `gatsby-plugin-purgecss`,
//      options: {
//        printRejected: true, // Print removed selectors and processed file names
//        develop: true, // Enable while using `gatsby develop`
//        // tailwind: true, // Enable tailwindcss support
//        whitelist: ['body.is-preload *',' body.is-preload *:before',' body.is-preload *:after','NoDesktop'], // Don't remove this selector
//         whitelistPatterns: [/btn/, /container/, /row/, /col/, /card/, /body/, /form/, /input/, /NoDesktop/, /is-preload/, /nav/, /navbar/ ]
        // ignore: ['/ignored.css', 'prismjs/', 'docsearch.js/'], // Ignore files/folders
        // purgeOnly : ['bootstrap/'], // Purge only these files/folders
//      }
//    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.dev/offline
    // `gatsby-plugin-offline`,
    //`gatsby-plugin-sitemap`,
  ],
};
