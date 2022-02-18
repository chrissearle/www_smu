import Head from "next/head";

import Layout from "../components/Layout";
import PostCard from "../components/PostCard";

import { split } from "../utils/pageutils";

import { loadMarkdown } from "../lib/posts";

export default function Home({ posts }) {
  const splitPosts = split(posts, 2);

  return (
    <Layout>
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
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      posts: loadMarkdown({ reverse: true }),
    },
  };
}
