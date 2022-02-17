import Link from "next/link";

import PostTags from "../components/PostTags";
import PostLink from "./PostLink";

import { displayDate } from "../utils/dateutils";

export default function PostCard({ post }) {
  const tags = {
    tags: post.frontmatter.tags || null,
    series: post.frontmatter.series || null,
  };

  return (
    <div className="card">
      <h6 className="card-header">
        Posted: {displayDate(post.frontmatter.date)}
        {post.frontmatter.updated && (
          <div className="small">Updated: {post.frontmatter.updated}</div>
        )}
      </h6>

      <div className="card-body">
        {post.imagePath && (
          <img
            src={post.imagePath}
            className="card-img-top post img-thumbnail float-end"
            alt=""
          />
        )}
        {post.frontmatter.embedImage && (
          <img
            src={post.frontmatter.embedImage}
            className="card-img-top post img-thumbnail float-end"
            alt=""
          />
        )}
        <div className="card-title">
          <PostLink
            post={{
              frontmatter: {
                title: post.frontmatter.title,
              },
              params: {
                year: post.year,
                month: post.month,
                slug: post.slug,
              },
            }}
            heading={true}
          />
        </div>

        {post.frontmatter.intro && <p>{post.frontmatter.intro}</p>}
      </div>

      <div className="card-footer">
        <PostTags {...tags} />
      </div>
    </div>
  );
}
