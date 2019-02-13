import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import SideBar from "./container/sideBar";
import "./styles/layout.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            subFirstTitle
            subLastTitle
          }
        }
        allMarkdownRemark {
          group(field: frontmatter___tags) {
            fieldValue
            totalCount
          }
        }
      }
    `}
    render={data => (
      <div className="layout">
        <section className="layout-left-side-wrap">
          <aside className="layout-left-side-container">
            <SideBar
              data={data.allMarkdownRemark.group}
              title={data.site.siteMetadata}
            />
          </aside>
        </section>
        <section className="layout-right-side-wrap">
          <main className="container layout-content-wrap">{children}</main>
        </section>
      </div>
    )}
  />
);

Layout.propTypes = {
  children: PropTypes.node.isRequired
};

export default Layout;
