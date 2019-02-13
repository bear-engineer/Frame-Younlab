import React from "react";
import { Link } from "gatsby";
import { kebabCase } from "lodash";

const Post = ({ title, description, tags, author, date, slug }) => (
  <div>
    <Link to={slug}>
      <div>
        <div>{date}</div>
        <div>
          <h2>{title}</h2>

          <p>{description}</p>
        </div>
        <div>{author}</div>
      </div>
    </Link>
    <div>
      {tags.map(tag => (
        <span key={tag}>
          <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
        </span>
      ))}
    </div>
  </div>
);

export default Post;
