import React from "react";
import kebabCase from "lodash/kebabCase";

export default ({ data }) => (
  <div>
    <ul>
      <h2>Tags</h2>
      {data.map(tag => (
        <li key={tag.fieldValue}>
          <a href={`tags/${kebabCase(tag.fieldValue)}`}>
            {tag.fieldValue}
            <span>{tag.totalCount}</span>
          </a>
        </li>
      ))}
    </ul>
  </div>
);
