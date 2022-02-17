import glob from "glob";
import path from "path";
import fs from "fs";

import matter from "gray-matter";

import Head from "next/head";
import Link from "next/link";
import PostCard from "../../components/PostCard";

import { postParams } from "../../utils/slugutils";
import { split } from "../../utils/pageutils";

export default function Category({ category, posts }) {
  const splitPosts = split(posts, 2);

  return (
    <>
      <Head>
        <title>Chris Searle - Category: {category}</title>
      </Head>
      <div className="pt-4">
        <h1>Category: {category}</h1>

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
    </>
  );
}

export async function getStaticPaths() {
  const files = glob.sync(path.join("posts/**/*.md"));

  const categories = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(path.join(filename), "utf-8");

      const { data: frontmatter } = matter(markdownWithMeta);

      return frontmatter.category;
    })
    .filter((category) => category);

  const uniqueCategories = new Set(categories.flat());

  // Handle the old names
  const allCategories = [...uniqueCategories, "rc", "photo", "3dp"];

  return {
    paths: allCategories.map((category) => ({
      params: { category: category },
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  const files = glob.sync(path.join("posts/**/*.md"));

  let cat = params.category;

  // Handle the old names
  if (cat === "rc") {
    cat = "Radio Control";
  }
  if (cat === "3dp") {
    cat = "3D Printing";
  }
  if (cat === "photo") {
    cat = "Photography";
  }

  const categoryFiles = files
    .map((filename) => {
      const markdownWithMeta = fs.readFileSync(path.join(filename), "utf-8");

      const { data: frontmatter } = matter(markdownWithMeta);

      return {
        params: postParams(filename),
        frontmatter: frontmatter,
      };
    })
    .filter((post) => post.frontmatter.category)
    .filter((post) => {
      return post.frontmatter.category.split(", ").includes(cat);
    })
    .sort((a, b) => b.frontmatter.date.localeCompare(a.frontmatter.date));

  return {
    props: {
      category: cat,
      posts: categoryFiles,
    },
  };
}
