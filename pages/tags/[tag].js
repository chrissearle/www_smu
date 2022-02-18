import Layout from "../../components/Layout";
import ListPostView from "../../components/ListPostView";

import { loadMarkdown } from "../../lib/posts";

export default function Tags({ tag, posts }) {
  return (
    <Layout>
      <ListPostView listTitle={tag} items={posts} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const uniqueTags = new Set(
    loadMarkdown({})
      .map((file) => {
        return file.frontmatter.tags.split(", ");
      })
      .flat()
  );

  return {
    paths: [...uniqueTags].map((tag) => ({ params: { tag: tag } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      tag: params.tag,
      posts: loadMarkdown({ reverse: true }).filter((file) => {
        return file.frontmatter.tags.split(", ").includes(params.tag);
      }),
    },
  };
}
