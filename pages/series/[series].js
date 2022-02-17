import glob from "glob";
import path from "path";
import fs from "fs";

import matter from "gray-matter";

import Link from "next/link";

import { postParams } from "../../utils/slugutils";
import { displayDate } from "../../utils/dateutils";

export default function Series({ series, posts }) {
  return (
    <div className="pt-4">
      <h1>Posts about {series}</h1>

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

  const series = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(path.join(filename), "utf-8");

      const { data: frontmatter } = matter(markdownWithMeta);

      return frontmatter.series;
    })
    .filter((series) => series);

  const uniqueSeries = new Set(series.flat());

  const sortedSeries = [...uniqueSeries].sort((a, b) => a.localeCompare(b));

  return {
    paths: sortedSeries.map((series) => ({ params: { series: series } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const files = glob.sync(path.join("posts/**/*.md"));

  const seriesFiles = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(path.join(filename), "utf-8");

      const { data: frontmatter } = matter(markdownWithMeta);

      return {
        params: postParams(filename),
        frontmatter: frontmatter,
      };
    })
    .filter((post) => {
      return post.frontmatter.series === params.series;
    })
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));

  return {
    props: {
      series: params.series,
      posts: seriesFiles,
    },
  };
}
