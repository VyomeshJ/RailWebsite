import Image from "next/image";

export default function Vision() {
  return (
    <div
      className="relative w-full min-h-screen flex items-center justify-center rounded-3xl overflow-hidden"
      style={{
        backgroundImage: "url('/vision_bg.png')",
        backgroundSize: "cover",
        backgroundPosition: "center",
      }}
    >
      {/* Overlay */}
      

      {/* CONTENT */}
      <div className="relative z-10 w-full h-full px-10 py-10 flex flex-col items-start">

        {/* Title */}
        <h1 className="text-4xl md:text-6xl font-bold text-black text-center mb-14 w-full">
          Our Vision
        </h1>

        {/* Cards Container (MADE WIDER) */}
        <div className="grid grid-cols-1 md:grid-cols-2 gap-12 w-[95%] max-w-8xl">

          {/* Card 1 */}
          <div className="bg-white border border-gray-200 rounded-3xl p-10 flex flex-col items-center shadow-lg">
            {/* Bigger Image Slot */}
            <div className="w-full h-56 rounded-2xl overflow-hidden mb-8 shadow-md">
              <div className="w-full h-full relative">
                <Image
                  src="/card1.png"
                  alt="About Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-gray-800 text-lg leading-relaxed text-center mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nunc vitae sem euismod molestie. Suspendisse sed porta ex. Maecenas mollis turpis urna, sed tincidunt metus commodo ac.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed text-center mb-5">
              Integer vitae rutrum velit. Proin facilisis aliquet turpis ac laoreet. In ultricies sodales metus, ut dictum arcu ultricies id. Mauris feugiat risus arcu, a cursus sapien sollicitudin sollicitudin. Mauris eu metus et sapien feugiat sodales. Fusce a turpis a nulla lobortis porta.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed text-center">
              Integer vitae rutrum velit. Proin facilisis aliquet turpis ac laoreet. In ultricies sodales metus, ut dictum arcu ultricies id. Mauris feugiat risus arcu, a cursus sapien sollicitudin sollicitudin. Mauris eu metus et sapien feugiat sodales. Fusce a turpis a nulla lobortis porta.
            </p>
          </div>


          {/* Card 2 */}
            <div className="bg-white border border-gray-200 rounded-3xl p-10 flex flex-col items-center shadow-lg">
            {/* Bigger Image Slot */}
            <div className="w-full h-56 rounded-2xl overflow-hidden mb-8 shadow-md">
              <div className="w-full h-full relative">
                <Image
                  src="/card2.png"
                  alt="About Image"
                  fill
                  className="object-cover"
                />
              </div>
            </div>

            <p className="text-gray-800 text-lg leading-relaxed text-center mb-5">
              Lorem ipsum dolor sit amet, consectetur adipiscing elit. Nullam sed nunc vitae sem euismod molestie. Suspendisse sed porta ex. Maecenas mollis turpis urna, sed tincidunt metus commodo ac.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed text-center mb-5">
              Integer vitae rutrum velit. Proin facilisis aliquet turpis ac laoreet. In ultricies sodales metus, ut dictum arcu ultricies id. Mauris feugiat risus arcu, a cursus sapien sollicitudin sollicitudin. Mauris eu metus et sapien feugiat sodales. Fusce a turpis a nulla lobortis porta.
            </p>
            <p className="text-gray-800 text-lg leading-relaxed text-center">
              Integer vitae rutrum velit. Proin facilisis aliquet turpis ac laoreet. In ultricies sodales metus, ut dictum arcu ultricies id. Mauris feugiat risus arcu, a cursus sapien sollicitudin sollicitudin. Mauris eu metus et sapien feugiat sodales. Fusce a turpis a nulla lobortis porta.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
