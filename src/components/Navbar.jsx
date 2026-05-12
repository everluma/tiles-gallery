"use client";

import Link from "next/link";
import { useState } from "react";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  return (
    <nav className="bg-[#1B1B1B] text-white px-6 py-4 shadow-lg border-b border-gray-800 sticky top-0 z-[100]">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        
        {/* --- logo for mobile --- */}
        <div className="flex items-center gap-4">
          {/* Mobile menu icon) */}
          <button 
            className="lg:hidden text-[#B88E2F]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="http://w3.org" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-2xl font-bold tracking-tighter text-[#B88E2F]">TILE</span>
            <span className="text-2xl font-bold tracking-tighter text-white">VERSE</span>
          </Link>
        </div>

        {/* --- destop navlink --- */}
        <div className="hidden lg:flex gap-10">
          <Link href="/" className="hover:text-[#B88E2F] transition-colors font-medium tracking-wide">Home</Link>
          <Link href="/all-tiles" className="hover:text-[#B88E2F] transition-colors font-medium tracking-wide">All Tiles</Link>
          <Link href="/my-profile" className="hover:text-[#B88E2F] transition-colors font-medium tracking-wide">My Profile</Link>
        </div>

        {/* --- Button side --- */}
        <div className="flex items-center gap-4">
          <Link href="/login" className="hidden sm:block text-[#B88E2F] font-bold uppercase text-xs tracking-widest hover:text-white transition-colors">
            Login
          </Link>
          <Link 
            href="/register" 
            className="bg-[#B88E2F] hover:bg-[#a07b28] text-white px-5 py-2.5 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all shadow-md"
          >
            Register Now
          </Link>
        </div>
      </div>

      {/* --- mobile Dropdown menu --- */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1B1B1B] border-b border-gray-800 py-6 px-10 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-lg hover:text-[#B88E2F]">Home</Link>
          <Link href="/all-tiles" onClick={() => setIsOpen(false)} className="text-lg hover:text-[#B88E2F]">All Tiles</Link>
          <Link href="/my-profile" onClick={() => setIsOpen(false)} className="text-lg hover:text-[#B88E2F]">My Profile</Link>
          <Link href="/login" onClick={() => setIsOpen(false)} className="text-[#B88E2F] font-bold py-2 border-t border-gray-800 pt-4">Login</Link>
        </div>
      )}
    </nav>
  );
};

export default Navbar;
