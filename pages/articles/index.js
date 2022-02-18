import Layout from "../../components/Layout";
import ListPostView from "../../components/ListPostView";

import { loadMarkdown } from "../../lib/posts";

export default function ArticlesList({ items }) {
  return (
    <Layout>
      <ListPostView listTitle="All Articles" items={items} />
    </Layout>
  );
}

export async function getStaticProps() {
  return {
    props: {
      items: loadMarkdown({ reverse: true }),
    },
  };
}
