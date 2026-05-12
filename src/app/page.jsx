"use client";

import Link from "next/link";
import tiles from "@/data/tiles.json";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
     <div
  className="hero min-h-[80vh] relative"
  style={{
    backgroundImage: "url('/images/masic-theme.jpeg')",
    backgroundSize: "cover",
    backgroundPosition: "center",
  }}
>
  
  <div className="absolute inset-0 bg-black/50"></div>

  <div className="hero-content text-center text-white relative z-10">
    <div className="max-w-2xl">
      <h1 className="text-4xl md:text-6xl font-bold leading-tight">
        Discover Your Perfect Aesthetic
      </h1>

      <p className="mt-4 text-sm md:text-lg text-gray-200">
        Premium tiles crafted for modern interiors, luxury spaces, and timeless design.
      </p>

      <Link href="/all-tiles" className="btn btn-primary mt-6">
        Browse Now
      </Link>
    </div>
  </div>
</div>

      <Marquee className="bg-black text-white py-3">
        New Arrivals | Weekly Feature: Modern Geometric Patterns | Join the Community
      </Marquee>

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6 p-10">
        {tiles.map((tile) => (
          <div key={tile.id} className="card bg-base-100 shadow-xl">
            <figure>
              <img src={tile.image} alt={tile.title} />
            </figure>

            <div className="card-body">
              <h2 className="card-title">{tile.title}</h2>

              <Link
                href={`/tile/${tile.id}`}
                className="btn btn-primary"
              >
                View Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}