import glob from "glob";
import path from "path";
import fs from "fs";

import matter from "gray-matter";

import ListView from "../../components/ListView";

import Head from "next/head";
import Link from "next/link";

import { postParams } from "../../utils/slugutils";
import { displayDate, yearDate } from "../../utils/dateutils";
import { buildListProps } from "../../utils/pageutils";

export default function YearsList({ items, sortedItems }) {
  return (
    <ListView
      listTitle="By Year"
      sortedItems={sortedItems}
      items={items}
      linkPath="/years/[year]/"
      linkQueryName="year"
    />
  );
}

export async function getStaticProps() {
  const files = glob.sync(path.join("posts/**/*.md"));

  const yearsInfo = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(filename), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return {
      filename: filename,
      frontmatter: frontmatter,
      series: frontmatter.series,
    };
  });

  let yearsToPosts = {};

  yearsInfo.forEach((post) => {
    const year = yearDate(post.frontmatter.date);

    if (yearsToPosts.hasOwnProperty(year)) {
      yearsToPosts[year] = yearsToPosts[year] + 1;
    } else {
      yearsToPosts[year] = 1;
    }
  });

  return {
    props: buildListProps(yearsToPosts, true),
  };
}
