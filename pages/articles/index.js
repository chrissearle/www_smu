import ListPostView from "../../components/ListPostView";

import { loadMarkdown } from "../../lib/posts";

export default function ArticlesList({ items }) {
  return <ListPostView listTitle="All Articles" items={items} />;
}

export async function getStaticProps() {
  return {
    props: {
      items: loadMarkdown({ reverse: true }),
    },
  };
}
