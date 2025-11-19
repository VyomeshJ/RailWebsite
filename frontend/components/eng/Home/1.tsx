"use client";

import { useState } from "react";

export default function HeroVideo() {
  const [showFull, setShowFull] = useState(false);

  return (
    <div className="relative w-full h-[85vh] overflow-hidden rounded-3xl">
      {/* Background Video */}
      <video
        className="absolute top-0 left-0 w-full h-full object-cover rounded-3xl"
        autoPlay
        loop
        muted
        playsInline
        src="/videos/HeroVideo.mp4"  // ← put your background video in /public/videos/
      />

      {/* Dark overlay so text is readable */}
      <div className="absolute inset-0 bg-black/50 rounded-3xl" />

      {/* Content on top */}
      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold mb-6 md:mb-10 max-w-4xl -mt-16 md:-mt-24">Lorem ipsum dolor sit amet, consectetur adipiscing elit.</h1>
        <p className="text-lg sm:text-xl md:text-2xl mb-6 md:mb-8 px-4">Some subtitle text goes here.</p>

        <button
          onClick={() => setShowFull(true)}
          className="bg-white text-[var(--text-selected-color)] px-6 py-3 rounded-lg font-medium hover:bg-gray-300 transition"
        >
          Watch Full Video
        </button>
      </div>

      {/* Full Resolution Video Modal */}
      {showFull && (
        <div className="fixed inset-0 bg-black/90 flex items-center justify-center z-[100]">
          <div className="relative w-11/12 md:w-3/4">
            <button
              onClick={() => setShowFull(false)}
              className="absolute top-2 right-2 bg-white text-black px-3 py-1 rounded z-10 hover:bg-gray-200 transition"
            >
              ✕
            </button>

            <video
              className="w-full h-auto"
              controls
              autoPlay
              src="/videos/MainVideo.mp4" // ← full quality version
            />
          </div>
        </div>
      )}
    </div>
  );
}
