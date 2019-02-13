import React from "react";
import { Link } from "gatsby";
import { kebabCase } from "lodash";
import LinesEllipsis from "react-lines-ellipsis";
import "./post.scss";

const Post = ({ title, description, tags, date, slug, pageKey }) => (
  <div className="post-object">
    <div className="post-object-left">
      <span className="post-object-date">{date}</span>
    </div>
    <div className="post-object-right">
      <Link to={slug}>
        <div>
          <h2 className="post-object-title">
            <LinesEllipsis
              text={title}
              maxLine="1"
              ellipsis="..."
              trimRight
              basedOn="letters"
            />
          </h2>

          <LinesEllipsis
            text={description}
            maxLine="2"
            ellipsis="..."
            trimRight
            basedOn="letters"
            className="post-object-description"
          />
        </div>
      </Link>
      <div className="post-object-tag">
        {tags.map(tag => (
          <span key={`${pageKey}-${tag}`}>
            <Link to={`/tags/${kebabCase(tag)}`}>{tag}</Link>
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Post;
