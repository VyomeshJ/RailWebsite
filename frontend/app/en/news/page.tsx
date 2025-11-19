import Image from "next/image";
import Link from "next/link";
import { getArticles } from "@/lib/getArticles";

export default async function NewsPage() {
  const data = await getArticles(1);
  const articles = data.data;
  const pagination = data.meta.pagination;

  return (
    <div className="max-w-7xl mx-auto py-16 px-4 sm:px-6 lg:px-8">
      {/* Page Title */}
      <div className="text-center mb-12">
        <h1 className="text-5xl font-extrabold text-gray-900">News</h1>
        <p className="mt-2 text-gray-600 text-lg">
          Stay updated with the latest articles and announcements
        </p>
      </div>

      {/* Articles Grid */}
      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-8">
        {articles.map((article: any) => {
          const img = article.Article_Img?.[0]?.url
            ? `http://cmsrai.vjam10te.com${article.Article_Img[0].url}`
            : null;
          const author = article.Author || "Unknown";
          const description = article.Description || "No description available.";

          return (
            <div
              key={article.id}
              className="bg-white rounded-2xl shadow-lg overflow-hidden hover:shadow-2xl transition-shadow duration-300"
            >
              {img && (
                <div className="relative w-full h-56">
                  <Image
                    src={img}
                    alt={article.Title}
                    fill
                    className="object-cover"
                    unoptimized
                  />
                </div>
              )}

              <div className="p-5 flex flex-col justify-between h-full">
                <div>
                  <h2 className="font-semibold text-xl text-gray-900 mb-2">
                    {article.Title}
                  </h2>
                  <p className="text-gray-500 text-sm mb-3">By {author}</p>
                  <p className="text-gray-700 text-sm line-clamp-2">
                    {description}
                  </p>
                </div>
                <Link
                  href={`/news/${article.id}`}
                  className="mt-4 text-blue-600 hover:underline font-medium"
                >
                  Read more →
                </Link>
              </div>
            </div>
          );
        })}
      </div>

      {/* Pagination */}
      {pagination.pageCount > 1 && (
        <div className="flex justify-center mt-12">
          <Link
            href={`/news/2`}
            className="px-6 py-3 bg-black text-white rounded-xl hover:bg-gray-900 transition-colors"
          >
            Next Page →
          </Link>
        </div>
      )}
    </div>
  );
}
