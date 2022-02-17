import glob from "glob";
import fs from "fs";
import path from "path";

import matter from "gray-matter";

import Head from "next/head";
import PostCard from "../components/PostCard";

import { postParams } from "../utils/slugutils";

function split(arr, chunkSize) {
  return arr
    .map((e, i) => {
      return i % chunkSize === 0 ? arr.slice(i, i + chunkSize) : null;
    })
    .filter((e) => {
      return e;
    });
}

export default function Home({ posts }) {
  const splitPosts = split(posts, 2);

  return (
    <div>
      <Head>
        <title>Chris Searle</title>
      </Head>

      <div>
        {splitPosts.map((row, index) => (
          <div className="card-group my-2" key={`row-${index}`}>
            {row.map((post, index2) => (
              <PostCard key={`post-${index2}`} post={post} />
            ))}
          </div>
        ))}
      </div>
    </div>
  );
}

export async function getStaticProps() {
  function loadPosts() {
    const files = glob.sync(path.join("posts/**/*.md"));

    const posts = files.map((filename) => {
      const params = postParams(filename);

      const markdownWithMeta = fs.readFileSync(path.join(filename), "utf-8");

      const { data: frontmatter } = matter(markdownWithMeta);

      let imagePath = null;

      if (frontmatter.image) {
        imagePath = `/images/posts/${params.year}/${params.month}/${frontmatter.image}`;
      }

      return {
        frontmatter,
        imagePath,
        ...params,
      };
    });

    return posts.sort((a, b) =>
      a.frontmatter.date < b.frontmatter.date ? 1 : -1
    );
  }

  return {
    props: {
      posts: loadPosts(),
    },
  };
}
