import Link from "next/link";

export default function PostLink({ post }) {
  return (
    <Link
      href={{
        pathname: "/[year]/[month]/[slug]/",
        query: {
          year: post.params.year,
          month: post.params.month,
          slug: post.params.slug,
        },
      }}
    >
      {post.frontmatter.title}
    </Link>
  );
}
