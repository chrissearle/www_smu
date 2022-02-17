import Link from "next/link";

export default function PostLink({ post, heading = false }) {
  let title = post.frontmatter.title;

  if (heading) {
    title = <a className="h5 text-decoration-none">{post.frontmatter.title}</a>;
  }

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
      {title}
    </Link>
  );
}
