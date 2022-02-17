import glob from "glob";
import path from "path";
import fs from "fs";

import matter from "gray-matter";

import Link from "next/link";

import { postParams } from "../../utils/slugutils";
import { displayDate } from "../../utils/dateutils";

export default function Tags({ tag, posts }) {
  return (
    <div className="pt-4">
      <h1>Posts about {tag}</h1>

      <ul className="list-group">
        {posts.map((post, index) => (
          <li
            key={`post-${index}`}
            className="d-flex justify-content-between align-items-center list-group-item"
          >
            <Link
              href={{
                pathname: "/[year]/[month]/[slug]/",
                query: {
                  year: post.params.year,
                  month: post.params.month,
                  slug: post.params.slug,
                },
              }}
            >
              {post.frontmatter.title}
            </Link>
            <span className="badge bg-info rounded-pill">
              {displayDate(post.frontmatter.date)}
            </span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticPaths() {
  const files = glob.sync(path.join("posts/**/*.md"));

  const tags = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(filename), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return frontmatter.tags.split(", ");
  });

  const uniqueTags = new Set(tags.flat());

  const sortedTags = [...uniqueTags].sort((a, b) => a.localeCompare(b));

  return {
    paths: sortedTags.map((tag) => ({ params: { tag: tag } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const files = glob.sync(path.join("posts/**/*.md"));

  const taggedFiles = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(path.join(filename), "utf-8");

      const { data: frontmatter } = matter(markdownWithMeta);

      return {
        params: postParams(filename),
        frontmatter: frontmatter,
      };
    })
    .filter((post) => {
      return post.frontmatter.tags.split(", ").includes(params.tag);
    })
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));

  return {
    props: {
      tag: params.tag,
      posts: taggedFiles,
    },
  };
}
