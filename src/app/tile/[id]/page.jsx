"use client";

import { useParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useEffect, useState } from "react";
import tiles from "@/data/tiles.json";
import Link from "next/link";

const TileDetails = () => {
  const router = useRouter();
  const { id } = useParams();
  const { data: session, isPending } = authClient.useSession();
  const [authChecking, setAuthChecking] = useState(true);

  useEffect(() => {
    if (!isPending) {
      if (!session?.user) {
        router.push("/login");
      } else {
        setAuthChecking(false);
      }
    }
  }, [session, isPending, router]);

  // Premium skeleton loader during auth sync
  if (isPending || authChecking) {
    return (
      <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#B88E2F] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const tile = tiles.find((t) => String(t.id) === String(id));

  if (!tile) {
    return (
      <div className="min-h-screen bg-[#1B1B1B] text-white flex flex-col items-center justify-center px-6">
        <h2 className="text-4xl font-bold text-[#B88E2F] mb-4 uppercase tracking-wider">Tile Not Found</h2>
        <p className="text-gray-500 mb-8 text-center max-w-md uppercase text-xs tracking-widest">
          The tile you are searching for does not exist or may have been removed.
        </p>
        <Link href="/all-tiles" className="border border-[#B88E2F] px-6 py-3 uppercase tracking-widest text-xs hover:bg-[#B88E2F] transition-all">
          Return to Gallery
        </Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1B1B1B] text-white p-6 md:p-20">
      {/* Visuals Requirement: Left Grid Image, Right Grid Content */}
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* Left: High-Res Tile Preview */}
        <div className="border border-gray-800 p-2 bg-[#242424] shadow-2xl rounded-sm">
          <img
            src={tile.image}
            alt={tile.title}
            className="w-full h-auto object-cover opacity-90"
          />
        </div>

        {/* Right: Technical Info Content */}
        <div className="flex flex-col">
          <div className="mb-6">
            <span className="text-[#B88E2F] uppercase tracking-[0.4em] text-xs font-bold block mb-2">
              {tile.category} collection
            </span>
            {/* Info Requirement 1: Title */}
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2 uppercase">
              {tile.title}
            </h1>
            <p className="text-2xl font-light text-[#B88E2F] tracking-wide">
              {tile.currency} {tile.price} <span className="text-xs text-gray-500 uppercase tracking-widest ml-2">per sqft</span>
            </p>
          </div>

          <div className="h-[2px] w-16 bg-[#B88E2F] mb-8"></div>

          {/* Info Requirement 2: Style Description */}
          <p className="text-gray-400 text-base md:text-lg leading-relaxed mb-8 font-light tracking-wide">
            {tile.description}
          </p>

          {/* Technical Details Grid */}
          <div className="space-y-4 mb-10 bg-[#242424] p-6 border border-gray-800 rounded-sm">
            <h3 className="text-xs font-bold uppercase tracking-widest mb-4 border-b border-gray-700 pb-2 text-[#B88E2F]">Technical Specs</h3>
            
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-500 text-[10px] uppercase tracking-widest">Dimensions</span>
              <span className="text-white text-xs uppercase tracking-wider">{tile.dimensions}</span>
            </div>
            
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-500 text-[10px] uppercase tracking-widest">Material</span>
              <span className="text-white text-xs uppercase tracking-wider">{tile.material}</span>
            </div>

            {/* Info Requirement 3: Creator */}
            <div className="flex justify-between border-b border-gray-800 pb-2">
              <span className="text-gray-500 text-[10px] uppercase tracking-widest">Creator</span>
              <span className="text-white text-xs uppercase tracking-wider">{tile.creator}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500 text-[10px] uppercase tracking-widest">Status</span>
              <span className={`${tile.inStock ? 'text-green-500' : 'text-red-500'} text-xs font-bold uppercase tracking-widest`}>
                {tile.inStock ? '● In Stock' : '● Out of Stock'}
              </span>
            </div>
          </div>
          
          {/* Info Requirement 4: Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tile.tags?.map((tag, index) => (
              <span key={index} className="px-4 py-1.5 border border-gray-800 bg-[#141414] text-gray-400 text-[9px] uppercase tracking-widest rounded-full font-medium">
                {tag}
              </span>
            ))}
          </div>

          {/* Action Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="bg-[#B88E2F] hover:bg-white hover:text-black text-white py-4 font-bold uppercase tracking-widest transition-all duration-300 text-xs rounded-sm shadow-lg">
              Request A Quote
            </button>
            <Link 
              href="/all-tiles" 
              className="border border-gray-700 hover:border-white text-white py-4 text-center font-bold uppercase tracking-widest transition-all text-xs rounded-sm"
            >
              Back to Gallery
            </Link>
          </div>
        </div>
      </div>
    </div>
  );
};

export default TileDetails;
