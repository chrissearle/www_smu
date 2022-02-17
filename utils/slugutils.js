export function postParams(filename) {
  const parts = filename.replace(".md", "").split("/");

  return {
    year: parts[1].toString(),
    month: parts[2].toString(),
    slug: parts[3],
  };
}

export function postsParams(files) {
  return files
    .map((filename) => postParams(filename))
    .map((param) => ({
      params: param,
    }));
}
