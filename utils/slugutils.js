export function createParam(filename) {
  const parts = filename.replace(".md", "").split("/");

  return {
    year: parts[1].toString(),
    month: parts[2].toString(),
    slug: parts[3],
  };
}

export function createParams(files) {
  return files
    .map((filename) => createParam(filename))
    .map((param) => ({
      params: param,
    }));
}
