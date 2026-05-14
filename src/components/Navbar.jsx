"use client";

import { authClient } from "@/lib/auth-client";
import Link from "next/link";
import { useState } from "react";
import { useRouter, usePathname } from "next/navigation";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const router = useRouter();
  const pathname = usePathname();
  const { data: session, isPending } = authClient.useSession();

  if (isPending) return null;

  // Active state highlighting function
  const getLinkClass = (path) => {
    const baseClass = "transition-colors font-medium tracking-wide";
    return pathname === path 
      ? `${baseClass} text-[#B88E2F] font-bold` 
      : `${baseClass} hover:text-[#B88E2F] text-white`;
  };

  return (
    <nav className="bg-[#1B1B1B] text-white px-6 py-4 shadow-lg border-b border-gray-800 sticky top-0 z-[100]">
      <div className="max-w-[1400px] mx-auto flex justify-between items-center">
        
        {/* --- logo for mobile --- */}
        <div className="flex items-center gap-4">
          {/* Mobile menu icon */}
          <button 
            className="lg:hidden text-[#B88E2F]" 
            onClick={() => setIsOpen(!isOpen)}
          >
            <svg xmlns="w3.org" className="h-7 w-7" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d={isOpen ? "M6 18L18 6M6 6l12 12" : "M4 6h16M4 12h16M4 18h16"} />
            </svg>
          </button>

          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-2xl font-bold tracking-tighter text-[#B88E2F]">TILE</span>
            <span className="text-2xl font-bold tracking-tighter text-white">VERSE</span>
          </Link>
        </div>

        {/* --- desktop navlink (Now with Active Highlighting & Capital Letters) --- */}
        <div className="hidden lg:flex gap-10 text-sm uppercase tracking-widest">
          <Link href="/" className={getLinkClass("/")}>Home</Link>
          <Link href="/all-tiles" className={getLinkClass("/all-tiles")}>All Tiles</Link>
          <Link href="/my-profile" className={getLinkClass("/my-profile")}>My Profile</Link>
        </div>

        {/* --- Button side (Original Structure Preserved) --- */}
        <div className="flex items-center gap-4">
          {session?.user ? (
            <>
              {/* Profile click navigates to profile page */}
              <Link href="/my-profile" className="flex items-center gap-2 hover:opacity-90 transition-opacity">
                <img
                  src={session.user.image || "ibb.co"}
                  alt="Profile"
                  className="w-10 h-10 rounded-full border border-[#B88E2F] object-cover"
                />
                <span className="hidden md:block text-sm font-medium text-gray-300">
                  {session.user.name}
                </span>
              </Link>

              <button
                onClick={async () => {
                  await authClient.signOut();
                  router.refresh();
                  router.push("/");
                }}
                className="bg-[#B88E2F] hover:bg-[#a07b28] text-white px-4 py-2 rounded text-xs font-bold uppercase tracking-wider"
              >
                Logout
              </button>
            </>
          ) : (
            <>
              <Link
                href="/login"
                className="text-white hover:text-[#B88E2F] font-bold text-xs uppercase tracking-widest transition-colors"
              >
                Login
              </Link>
              <Link
                href="/register"
                className="bg-[#B88E2F] hover:bg-[#a07b28] text-white px-5 py-2.5 rounded-sm text-[10px] md:text-xs font-bold uppercase tracking-widest transition-all shadow-md"
              >
                Register Now
              </Link>
            </>
          )}
        </div>
      </div>

      {/* --- mobile Dropdown menu --- */}
      {isOpen && (
        <div className="lg:hidden absolute top-full left-0 w-full bg-[#1B1B1B] border-b border-gray-800 py-6 px-10 flex flex-col gap-6 animate-in slide-in-from-top duration-300">
          <Link href="/" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest hover:text-[#B88E2F]">Home</Link>
          <Link href="/all-tiles" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest hover:text-[#B88E2F]">All Tiles</Link>
          <Link href="/my-profile" onClick={() => setIsOpen(false)} className="text-sm uppercase tracking-widest hover:text-[#B88E2F]">My Profile</Link>
          
          {session?.user ? (
            <button
              onClick={async () => {
                await authClient.signOut();
                router.refresh();
                router.push("/");
                setIsOpen(false);
              }}
              className="text-left text-red-500 font-bold py-2 border-t border-gray-800 pt-4 text-sm uppercase tracking-widest"
            >
              Logout
            </button>
          ) : (
            <Link 
              href="/login" 
              onClick={() => setIsOpen(false)} 
              className="text-[#B88E2F] font-bold py-2 border-t border-gray-800 pt-4 text-sm uppercase tracking-widest"
            >
              Login
            </Link>
          )}
        </div>
      )}
    </nav>
  );
};

export default Navbar;
