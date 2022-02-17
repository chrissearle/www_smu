import Head from "next/head";

import PostLink from "./PostLink";

import { displayDate } from "../utils/dateutils";

export default function ListPostView({ listTitle, items }) {
  return (
    <>
      <Head>
        <title>Chris Searle - Posts: {listTitle}</title>
      </Head>
      <div className="pt-4">
        <h1>Posts: {listTitle}</h1>

        <ul className="list-group">
          {items.map((item, index) => (
            <li
              key={`item-${index}`}
              className="d-flex justify-content-between align-items-center list-group-item"
            >
              <PostLink post={item} />
              <span className="badge bg-info rounded-pill">
                {displayDate(item.frontmatter.date)}
              </span>
            </li>
          ))}
        </ul>
      </div>
    </>
  );
}
