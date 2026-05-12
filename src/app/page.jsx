"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";

// আপনার JSON ডাটা যদি ঠিক থাকে তবে নিচের লাইনটি ঠিক কাজ করবে
import tiles from "@/data/tiles.json";

export default function Home() {
  return (
    <div className="bg-[#1B1B1B] min-h-screen text-white">


      {/* --- Hero Section --- */}
      <div
        className="hero min-h-[85vh] relative flex items-center justify-center"
        style={{
          backgroundImage: "url('/images/masic-theme.jpeg')",
          backgroundSize: "cover",
          backgroundPosition: "center",
        }}
      >
        <div className="absolute inset-0 bg-black/60 "></div>

        <div className="hero-content text-center relative z-10 px-6">
          <div className="max-w-3xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-2xl ">
              Discover Your  Perfect 
              <span className="text-[#B88E2F]"> Aesthetic</span>
            </h1>

            <p className="mt-6 text-base md:text-xl text-gray-300 max-w-xl mx-auto font-light">
              Premium tiles crafted for modern interiors, luxury spaces, and timeless design.
            </p>

            <Link 
              href="/all-tiles" 
              className="inline-block mt-10 px-10 py-4 bg-[#B88E2F] hover:bg-[#a07b28] text-white font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-xl"
            >
              Browse Collection
            </Link>
          </div>
        </div>
      </div>

      {/* --- Announce --- */}
      <div className="border-y border-gray-800">
        <Marquee className="bg-[#141414] text-[#B88E2F] py-4 font-medium tracking-widest uppercase text-sm">
          <span className="mx-10">✦ New Arrivals</span>
          <span className="mx-10">✦ Weekly Feature: Modern Geometric Patterns</span>
          <span className="mx-10">✦ Join the TileVerse Community</span>
        </Marquee>
      </div>

      {/* ---  Tiles section --- */}
      <div className="max-w-[1400px] mx-auto p-10">
        <div className="flex items-center gap-4 mb-12">
          <div className="h-[2px] w-12 bg-[#B88E2F]"></div>
          <h2 className="text-2xl md:text-3xl font-bold uppercase tracking-widest text-white">
            Feature Colections
          </h2>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {tiles && tiles.map((tile) => (
            <div 
              key={tile.id} 
              className="group bg-[#242424] border border-gray-800 hover:border-[#B88E2F] transition-all duration-500 overflow-hidden"
            >
              <div className="relative aspect-square overflow-hidden">
                <img 
                  src={tile.image} 
                  alt={tile.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>

              <div className="p-6 text-center">
                <h2 className="text-lg font-semibold mb-4 tracking-wide group-hover:text-[#B88E2F] transition-colors">
                  {tile.title}
                </h2>
                <Link
                  href={`/tile/${tile.id}`}
                  className="w-full inline-block text-center py-3 border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all duration-300 font-bold text-xs uppercase"
                >
                  View Details
                </Link>
              </div>
            </div>
          ))}
        </div>
      </div>
    </div>
  );
}
