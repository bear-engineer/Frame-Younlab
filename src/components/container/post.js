import React from "react";
import AniLink from "gatsby-plugin-transition-link/AniLink";
import { kebabCase } from "lodash";
import LinesEllipsis from "react-lines-ellipsis";
import "./post.scss";

const Post = ({ title, description, tags, date, slug, pageKey }) => (
  <div className="post-object">
    <div className="post-object-left">
      <span className="post-object-date">{date}</span>
    </div>
    <div className="post-object-right">
      <AniLink to={slug} fade duration={0.4}>
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
      </AniLink>
      <div className="post-object-tag">
        {tags.map(tag => (
          <span className="tag" key={`${pageKey}-${tag}`}>
            <AniLink to={`/tags/${kebabCase(tag)}`} fade duration={0.4}>
              {tag}
            </AniLink>
          </span>
        ))}
      </div>
    </div>
  </div>
);

export default Post;
