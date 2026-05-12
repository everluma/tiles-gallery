"use client";

import Link from "next/link";
import { FaGoogle } from "react-icons/fa";

const Login = () => {
  return (
    <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center p-6 md:p-10">
      <div className="w-full max-w-md bg-[#242424] shadow-[0_20px_50px_rgba(0,0,0,0.5)] overflow-hidden border border-gray-800 rounded-sm">
        
        {/* --- image --- */}
        <div className="relative h-64 md:h-72 w-full overflow-hidden">
          <img 
            src="/images/magic-girl-login.jpeg" 
            alt="Magic Transformation" 
            className="w-full h-full object-cover opacity-90 transition-transform duration-1000 hover:scale-110"
          />
         
          <div className="absolute inset-0 bg-gradient-to-t from-[#242424] to-transparent"></div>
          <div className="absolute bottom-4 left-6">
            <h2 className="text-white text-2xl font-bold tracking-tight">Magical Spaces</h2>
            <p className="text-[#B88E2F] text-xs uppercase tracking-widest font-semibold">Transforming homes with a touch</p>
          </div>
        </div>

        {/* --- FORM SECTION --- */}
        <div className="p-8 md:p-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white tracking-tighter mb-2 uppercase">Welcome Back</h1>
            <div className="h-[2px] w-12 bg-[#B88E2F] mx-auto"></div>
          </div>

          <div className="space-y-6">
            {/* Email Input */}
            <div>
              <input
                type="email"
                placeholder="Email Address"
                className="w-full bg-[#1B1B1B] border border-gray-700 py-4 px-5 text-white focus:outline-none focus:border-[#B88E2F] transition-all rounded-sm placeholder:text-gray-600 text-sm"
              />
            </div>

            {/* Password Input */}
            <div>
              <input
                type="password"
                placeholder="Password"
                className="w-full bg-[#1B1B1B] border border-gray-700 py-4 px-5 text-white focus:outline-none focus:border-[#B88E2F] transition-all rounded-sm placeholder:text-gray-600 text-sm"
              />
              <div className="text-right mt-2">
                <Link href="#" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-[#B88E2F]">Forgot Password?</Link>
              </div>
            </div>

            {/* Login Button */}
            <button className="w-full bg-[#B88E2F] hover:bg-[#a07b28] text-white py-4 font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 text-xs">
              Sign In
            </button>

            {/* Divider */}
            <div className="flex items-center gap-4 py-2">
              <div className="flex-1 h-[1px] bg-gray-800"></div>
              <span className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">Or Continue With</span>
              <div className="flex-1 h-[1px] bg-gray-800"></div>
            </div>

            {/* Google Login */}
            <button className="w-full border border-gray-700 hover:bg-white hover:text-black text-gray-300 py-4 flex items-center justify-center gap-3 transition-all font-bold uppercase tracking-widest text-[10px]">
              <FaGoogle className="text-[#B88E2F]" />
              Google Authentication
            </button>
          </div>

          {/* Footer Link */}
          <p className="text-center mt-10 text-gray-500 text-xs tracking-wide">
            New to TileVerse?{" "}
            <Link href="/register" className="text-[#B88E2F] font-bold hover:underline ml-1">
              Create Account
            </Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Login;
