"use client";

import Link from "next/link";
import { FaEdit, FaEnvelope, FaUserCircle, FaCamera } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";

const MyProfile = () => {
  const router = useRouter();
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

  // Premium loading screen to prevent empty state blink
  if (isPending || authChecking) {
    return (
      <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#B88E2F] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  const userPhoto = session?.user?.image || "ibb.co";

  return (
    <div className="min-h-screen bg-[#1B1B1B] text-white py-16 px-6">
      <div className="max-w-4xl mx-auto">
        
        {/* --- header--- */}
        <div className="bg-[#242424] border border-gray-800 shadow-2xl relative overflow-hidden mb-10">
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#B88E2F] opacity-10 rounded-bl-full"></div>
          
          <div className="p-8 md:p-12 flex flex-col md:flex-row items-center gap-10">

            {/* Image Container  */}
            <div className="relative group">
              <div className="w-40 h-40 md:w-48 md:h-48 rounded-full border-2 border-[#B88E2F] p-1.5 overflow-hidden">
                <img
                  src={userPhoto}
                  alt="User Profile"
                  className="w-full h-full rounded-full object-cover grayscale hover:grayscale-0 transition-all duration-500"
                />
              </div>
              {/* Camera Icon by positioning*/}
              <div className="absolute bottom-2 right-4 bg-[#B88E2F] p-3 rounded-full shadow-lg cursor-pointer hover:scale-110 transition-transform">
                <FaCamera className="text-white text-sm" />
              </div>
            </div>

            {/* User Basic Info */}
            <div className="text-center md:text-left space-y-4">
              <span className="text-[#B88E2F] uppercase tracking-[0.3em] text-xs font-bold">Verified Member</span>

              {/* Preserved your original font casing exactly */}
              <h1 className="text-4xl md:text-6xl font-bold tracking-tighter">
                {session?.user?.name || "Guest User"}
              </h1>

              <div className="flex items-center justify-center md:justify-start gap-2 text-gray-400">
                <FaEnvelope className="text-[#B88E2F]" />
                <span className="text-sm font-light">
                  {session?.user?.email || "No email found"}
                </span>
              </div>
              
              <Link 
                href="/update-profile" 
                className="inline-flex items-center gap-2 bg-[#B88E2F] hover:bg-[#a07b28] text-white px-8 py-3 rounded-sm font-bold uppercase tracking-widest transition-all text-xs mt-4 shadow-lg active:scale-95"
              >
                <FaEdit /> Update Information
              </Link>
            </div>
          </div>
        </div>

        {/* --- Profile details --- */}
        <div className="grid grid-cols-1 md:grid-cols-3 gap-6">
          {/* Stats */}
          <div className="md:col-span-1 space-y-6">
            <div className="bg-[#242424] border border-gray-800 p-6 text-center">
              <h4 className="text-[#B88E2F] text-3xl font-bold">12</h4>
              <p className="text-gray-500 uppercase text-[10px] tracking-widest mt-1">Tiles Saved</p>
            </div>
            <div className="bg-[#242424] border border-gray-800 p-6 text-center">
              <h4 className="text-[#B88E2F] text-3xl font-bold">03</h4>
              <p className="text-gray-500 uppercase text-[10px] tracking-widest mt-1">Quotes Requested</p>
            </div>
          </div>

          {/* About Section */}
          <div className="md:col-span-2 bg-[#242424] border border-gray-800 p-8 md:p-10">
            <h3 className="text-xl font-bold border-b border-gray-800 pb-4 mb-6 uppercase tracking-widest">
              Account <span className="text-[#B88E2F]">Overview</span>
            </h3>
            <div className="space-y-6">
              <div className="flex justify-between border-b border-gray-800 pb-4">
                <span className="text-gray-500 uppercase text-xs tracking-widest flex items-center gap-2">
                  <FaUserCircle /> Full Name
                </span>
                {/* Name case preserved here as well */}
                <span className="text-white font-medium">
                  {session?.user?.name}
                </span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-4">
                <span className="text-gray-500 uppercase text-xs tracking-widest">Joined On</span>
                <span className="text-white font-medium">October 2023</span>
              </div>
              <div className="flex justify-between border-b border-gray-800 pb-4">
                <span className="text-gray-500 uppercase text-xs tracking-widest">Design Preference</span>
                <span className="text-[#B88E2F] font-bold uppercase text-[10px]">Minimalist Matte</span>
              </div>
            </div>
          </div>
        </div>

      </div>
    </div>
  );
};

export default MyProfile;
