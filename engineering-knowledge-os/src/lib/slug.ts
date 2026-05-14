export function slugify(text: string) {
  return encodeURIComponent(
    text
      .toLowerCase()
      .replace(/&/g, "and")
      .replace(/\//g, "-")
      .replace(/[^a-z0-9\u1000-\u109f]+/g, "-")
      .replace(/^-+|-+$/g, "")
  );
}
