require(`dotenv`).config({
  path: `.env.${process.env.NODE_ENV}`
});

const myQuery = `{
  allMarkdownRemark{
    edges{
      node{
        id
        frontmatter{
          title
          description
          date
          tags
        }
        fields{
          slug
        }
      }
    }
  }
}`;

const queries = [
  {
    query: myQuery,
    transformer: ({ data }) =>
      data.allMarkdownRemark.edges.map(({ node }) => node), // optional
    indexName: "younlab-query", // overrides main index name, optional
    settings: {
      // optional, any index settings
    }
  }
];

module.exports = {
  siteMetadata: {
    title: `Younlab Frame`,
    subFirstTitle: `Younlab`,
    subLastTitle: `Frame`,
    description: `Kick off your next, great Gatsby project with this default starter. This barebones starter ships with the main Gatsby configuration files you might need.`,
    author: `@Sehyeon Youn`,
    github: `https://github.com/Younlab`,
    facebookAppId: process.env.FACEBOOK_APP_ID,
    baseUrl: `https://younlab.com`,
    siteUrl: `https://younlab.com`
  },
  plugins: [
    `gatsby-plugin-react-helmet`,
    `gatsby-plugin-netlify`,
    {
      resolve: "gatsby-plugin-transition-link",
      options: {
        layout: require.resolve(`./src/components/layout.js`)
      }
    },
    {
      resolve: `gatsby-plugin-robots-txt`,
      options: {
        host: `https://www.younlab.com`,
        sitemap: `https://www.younlab.siteMap.xml`,
        policy: [{ userAgent: `*`, allow: `/` }]
      }
    },
    {
      resolve: `gatsby-plugin-sitemap`,
      options: {
        output: `/siteMap.xml`,
        query: `
          {
            site {
              siteMetadata {
                siteUrl
              }
            }
  
            allSitePage {
              edges {
                node {
                  path
                }
              }
            }
        }`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `images`,
        path: `${__dirname}/src/images`
      }
    },
    {
      resolve: `gatsby-source-filesystem`,
      options: {
        name: `posts`,
        path: `${__dirname}/src/posts`
      }
    },
    {
      resolve: `gatsby-transformer-remark`,
      options: {
        plugins: [
          {
            resolve: `gatsby-remark-prismjs`,
            options: {
              classPrefix: "language-"
            }
          },
          {
            resolve: `gatsby-remark-images`,
            options: {
              maxWidth: 1200
            }
          },
          `gatsby-remark-copy-linked-files`
        ]
      }
    },
    `gatsby-transformer-sharp`,
    `gatsby-plugin-sharp`,
    `gatsby-plugin-sass`,
    {
      resolve: `gatsby-plugin-manifest`,
      options: {
        name: `gatsby-starter-default`,
        short_name: `starter`,
        start_url: `/`,
        background_color: `#663399`,
        theme_color: `#663399`,
        display: `minimal-ui`,
        icon: `src/images/younlab-frame-icon.png` // This path is relative to the root of the site.
      }
    },
    // this (optional) plugin enables Progressive Web App + Offline functionality
    // To learn more, visit: https://gatsby.app/offline
    // 'gatsby-plugin-offline',
    {
      resolve: `gatsby-plugin-algolia`,
      options: {
        appId: process.env.ALGOLIA_APP_ID,
        apiKey: process.env.ALGOLIA_API_KEY,
        indexName: process.env.ALGOLIA_INDEX_NAME, // for all queries
        queries,
        chunkSize: 10000 // default: 1000
      }
    }
  ]
};
