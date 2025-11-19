import Image from "next/image";

export default function AboutUs() {
  return (
    <div
      className="relative w-full h-auto md:h-[80vh] flex items-center justify-center rounded-3xl overflow-hidden"
      style={{
        backgroundImage: "url('/about_us_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/60 rounded-3xl" />

      {/* Content container */}
      <div className="relative z-10 w-full h-full px-6 py-10 md:px-10 flex flex-col md:flex-row items-start md:items-center gap-10">
        
        {/* LEFT SIDE – title */}
        <div className="flex-1 flex flex-col md:ml-20 ml-2">
          <h1 className="text-3xl md:text-6xl font-bold text-white leading-tight">
            About Us
          </h1>
        </div>

        {/* RIGHT SIDE – paragraph */}
        <div className="flex-1 text-white md:mr-20">
          <div className="text-base md:text-xl md:columns-2 md:gap-6 space-y-4">
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet, velit non posuere volutpat, urna massa convallis justo,
              vitae elementum ipsum arcu non libero. Integer commodo mi et
              auctor hendrerit. Aliquam erat volutpat.
            </p>
            <p>
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Quisque
              laoreet, velit non posuere volutpat, urna massa convallis justo,
              vitae elementum ipsum arcu non libero. Integer commodo mi et
              auctor hendrerit. Aliquam erat volutpat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
