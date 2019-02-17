import { graphql } from "gatsby";
import React, { Component } from "react";
import Layout from "../layout";
import Post from "../container/post";
import { Helmet } from "react-helmet";
class Tag extends Component {
  render() {
    const data = this.props.data.allMarkdownRemark.edges;
    return (
      <Layout>
        {console.log(this.props.pageContext.tag)}
        <Helmet>
          <title>
            {this.props.data.site.siteMetadata.title} | Tag:{" "}
            {this.props.pageContext.tag}
          </title>
        </Helmet>
        {data.map(tag => (
          <Post
            title={tag.node.frontmatter.title}
            description={tag.node.frontmatter.description}
            tags={tag.node.frontmatter.tags}
            date={tag.node.frontmatter.date}
            slug={tag.node.fields.slug}
            key={`${this.props.pageContext.tag}-${tag.node.id}`}
            pageKey={this.props.pageContext.tag}
          />
        ))}
        <span />
      </Layout>
    );
  }
}
export default Tag;

export const query = graphql`
  query($tag: String) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      limit: 2000
      sort: { fields: [frontmatter___date], order: DESC }
      filter: { frontmatter: { tags: { in: [$tag] } } }
    ) {
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
