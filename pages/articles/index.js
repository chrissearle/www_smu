import glob from "glob";
import path from "path";
import fs from "fs";

import matter from "gray-matter";

import { postParams } from "../../utils/slugutils";

import ListPostView from "../../components/ListPostView";

export default function ArticlesList({ items }) {
  return <ListPostView listTitle="All Articles" items={items} />;
}

export async function getStaticProps() {
  return {
    props: {
      items: glob
        .sync(path.join("posts/**/*.md"))
        .map((filename) => {
          const markdownWithMeta = fs.readFileSync(
            path.join(filename),
            "utf-8"
          );

          const { data: frontmatter } = matter(markdownWithMeta);

          return {
            filename: filename,
            frontmatter: frontmatter,
            params: postParams(filename),
          };
        })
        .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date)),
    },
  };
}
