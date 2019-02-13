import React from "react";
import Layout from "../layout";
import { graphql } from "gatsby";
const Posts = ({ data }) => (
  <Layout>
    <div>
      <h2>{data.markdownRemark.frontmatter.title}</h2>
      <p>{data.markdownRemark.frontmatter.date}</p>
    </div>
    <section dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }} />
  </Layout>
);

export default Posts;
export const query = graphql`
  query($slug: String!) {
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        tags
      }
    }
  }
`;
