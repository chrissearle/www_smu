import glob from "glob";
import path from "path";
import fs from "fs";

import matter from "gray-matter";
import { marked } from "marked";

const postParams = (filename) => {
  const parts = filename.replace(".md", "").split("/");

  return {
    year: parts[1].toString(),
    month: parts[2].toString(),
    slug: parts[3],
  };
};

const loadMarkdownSingle = (filename, includeContent = true) => {
  const markdownWithMeta = fs.readFileSync(path.join(filename), "utf-8");

  const { data: frontmatter, content } = matter(markdownWithMeta);

  const params = postParams(filename);

  let imagePath = null;

  if (frontmatter.image) {
    imagePath = `/images/posts/${params.year}/${params.month}/${frontmatter.image}`;
  }

  if (frontmatter.tags) {
    frontmatter.tags = frontmatter.tags.toLowerCase();
  }

  if (includeContent) {
    return {
      filename: filename,
      frontmatter: frontmatter,
      params: params,
      content: marked(content),
      imagePath: imagePath,
    };
  }

  return {
    filename: filename,
    frontmatter: frontmatter,
    params: params,
    imagePath: imagePath,
  };
};

export const loadMarkdownParams = (params) => {
  return loadMarkdownSingle(
    path.join("posts", params.year, params.month, params.slug + ".md")
  );
};

export const loadMarkdown = ({
  content: includeContent = false,
  reverse = false,
}) => {
  const files = glob.sync(path.join("posts/**/*.md"));

  return files
    .map((filename) => loadMarkdownSingle(filename, includeContent))
    .sort((a, b) =>
      reverse
        ? b.frontmatter.date.localeCompare(a.frontmatter.date)
        : a.frontmatter.date.localeCompare(b.frontmatter.date)
    );
};
