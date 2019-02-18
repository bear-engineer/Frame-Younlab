import React, { Component } from "react";
import { graphql } from "gatsby";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import Post from "../container/post";
import { Helmet } from "react-helmet";
import { FontAwesomeIcon } from "@fortawesome/react-fontawesome";
import { faArrowLeft, faArrowRight } from "@fortawesome/free-solid-svg-icons";
import "./postList.scss";
class PostList extends Component {
  postListNum = (num, pageNum) => {
    let list = [];
    for (let i = 0; i < num; i++) {
      let num = i + 1;
      if (num === pageNum) {
        list.push({ pageIndex: num, url: num, class: "num-object-active" });
      } else {
        list.push({ pageIndex: num, url: num, class: "num-object" });
      }
    }
    list[0].url = "/";
    return list.map(number => (
      <li key={`posts${number.pageIndex}`} className={number.class}>
        <AniLink to={`/posts/${number.url}`} fade duration={0.4}>
          {number.pageIndex}
        </AniLink>
      </li>
    ));
  };
  render() {
    const { currentPage, numPages } = this.props.pageContext;
    const isFirst = currentPage === 1;
    const isLast = currentPage === numPages;
    const prevPage = currentPage - 1 === 1 ? "/" : (currentPage - 1).toString();
    const nextPage = (currentPage + 1).toString();
    const posts = this.props.data.allMarkdownRemark.edges;

    return (
      <div>
        <Helmet>
          <title>{`${this.props.data.site.siteMetadata.title} | Page`}</title>
        </Helmet>
        <section>
          {posts.map(({ node }) => {
            return (
              <Post
                key={node.fields.slug}
                title={node.frontmatter.title}
                description={node.frontmatter.description}
                date={node.frontmatter.date}
                tags={node.frontmatter.tags}
                slug={node.fields.slug}
              />
            );
          })}
        </section>
        <section className="pagenation">
          <ul>
            {!isFirst && (
              <li>
                <AniLink to={`/posts/${prevPage}`} fade duration={0.4}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </AniLink>
              </li>
            )}
            {this.postListNum(numPages, currentPage)}
            {!isLast && (
              <li>
                <AniLink to={`/posts/${nextPage}`} fade duration={0.4}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </AniLink>
              </li>
            )}
          </ul>
        </section>
      </div>
    );
  }
}

export default PostList;

export const postListQuery = graphql`
  query postListQuery($skip: Int!, $limit: Int!) {
    site {
      siteMetadata {
        title
      }
    }
    allMarkdownRemark(
      sort: { fields: [frontmatter___date], order: DESC }
      limit: $limit
      skip: $skip
    ) {
      group(field: frontmatter___tags) {
        fieldValue
        totalCount
      }
      totalCount
      edges {
        node {
          id
          fields {
            slug
          }
          frontmatter {
            title
            date(formatString: "MM.DD")
            tags
            description
          }
        }
      }
    }
  }
`;
