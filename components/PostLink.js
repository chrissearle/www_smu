import Link from "next/link";

export default function PostLink({
  title: linkTitle,
  params,
  heading = false,
}) {
  let title = linkTitle;

  if (heading) {
    title = <a className="h5 text-decoration-none">{title}</a>;
  }

  return (
    <Link
      href={{
        pathname: "/[year]/[month]/[slug]/",
        query: {
          year: params.year,
          month: params.month,
          slug: params.slug,
        },
      }}
    >
      {title}
    </Link>
  );
}
