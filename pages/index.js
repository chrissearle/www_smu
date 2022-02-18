import Head from "next/head";

import PostCard from "../components/PostCard";

import { split } from "../utils/pageutils";

import { loadMarkdown } from "../lib/posts";

export default function Home({ files: posts }) {
  const splitPosts = split(posts, 2);

  return (
    <>
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
    </>
  );
}

export async function getStaticProps() {
  return {
    props: {
      files: loadMarkdown({ reverse: true }),
    },
  };
}
