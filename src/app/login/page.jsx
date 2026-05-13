"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";

const Login = () => {
  const router = useRouter();
  
  // memory
  const [email, setEmail] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  // login funtion 
  const handleLogin = async (e) => {
    e.preventDefault();
    
    if (!email || !password) {
      return toast.error("Please enter both email and password");
    }

    setLoading(true);
    const { data, error } = await authClient.signIn.email({
      email,
      password,
    });

    setLoading(false);

    if (error) {
      
      toast.error(error.message || "Invalid email or password");
    } else {
      toast.success("Login Successful!");
      

      // code for back to hame page
      setTimeout(() => {
        router.push("/");
        router.refresh();
      }, 1500);
    }
  };

  // google login handelar
  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/"
    });
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center p-6 md:p-10">


      {/*toast notification */}
      <Toaster position="top-center" reverseOrder={false} />
      
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

        {/* --- Form section --- */}
        <div className="p-8 md:p-10">
          <div className="text-center mb-10">
            <h1 className="text-3xl font-bold text-white tracking-tighter mb-2 uppercase">Welcome Back</h1>
            <div className="h-[2px] w-12 bg-[#B88E2F] mx-auto"></div>
          </div>

          
          <form onSubmit={handleLogin} className="space-y-6">
            {/* Email Input */}
            <div>
              <input 
                type="email" 
                placeholder="Email Address" 
                value={email}
                onChange={(e) => setEmail(e.target.value)}
                className="w-full bg-[#1B1B1B] border border-gray-700 py-4 px-5 text-white focus:outline-none focus:border-[#B88E2F] transition-all rounded-sm placeholder:text-gray-600 text-sm" 
              />
            </div>

            {/* Password Input */}
            <div>
              <input 
                type="password" 
                placeholder="Password" 
                value={password}
                onChange={(e) => setPassword(e.target.value)}
                className="w-full bg-[#1B1B1B] border border-gray-700 py-4 px-5 text-white focus:outline-none focus:border-[#B88E2F] transition-all rounded-sm placeholder:text-gray-600 text-sm" 
              />
              {/* forgote password section 
              <div className="text-right mt-2">
                <Link href="#" className="text-[10px] uppercase tracking-widest text-gray-500 hover:text-[#B88E2F]">Forgot Password?</Link>
              </div> 
              */}
            </div>

            {/* Login Button */}
            <button 
              type="submit"
              disabled={loading}
              className="w-full bg-[#B88E2F] hover:bg-[#a07b28] text-white py-4 font-bold uppercase tracking-widest transition-all shadow-lg active:scale-95 text-xs disabled:opacity-50"
            >
              {loading ? "Signing In..." : "Sign In"}
            </button>
          </form>

          {/* Divider */}
          <div className="flex items-center gap-4 py-2 mt-6">
            <div className="flex-1 h-[1px] bg-gray-800"></div>
            <span className="text-gray-600 text-[10px] uppercase tracking-widest font-bold">Or</span>
            <div className="flex-1 h-[1px] bg-gray-800"></div>
          </div>

          {/* Google Login */}
          <button 
            type="button"
            onClick={handleGoogleLogin}
            className="w-full border border-gray-700 hover:bg-white hover:text-black text-gray-300 py-4 flex items-center justify-center gap-3 transition-all font-bold uppercase tracking-widest text-[10px]"
          >
            <FaGoogle className="text-[#B88E2F]" /> Login With Google
          </button>

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
