import React from "react";
import Layout from "../layout";
import { Link, graphql } from "gatsby";
import { FacebookProvider, Comments, ShareButton } from "react-facebook";
import { Helmet } from "react-helmet";
import "./posts.scss";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faFacebookF } from "@fortawesome/free-brands-svg-icons";

import urljoin from "url-join";

const Posts = ({ data }) => {
  const pageUrl = urljoin(
    data.site.siteMetadata.baseUrl,
    data.markdownRemark.fields.slug
  );
  return (
    <Layout>
      <Helmet>
        <title>{`${data.site.siteMetadata.title} | ${
          data.markdownRemark.frontmatter.title
        }`}</title>
        <meta
          property="fb:app_id"
          content={data.site.siteMetadata.facebookAppId}
        />
        <meta
          name="description"
          content={data.markdownRemark.frontmatter.description}
        />
        <meta name="title" content={data.markdownRemark.frontmatter.title} />
      </Helmet>
      {console.log(data)}
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
        <section className="posts-tags">
          {data.markdownRemark.frontmatter.tags.map(tag => (
            <Link to={`/tags/${tag}`} key={tag}>
              <span className="tag">{tag}</span>
            </Link>
          ))}
        </section>
        <section className="posts-facebook">
          <FacebookProvider appId={data.site.siteMetadata.facebookAppId}>
            <ShareButton href={pageUrl} className="posts-facebook-share">
              <span>
                <FontAwesomeIcon icon={faFacebookF} />
              </span>
              <span>Share</span>
            </ShareButton>
            <Comments href={pageUrl} width={`100%`} />
          </FacebookProvider>
        </section>
      </section>
    </Layout>
  );
};

export default Posts;
export const query = graphql`
  query($slug: String!) {
    site {
      siteMetadata {
        facebookAppId
        baseUrl
        title
      }
    }
    markdownRemark(fields: { slug: { eq: $slug } }) {
      html
      frontmatter {
        title
        date(formatString: "YYYY.MM.DD")
        description
        tags
      }
      fields {
        slug
      }
    }
  }
`;
