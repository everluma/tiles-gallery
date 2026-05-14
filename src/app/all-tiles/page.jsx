"use client";

import { useState } from "react";
import tiles from "@/data/tiles.json";
import Link from "next/link";

const AllTiles = () => {
  const [search, setSearch] = useState("");

  const filtered = tiles.filter((tile) =>
    tile.title.toLowerCase().includes(search.toLowerCase())
  );

  return (
    <div className="bg-[#1B1B1B] min-h-screen text-white p-6 md:p-14">

      {/* --- search Hero Section --- */}
      <div className="max-w-[1400px] mx-auto mb-16 text-center">
        <h1 className="text-4xl md:text-5xl font-bold uppercase tracking-[0.2em] mb-8">
          All <span className="text-[#B88E2F]">Collections</span>
        </h1>
        
        {/* Large Hero UI input requirement */}
        <div className="relative max-w-xl mx-auto">
          <input
            type="text"
            placeholder="Search by pattern or name..."
            className="w-full bg-[#242424] border border-gray-800 py-4 px-6 rounded-sm focus:outline-none focus:border-[#B88E2F] transition-all placeholder:text-gray-600 text-white shadow-xl"
            onChange={(e) => setSearch(e.target.value)}
          />
          <div className="absolute right-4 top-4 text-gray-500">
            <svg xmlns="w3.org" className="h-6 w-6" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M21 21l-6-6m2-5a7 7 0 11-14 0 7 7 0 0114 0z" />
            </svg>
          </div>
        </div>
      </div>

      {/* --- Tiles grid --- */}
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8">
        {filtered.length > 0 ? (
          filtered.map((tile) => (
            <div 
              key={tile.id} 
              className="group bg-[#242424] border border-gray-800 hover:border-[#B88E2F] transition-all duration-500 overflow-hidden flex flex-col justify-between"
            >
              {/* Tile Thumbnail */}
              <div className="relative aspect-square overflow-hidden bg-[#1B1B1B]">
                <img 
                  src={tile.image} 
                  alt={tile.title} 
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110 opacity-80 group-hover:opacity-100"
                />
              </div>

              {/* Content */}
              <div className="p-6 text-center flex-1 flex flex-col justify-between">
                <h2 className="text-lg font-semibold mb-6 tracking-wide group-hover:text-[#B88E2F] transition-colors uppercase">
                  {tile.title}
                </h2>

                {/* Requirement Match: Text updated exactly to "Details" */}
                <Link
                  href={`/tile/${tile.id}`}
                  className="w-full inline-block text-center py-3 border border-[#B88E2F] text-[#B88E2F] hover:bg-[#B88E2F] hover:text-white transition-all duration-300 font-bold text-xs uppercase tracking-widest"
                >
                  Details
                </Link>
              </div>
            </div>
          ))
        ) : (
          <div className="col-span-full text-center py-20">
            <p className="text-gray-500 text-xl font-light uppercase tracking-wider">No tiles found matching your search.</p>
          </div>
        )}
      </div>
    </div>
  );
};

export default AllTiles;
