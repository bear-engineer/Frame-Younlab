import { graphql } from "gatsby";
import React, { Component } from "react";
import Layout from "../layout";
class Tag extends Component {
  render() {
    const data = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        {console.log(this.props.pathContext.tag)}
        {console.log(data.map(tag => tag.node.frontmatter.title))}
        <span />
      </Layout>
    );
  }
}
export default Tag;

export const query = graphql`
  query($tag: String) {
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
      totalCount
      edges {
        node {
          frontmatter {
            title
            tags
          }
          fields {
            slug
          }
        }
      }
    }
  }
`;
