"use client";

import { useParams, useRouter } from "next/navigation";
import { authClient } from "@/lib/auth-client";
import { useEffect } from "react";
import tiles from "@/data/tiles.json";
import Link from "next/link";

const TileDetails = () => {

  const router = useRouter();

  const { data: session, isPending } = authClient.useSession();

  const { id } = useParams();
  useEffect(() => {
  if (!isPending && !session?.user) {
    router.push("/login");
  }
  }, [session, isPending, router]);

  if (isPending) return null;



  const tile = tiles.find((t) => String(t.id) === String(id));

  
  if (!tile) {
    return (
  <div className="min-h-screen bg-[#1B1B1B] text-white flex flex-col items-center justify-center px-6">
    <h2 className="text-4xl font-bold text-[#B88E2F] mb-4">
      Tile Not Found
    </h2>

    <p className="text-gray-500 mb-8 text-center max-w-md">
      The tile you are searching for does not exist or may have been removed.
    </p>

    <Link
      href="/all-tiles"
      className="border border-[#B88E2F] px-6 py-3 uppercase tracking-widest text-xs hover:bg-[#B88E2F] transition-all"
    >
      Return to Gallery
    </Link>
  </div>
);
  }

  return (
    <div className="min-h-screen bg-[#1B1B1B] text-white p-6 md:p-20">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-12 lg:gap-20 items-start">
        
        {/* --- Left images --- */}
        <div className="border border-gray-800 p-2 bg-[#242424] shadow-2xl">
          <img
            src={tile.image}
            alt={tile.title}
            className="w-full h-auto object-cover"
          />
        </div>

        {/* --- Right Content --- */}
        <div className="flex flex-col">
          <div className="mb-6">
            <span className="text-[#B88E2F] uppercase tracking-[0.4em] text-xs font-bold block mb-2">
              {tile.category} collection
            </span>
            <h1 className="text-4xl md:text-5xl font-bold tracking-tight mb-2">
              {tile.title}
            </h1>
            <p className="text-2xl font-light text-[#B88E2F]">
              {tile.currency} {tile.price} <span className="text-xs text-gray-500 uppercase tracking-widest ml-2">per sqft</span>
            </p>
          </div>

          <div className="h-[2px] w-16 bg-[#B88E2F] mb-8"></div>

          <p className="text-gray-400 text-lg leading-relaxed mb-8 font-light">
            {tile.description}
          </p>

          {/* --- Technical Specifications --- */}
          <div className="space-y-4 mb-10 bg-[#242424] p-6 border border-gray-800">
            <h3 className="text-sm font-bold uppercase tracking-widest mb-4 border-b border-gray-700 pb-2">Technical Details</h3>
            
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs uppercase tracking-widest">Dimensions</span>
              <span className="text-white text-sm">{tile.dimensions}</span>
            </div>
            
            <div className="flex justify-between">
              <span className="text-gray-500 text-xs uppercase tracking-widest">Material</span>
              <span className="text-white text-sm">{tile.material}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500 text-xs uppercase tracking-widest">Creator</span>
              <span className="text-white text-sm">{tile.creator}</span>
            </div>

            <div className="flex justify-between">
              <span className="text-gray-500 text-xs uppercase tracking-widest">Status</span>
              <span className={`${tile.inStock ? 'text-green-500' : 'text-red-500'} text-sm font-bold uppercase`}>
                {tile.inStock ? '● In Stock' : '● Out of Stock'}
              </span>
            </div>
          </div>
          
          {/* Tags */}
          <div className="flex flex-wrap gap-2 mb-10">
            {tile.tags?.map((tag, index) => (
              <span key={index} className="px-4 py-1 border border-gray-800 bg-[#141414] text-gray-400 text-[10px] uppercase tracking-widest rounded-full">
                {tag}
              </span>
            ))}
          </div>

          {/* Buttons */}
          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4">
            <button className="bg-[#B88E2F] hover:bg-white hover:text-black text-white py-4 font-bold uppercase tracking-widest transition-all duration-300">
              Request A Quote
            </button>
            <Link 
              href="/all-tiles" 
              className="border border-gray-700 hover:border-white text-white py-4 text-center font-bold uppercase tracking-widest transition-all"
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
