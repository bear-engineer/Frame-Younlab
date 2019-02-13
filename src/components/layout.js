import React from "react";
import PropTypes from "prop-types";
import { StaticQuery, graphql } from "gatsby";
import "./styles/layout.scss";

const Layout = ({ children }) => (
  <StaticQuery
    query={graphql`
      query SiteTitleQuery {
        site {
          siteMetadata {
            title
          }
        }
      }
    `}
    render={data => (
      <div className="layout">
        <section className="layout-left-side-wrap">
          <aside className="layout-left-side-container">
            <h2>sidebar</h2>
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
