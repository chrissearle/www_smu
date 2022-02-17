import Head from "next/head";
import Link from "next/link";

export default function ListView({
  listTitle,
  sortedItems,
  items,
  linkPath,
  linkQueryName,
}) {
  return (
    <>
      <Head>
        <title>Chris Searle - {listTitle}</title>
      </Head>
      <div className="pt-4">
        <h1>{listTitle}</h1>

        <ul className="list-group">
          {sortedItems.map((item, index) => (
            <li
              key={`item-${index}`}
              className="d-flex justify-content-between align-items-center list-group-item"
            >
              <Link
                href={{
                  pathname: linkPath,
                  query: {
                    [linkQueryName]: item,
                  },
                }}
              >
                {item}
              </Link>
              <span className="badge bg-info rounded-pill">{items[item]}</span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
