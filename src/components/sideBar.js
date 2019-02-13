import React from "react";
import kebabCase from "lodash/kebabCase";
import "./styles/sideBar.scss";
export default ({ data }) => (
  <nav className="side-bar">
    <h1 className="side-bar-title">
      Younlab <span>Frame</span>
    </h1>
    <form
      action=""
      className="side-bar-search"
      onSubmit={e => e.preventDefault()}
    >
      <input type="text" placeholder="Search Document" />
    </form>
    <ul className="side-bar-menu">
      <h2 className="side-bar-menu-title">Menu</h2>
      <li>
        <a href="/">Home</a>
      </li>
      <li>
        <a href="/about">About</a>
      </li>
    </ul>
    <ul className="side-bar-menu side-bar-menu-tag">
      <h2 className="side-bar-menu-title">Tags</h2>
      {data.map(tag => (
        <li key={tag.fieldValue}>
          <a href={`tags/${kebabCase(tag.fieldValue)}`}>
            {tag.fieldValue}
            <span>{tag.totalCount}</span>
          </a>
        </li>
      ))}
    </ul>
  </nav>
);
