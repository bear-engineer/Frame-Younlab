import React from "react";
import { graphql } from "gatsby";
import Post from "../components/container/post";

import Layout from "../components/layout";

const IndexPage = ({ data }) => (
  <Layout>
    <section>
      {data.allMarkdownRemark.edges.map(post => (
        <Post
          title={post.node.frontmatter.title}
          description={post.node.frontmatter.description}
          tags={post.node.frontmatter.tags}
          date={post.node.frontmatter.date}
          slug={post.node.fields.slug}
          key={post.node.id}
        />
      ))}
    </section>
  </Layout>
);

export default IndexPage;

export const query = graphql`
  query {
    allMarkdownRemark(sort: { fields: [frontmatter___date], order: DESC }) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          frontmatter {
            title
            date(formatString: "MM.DD")
            tags
            description
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
