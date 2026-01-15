import { striphtml } from "./striphtml";

export const normalizeBookDetail = (data) => {
    const info = data.volumeInfo || {};

    const categories = info.categories.map(cat => cat.replace(/\s*\/\s*/g, " • "));

    return{
        id:data.id,
        title:info.title || "Untitled",
        subtitle:info.subtitle || "",
        authors:info.authors || ["Unkown author"],
        description:striphtml(info.description) || "No Description Available",
        publisher:info.publisher || "Unkown Publisher",
        publishedDate: info.publishedDate || "",
        pagecount:"Pages: " + info.pageCount || "",
        categories: categories || [],
        rating: info.averageRating || null,
        ratingsCount: info.ratingsCount || 0,
        thumbnail:info.imageLinks?.thumbnail || "https://via.placeholder.com/128x190?text=No+Cover",
    }
}