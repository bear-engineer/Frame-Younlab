import React, { Component } from "react";
import { graphql, Link } from "gatsby";
import Layout from "../layout";
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
    console.log(list);
    console.log(pageNum);
    return list.map(number => (
      <li key={`posts${number.pageIndex}`} className={number.class}>
        <Link to={`/posts/${number.url}`}>{number.pageIndex}</Link>
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
      <Layout>
        {console.log(this.props)}
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
                <Link to={`/posts/${prevPage}`}>
                  <FontAwesomeIcon icon={faArrowLeft} />
                </Link>
              </li>
            )}
            {this.postListNum(numPages, currentPage)}
            {!isLast && (
              <li>
                <Link to={`/posts/${nextPage}`}>
                  <FontAwesomeIcon icon={faArrowRight} />
                </Link>
              </li>
            )}
          </ul>
        </section>
      </Layout>
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
