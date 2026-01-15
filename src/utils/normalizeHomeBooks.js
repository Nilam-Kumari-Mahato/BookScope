export const normalizeHomeBook = (item) => {
  const info = item.volumeInfo || {};

  return {
    id: item.id,
    title: info.title || "Untitled",
    authors: info.authors || ["Unknown author"],
    thumbnail:
      info.imageLinks?.thumbnail ||
      "https://via.placeholder.com/128x190?text=No+Cover",
  };
};
