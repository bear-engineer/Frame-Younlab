import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import kebabCase from "lodash/kebabCase";
import "../styles/sideBar.scss";
import Search from "../container/search";
export default ({ data, title, github }) => (
  <nav className="side-bar">
    <AniLink to="/posts" fade duration={0.4}>
      <h1 className="side-bar-title">
        {title.subFirstTitle} <span>{title.subLastTitle}</span>
      </h1>
    </AniLink>

    <Search className="side-bar-search" />

    <ul className="side-bar-menu">
      <h2 className="side-bar-menu-title">Menu</h2>
      <li>
        <AniLink to="/posts" fade duration={0.4}>
          home
        </AniLink>
      </li>

      <li>
        <a href={github}>github</a>
      </li>
    </ul>
    <ul className="side-bar-menu side-bar-menu-tag">
      <h2 className="side-bar-menu-title">Tags</h2>
      {data.map(tag => (
        <li key={tag.fieldValue}>
          <AniLink
            to={`/tags/${kebabCase(tag.fieldValue)}`}
            fade
            duration={0.4}
          >
            {tag.fieldValue}
            <span>{tag.totalCount}</span>
          </AniLink>
        </li>
      ))}
    </ul>
  </nav>
);
