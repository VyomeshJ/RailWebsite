import Image from "next/image";

export default async function News() {
    const res = await fetch("http://cmsrai.vjam10te.com/api/articles?sort=createdAt:desc&pagination[limit]=3&populate=*", {
        cache: "no-store", // always fetch fresh data
    });

    const data = await res.json();
    const articles = data.data;

    return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center rounded-3xl overflow-hidden"
      style={{
        backgroundImage: "url('/news_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 rounded-3xl" />

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full px-10 py-10 flex flex-col items-start">

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-white text-center mb-14 w-full">
          News
        </h1>

        {/* Cards Container — 3 Columns */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-10 w-[95%] max-w-8xl">

          {[0, 1, 2].map((card) => (
            
            <div key={card} className="bg-white/0 rounded-3xl p-7 flex flex-col items-center">

              {/* Image — height increased */}
              <div className="w-full h-64 rounded-2xl overflow-hidden bg-white/10 relative mb-5">
                <Image
                  src={`http://cmsrai.vjam10te.com${articles[card].Article_Img[0].url}`}
                  alt="News Image"
                  fill
                  className="object-cover"
                  unoptimized
                />
              </div>

              {/* TITLE (new) */}
              <h2 className="text-white text-2xl font-semibold text-center mb-3">
                {articles[card].Title}
              </h2>

              {/* AUTHOR TAG */}
              <div className="text-white text-sm bg-white/10 px-3 py-1 rounded-full mb-4">
                By {articles[card].Author}
              </div>

              {/* DESCRIPTION (clamped) */}
              <p className="text-white text-lg leading-relaxed text-center line-clamp-3">
                {articles[card].Description}
              </p>

            </div>
          ))}

        </div>
      </div>
    </div>
  );
}
