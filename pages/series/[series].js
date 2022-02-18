import Layout from "../../components/Layout";
import ListPostView from "../../components/ListPostView";

import { loadMarkdown } from "../../lib/posts";

export default function Series({ series, posts }) {
  return (
    <Layout>
      <ListPostView listTitle={series} items={posts} />
    </Layout>
  );
}

export async function getStaticPaths() {
  const uniqueSeries = new Set(
    loadMarkdown({})
      .filter((file) => file.frontmatter.series)
      .map((file) => file.frontmatter.series)
      .flat()
  );

  return {
    paths: [...uniqueSeries].map((series) => ({ params: { series: series } })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      series: params.series,
      posts: loadMarkdown({ reverse: true }).filter((file) => {
        return file.frontmatter.series === params.series;
      }),
    },
  };
}
