"use client";

import Link from "next/link";

const Navbar = () => {
  return (
    <div className="navbar bg-black text-white px-6">
      <div className="navbar-start">
        <Link href="/" className="text-2xl font-bold">
          TileVerse
        </Link>
      </div>

      <div className="navbar-center gap-5">
        <Link href="/">Home</Link>
        <Link href="/all-tiles">All Tiles</Link>
        <Link href="/my-profile">My Profile</Link>
      </div>

      <div className="navbar-end">
        <Link href="/login" className="btn btn-primary">
          Login
        </Link>
      </div>
    </div>
  );
};

export default Navbar;

