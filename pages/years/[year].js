import glob from "glob";
import path from "path";
import fs from "fs";

import matter from "gray-matter";

import ListPostView from "../../components/ListPostView";

import { postParams } from "../../utils/slugutils";
import { yearDate } from "../../utils/dateutils";

export default function Year({ year, posts }) {
  return <ListPostView listTitle={year} items={posts} />;
}

export async function getStaticPaths() {
  const files = glob.sync(path.join("posts/**/*.md"));

  const years = files.map((filename) => {
    const markdownWithMeta = fs.readFileSync(path.join(filename), "utf-8");

    const { data: frontmatter } = matter(markdownWithMeta);

    return yearDate(frontmatter.date);
  });

  const uniqueYears = new Set(years.flat());

  const sortedYears = [...uniqueYears].sort((a, b) => b.localeCompare(a));

  return {
    paths: sortedYears.map((year) => ({ params: { year: year } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const files = glob.sync(path.join("posts/**/*.md"));

  const yearsFiles = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(path.join(filename), "utf-8");

      const { data: frontmatter } = matter(markdownWithMeta);

      return {
        params: postParams(filename),
        frontmatter: frontmatter,
      };
    })
    .filter((post) => {
      return yearDate(post.frontmatter.date) === params.year.toString();
    })
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));

  return {
    props: {
      year: params.year.toString(),
      posts: yearsFiles,
    },
  };
}
