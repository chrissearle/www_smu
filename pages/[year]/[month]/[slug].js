import glob from "glob";
import path from "path";
import fs from "fs";

import matter from "gray-matter";
import { marked } from "marked";

import PostTags from "../../../components/PostTags";

import { createParams } from "../../../utils/slugutils";
import { displayDate } from "../../../utils/dateutils";

export default function PostPage({ frontmatter, params, content }) {
  const tags = {
    tags: frontmatter.tags || null,
    series: frontmatter.series || null,
  };

  return (
    <div className="pt-4">
      <h1>{frontmatter.title}</h1>
      <div>
        Posted: {displayDate(frontmatter.date)} <PostTags {...tags} />
      </div>

      <div dangerouslySetInnerHTML={{ __html: marked(content) }}></div>
    </div>
  );
}

export async function getStaticPaths() {
  const files = glob.sync(path.join("posts/**/*.md"));

  const paths = createParams(files);

  return {
    paths,
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const markdownWithMeta = fs.readFileSync(
    path.join("posts", params.year, params.month, params.slug + ".md"),
    "utf-8"
  );

  const { data: frontmatter, content } = matter(markdownWithMeta);

  return {
    props: {
      frontmatter,
      params,
      content,
    },
  };
}
