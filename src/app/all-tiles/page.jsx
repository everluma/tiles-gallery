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
    <div className="p-10">
      <input
        type="text"
        placeholder="Search Tiles..."
        className="input input-bordered w-full mb-10"
        onChange={(e) => setSearch(e.target.value)}
      />

      <div className="grid md:grid-cols-2 lg:grid-cols-4 gap-6">
        {filtered.map((tile) => (
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
                Details
              </Link>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
};

export default AllTiles;