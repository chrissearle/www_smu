import glob from "glob";
import path from "path";
import fs from "fs";

import matter from "gray-matter";

import Head from "next/head";
import Link from "next/link";

import ListView from "../../components/ListView";

import { postParams } from "../../utils/slugutils";
import { displayDate } from "../../utils/dateutils";
import { buildListProps } from "../../utils/pageutils";

export default function TagList({ items, sortedItems }) {
  return (
    <ListView
      listTitle="All Tags"
      sortedItems={sortedItems}
      items={items}
      linkPath="/tags/[tag]/"
      linkQueryName="tag"
    />
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
    props: buildListProps(tagToPosts),
  };
}
