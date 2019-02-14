import React from "react";
import Layout from "../layout";
import { graphql } from "gatsby";
import "./posts.scss";
const Posts = ({ data }) => (
  <Layout>
    <section className="posts">
      <div className="posts-title">
        <h1>{data.markdownRemark.frontmatter.title}</h1>
        <p>{data.markdownRemark.frontmatter.date}</p>
      </div>
      <section className="markdown">
        <article
          className="markdown-body"
          dangerouslySetInnerHTML={{ __html: data.markdownRemark.html }}
        />
      </section>
    </section>
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
