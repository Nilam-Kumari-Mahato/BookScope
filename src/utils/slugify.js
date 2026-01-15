export const slugify = (text = "book") =>
  text
    .toLowerCase()
    .trim()
    .replace(/[^a-z0-9]+/g, "-") // 👈 FIXED
    .replace(/(^-|-$)+/g, "");
