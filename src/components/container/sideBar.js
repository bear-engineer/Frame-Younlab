import React from "react";
import { Link } from "gatsby";
import kebabCase from "lodash/kebabCase";
import "../styles/sideBar.scss";
import Search from "../container/search";
export default ({ data, title, github }) => (
  <nav className="side-bar">
    <Link to="/posts">
      <h1 className="side-bar-title">
        {title.subFirstTitle} <span>{title.subLastTitle}</span>
      </h1>
    </Link>

    <Search className="side-bar-search" />

    <ul className="side-bar-menu">
      <h2 className="side-bar-menu-title">Menu</h2>
      <li>
        <Link to="/posts">home</Link>
      </li>
      <li>
        <a href={github}>github</a>
      </li>
    </ul>
    <ul className="side-bar-menu side-bar-menu-tag">
      <h2 className="side-bar-menu-title">Tags</h2>
      {data.map(tag => (
        <li key={tag.fieldValue}>
          <Link to={`/tags/${kebabCase(tag.fieldValue)}`}>
            {tag.fieldValue}
            <span>{tag.totalCount}</span>
          </Link>
        </li>
      ))}
    </ul>
  </nav>
);
