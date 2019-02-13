const path = require(`path`);
const _ = require(`lodash`);
const { createFilePath } = require(`gatsby-source-filesystem`);
const postTemplate = path.resolve(`./src/components/templates/posts.js`);
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
      allMarkdownRemark {
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
          path: `/tags/${_.kebabCase(tag.fieldValue)}`,
          component: tagTemplate,
          context: {
            tag: tag.fieldValue
          }
        });
      });
    })
    .catch(error => console.log("Error ::", error));
};
