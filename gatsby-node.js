const path = require(`path`);
const lodash = require(`lodash`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const postTemplate = path.resolve(`./src/components/templates/posts.js`);
const postListTemplate = path.resolve(`./src/components/templates/postList.js`);
const tagTemplate = path.resolve(`./src/components/templates/tags.js`);

exports.onCreateNode = ({ node, getNode, actions }) => {
  const { createNodeField } = actions;
  if (node.internal.type === `MarkdownRemark`) {
    const slug = createFilePath({ node, getNode, basePath: `posts` });
    createNodeField({
      node,
      name: `slug`,
      value: slug
    });
  }
};

exports.createPages = ({ graphql, actions }) => {
  const { createPage } = actions;
  return graphql(`
    {
      allMarkdownRemark(
        sort: { fields: [frontmatter___date], order: DESC }
        limit: 1000
      ) {
        edges {
          node {
            frontmatter {
              tags
            }
            fields {
              slug
            }
          }
        }
        group(field: frontmatter___tags) {
          fieldValue
        }
      }
    }
  `)
    .then(result => {
      const posts = result.data.allMarkdownRemark.edges;
      const tags = result.data.allMarkdownRemark.group;
      const postsPerPage = 6;
      const numPages = Math.ceil(posts.length / postsPerPage);

      // Create post list
      Array.from({ length: numPages }).forEach((_, i) => {
        createPage({
          path: i === 0 ? `/blog` : `/blog/${i + 1}`,
          component: postListTemplate,
          context: {
            limit: postsPerPage,
            skip: i * postsPerPage,
            numPages,
            currentPage: i + 1
          }
        });
      });

      // create post
      posts.forEach(({ node }) => {
        createPage({
          path: node.fields.slug,
          component: postTemplate,
          context: {
            slug: node.fields.slug
          }
        });
      });

      // create tag
      tags.forEach(tag => {
        createPage({
          path: `/tags/${lodash.kebabCase(tag.fieldValue)}`,
          component: tagTemplate,
          context: {
            tag: tag.fieldValue
          }
        });
      });
    })
    .catch(error => console.log("Error ::", error));
};
