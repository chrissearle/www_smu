import glob from "glob";
import path from "path";
import fs from "fs";

import matter from "gray-matter";

import Link from "next/link";

import { postParams } from "../../utils/slugutils";
import { displayDate } from "../../utils/dateutils";

export default function TagList({ tags, sortedTagList }) {
  return (
    <div className="pt-4">
      <h1>All Tags</h1>

      <ul className="list-group">
        {sortedTagList.map((tag, index) => (
          <li
            key={`tag-${index}`}
            className="d-flex justify-content-between align-items-center list-group-item"
          >
            <Link
              href={{
                pathname: "/tags/[tag]/",
                query: {
                  tag: tag,
                },
              }}
            >
              {tag}
            </Link>
            <span className="badge bg-info rounded-pill">{tags[tag]}</span>
          </li>
        ))}
      </ul>
    </div>
  );
}

export async function getStaticProps() {
  const files = glob.sync(path.join("posts/**/*.md"));

  const tagInfo = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(filename), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      filename: filename,
      frontmatter: frontmatter,
      tags: frontmatter.tags.split(", "),
    };
  });

  let tagToPosts = {};

  tagInfo.forEach((info) => {
    info.tags.forEach((tag) => {
      if (tagToPosts.hasOwnProperty(tag)) {
        tagToPosts[tag] = tagToPosts[tag] + 1;
      } else {
        tagToPosts[tag] = 1;
      }
    });
  });

  return {
    props: {
      tags: tagToPosts,
      sortedTagList: Object.keys(tagToPosts).sort((a, b) => a.localeCompare(b)),
    },
  };
}
