"use client";

import Link from "next/link";
import Marquee from "react-fast-marquee";
import { useEffect, useState } from "react";

export default function Home() {
  const [featuredTiles, setFeaturedTiles] = useState([]);

  useEffect(() => {
    fetch("/data/tiles.json")
      .then((res) => res.json())
      .then((data) => {
        setFeaturedTiles(data.slice(0, 4));
      });
  }, []);

  // Extracting first dynamic tile name for the official marquee requirement
  const dynamicTileName = featuredTiles[0]?.title || "Ceramic Flowral Tile";

  return (
    <div className="bg-[#1B1B1B] min-h-screen text-white">
      
      {/* --- Hero section --- */}
      <div className="relative w-full h-[65vh] md:h-[85vh] flex items-center justify-center overflow-hidden">
        
        <div 
          className="absolute inset-0 z-0 bg-black/60"
          style={{
            backgroundImage: "url('/images/masic-theme.jpeg')",
            backgroundSize: "cover",
            backgroundPosition: "center 40%", 
            backgroundRepeat: "no-repeat"
          }}
        >
          <div className="absolute inset-0 bg-black/50 lg:bg-black/50"></div>
        </div>

        <div className="hero-content text-center relative z-10 px-6">
          <div className="max-w-4xl">
            <h1 className="text-5xl md:text-7xl font-bold leading-tight tracking-tight drop-shadow-2xl">
              Discover Your Perfect 
              <span className="text-[#B88E2F]"> Aesthetic</span>
            </h1>

            <p className="mt-6 text-base md:text-xl text-gray-300 max-w-xl mx-auto font-light">
              Premium tiles crafted for modern interiors, luxury spaces, and timeless design.
            </p>

            <div className="flex flex-col sm:flex-row items-center justify-center gap-5 mt-10">
              {/* Exact Match Requirement: Text converted to "Browse Now" */}
              <Link 
                href="/all-tiles" 
                className="w-full sm:w-auto px-10 py-4 bg-[#B88E2F] hover:bg-[#a07b28] text-white font-bold uppercase tracking-widest transition-all duration-300 rounded-sm shadow-xl"
              >
                Browse Now
              </Link>
              
              <Link 
                href="/register" 
                className="w-full sm:w-auto px-10 py-4 border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white font-bold uppercase tracking-widest transition-all duration-300 rounded-sm"
              >
                Register Now
              </Link>
            </div>
          </div>
        </div>
        
        <div className="absolute bottom-0 left-0 w-full h-24 bg-gradient-to-t from-[#1B1B1B] to-transparent z-10"></div>
      </div>

      {/* --- Requirement Match: scrolling line with dynamic tile name --- */}
      <div className="border-y border-gray-800">
        <Marquee className="bg-[#141414] text-[#B88E2F] py-4 font-medium tracking-widest uppercase text-sm">
          <span className="mx-10">✦ New Arrivals: {dynamicTileName}</span>
          <span className="mx-10">✦ Weekly Feature: Modern Geometric Patterns</span>
          <span className="mx-10">✦ Join the Community...</span>
        </Marquee>
      </div>

      {/* --- Tiles Section (Featured only 4 card) --- */}
      <div className="max-w-[1400px] mx-auto p-10 py-20">
        <div className="flex flex-col md:flex-row justify-between items-center gap-4 mb-16">
          <div className="flex items-center gap-4">
            <div className="h-[2px] w-12 bg-[#B88E2F]"></div>
            <h2 className="text-3xl md:text-4xl font-bold uppercase tracking-widest text-white">
              Featured <span className="text-[#B88E2F]">Collections</span>
            </h2>
          </div>
          <Link href="/all-tiles" className="text-gray-400 hover:text-[#B88E2F] border-b border-gray-700 hover:border-[#B88E2F] transition-all pb-1 text-sm tracking-widest uppercase font-bold">
            View All Designs
          </Link>
        </div>

        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
          {featuredTiles && featuredTiles.map((tile) => (
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
                <h2 className="text-lg font-semibold mb-6 tracking-wide group-hover:text-[#B88E2F] transition-colors">
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

        {/* --- All Button --- */}
        <div className="mt-20 text-center">
          <Link 
            href="/all-tiles" 
            className="inline-block bg-[#B88E2F] hover:bg-white hover:text-black text-white px-12 py-4 font-bold uppercase tracking-widest transition-all duration-500 shadow-2xl"
          >
            Explore All Tiles
          </Link>
        </div>
      </div>
    </div>
  );
}
