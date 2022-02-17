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

export default function SeriesList({ items, sortedItems }) {
  return (
    <ListView
      listTitle="All Series"
      sortedItems={sortedItems}
      items={items}
      linkPath="/series/[series]/"
      linkQueryName="series"
    />
  );
}

export async function getStaticProps() {
  const files = glob.sync(path.join("posts/**/*.md"));

  const seriesInfo = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(path.join(filename), "utf-8");

      const { data: frontmatter } = matter(markdownWithMeta);

      return {
        filename: filename,
        frontmatter: frontmatter,
        series: frontmatter.series,
      };
    })
    .filter((series) => series.series);

  let seriesToPosts = {};

  seriesInfo.forEach((series) => {
    if (seriesToPosts.hasOwnProperty(series.series)) {
      seriesToPosts[series.series] = seriesToPosts[series.series] + 1;
    } else {
      seriesToPosts[series.series] = 1;
    }
  });

  return {
    props: buildListProps(seriesToPosts),
  };
}
