import Layout from "../../components/Layout";
import ListView from "../../components/ListView";

import { loadMarkdown } from "../../lib/posts";
import { yearDate } from "../../utils/dateutils";
import { buildListProps } from "../../utils/pageutils";

export default function YearsList({ items, sortedItems, files }) {
  return (
    <Layout files={files}>
      <ListView
        listTitle="By Year"
        sortedItems={sortedItems}
        items={items}
        linkPath="/years/[year]/"
        linkQueryName="year"
      />
    </Layout>
  );
}

export async function getStaticProps() {
  const files = loadMarkdown({});

  let yearsToPosts = {};

  files.forEach((file) => {
    const year = yearDate(file.frontmatter.date);

    if (yearsToPosts.hasOwnProperty(year)) {
      yearsToPosts[year] = yearsToPosts[year] + 1;
    } else {
      yearsToPosts[year] = 1;
    }
  });

  return {
    props: {
      files: files,
      ...buildListProps(yearsToPosts, true),
    },
  };
}
