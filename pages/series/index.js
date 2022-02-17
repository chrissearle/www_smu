import glob from "glob";
import path from "path";
import fs from "fs";

import matter from "gray-matter";

import Head from "next/head";
import Link from "next/link";

import { postParams } from "../../utils/slugutils";
import { displayDate } from "../../utils/dateutils";

export default function SeriesList({ series, sortedSeriesList }) {
  return (
    <>
      <Head>
        <title>Chris Searle - All Series</title>
      </Head>
      <div className="pt-4">
        <h1>All Series</h1>

        <ul className="list-group">
          {sortedSeriesList.map((name, index) => (
            <li
              key={`tag-${index}`}
              className="d-flex justify-content-between align-items-center list-group-item"
            >
              <Link
                href={{
                  pathname: "/series/[series]/",
                  query: {
                    series: name,
                  },
                }}
              >
                {name}
              </Link>
              <span className="badge bg-info rounded-pill">{series[name]}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
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
    props: {
      series: seriesToPosts,
      sortedSeriesList: Object.keys(seriesToPosts).sort((a, b) =>
        a.localeCompare(b)
      ),
    },
  };
}
