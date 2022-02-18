import Layout from "../../components/Layout";
import ListPostView from "../../components/ListPostView";

import { loadMarkdown } from "../../lib/posts";

export default function Tags({ tag, posts, files }) {
  return (
    <Layout files={files}>
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
  const files = loadMarkdown({ reverse: true });

  return {
    props: {
      tag: params.tag,
      posts: files.filter((file) => {
        return file.frontmatter.tags.split(", ").includes(params.tag);
      }),
      files: files,
    },
  };
}
