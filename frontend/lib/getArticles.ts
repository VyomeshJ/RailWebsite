export async function getArticles(page: number = 1, pageSize: number = 9) {
  const res = await fetch(
    `http://localhost:1337/api/articles?populate=*&pagination[page]=${page}&pagination[pageSize]=${pageSize}`,
    { cache: "no-store" }
  );

  if (!res.ok) {
    throw new Error("Failed to fetch articles");
  }

  const data = await res.json();
  return data;
}
