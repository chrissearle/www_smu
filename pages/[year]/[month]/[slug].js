import Head from "next/head";

import Layout from "../../../components/Layout";
import PostTags from "../../../components/PostTags";

import { displayDate } from "../../../utils/dateutils";
import { loadMarkdown, loadMarkdownParams } from "../../../lib/posts";

export default function PostPage({ frontmatter, content, files }) {
  const tags = {
    tags: frontmatter.tags || null,
    series: frontmatter.series || null,
  };

  return (
    <Layout files={files}>
      <Head>
        <title>Chris Searle - {frontmatter.title}</title>
      </Head>
      <div className="pt-4">
        <h1>{frontmatter.title}</h1>
        <div>
          Posted: {displayDate(frontmatter.date)}
          {frontmatter.updated && (
            <>
              {"/"} Updated: {frontmatter.updated}
            </>
          )}
          <PostTags {...tags} />
        </div>

        <div dangerouslySetInnerHTML={{ __html: content }}></div>
      </div>
    </Layout>
  );
}

export async function getStaticPaths() {
  return {
    paths: loadMarkdown({}).map((file) => ({
      params: file.params,
    })),
    fallback: false,
  };
}

export async function getStaticProps({ params }) {
  return {
    props: {
      files: loadMarkdown({}),
      ...loadMarkdownParams(params),
    },
  };
}
