"use client";

import Link from "next/link";
import tiles from "@/data/tiles.json";
import Marquee from "react-fast-marquee";

export default function Home() {
  return (
    <div>
      <div className="hero min-h-[80vh] bg-base-200">
        <div className="hero-content text-center">
          <div>
            <h1 className="text-6xl font-bold">
              Discover Your Perfect Aesthetic
            </h1>

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