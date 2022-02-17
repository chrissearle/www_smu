import Link from "next/link";

export default function PostTags({ tags, series = null }) {
  return (
    <>
      {tags &&
        tags.split(", ").map((tag, index) => (
          <button
            key={`tag-${index}`}
            className="mx-2 my-2 btn btn-outline-info btn-sm"
          >
            {tag}
          </button>
        ))}
      {series && (
        <button className="mx-2 btn btn-outline-success btn-sm">
          {series}
        </button>
      )}
    </>
  );
}
