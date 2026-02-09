const BASE_URL = "https://www.googleapis.com/books/v1";
const cache = new Map();

const safeFetch = async (url) => {
  if (cache.has(url)) {
    return cache.get(url); // return cached response
  }

  const res = await fetch(url);

  if (!res.ok) {
    if (res.status === 429) {
      throw new Error("Google Books API quota exceeded");
    }
    throw new Error(`API Error: ${res.status}`);
  }

  const data = await res.json();
  cache.set(url, data); // cache response
  return data;
};

/* ===========================
   Fetch by Category / Query
=========================== */
export const fetchBooksByCategory = async (query) => {
  if (!query) return null;

  const url = `${BASE_URL}/volumes?q=${encodeURIComponent(
    query
  )}&maxResults=10`;

  return safeFetch(url);
};

/* ===========================
   Fetch Book by ID
=========================== */
export const fetchBookById = async (id) => {
  if (!id) return null;

  const url = `${BASE_URL}/volumes/${id}`;
  return safeFetch(url);
};

/* ===========================
   Search by Title
=========================== */
export const searchBooksByTittle = async (query) => {
  if (!query || query.trim().length < 2) return null;

  const url = `${BASE_URL}/volumes?q=intitle:${encodeURIComponent(
    query
  )}&maxResults=20`;

  return safeFetch(url);
};
