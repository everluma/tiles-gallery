"use client";

import { useState } from "react";
import Link from "next/link";
import { useRouter } from "next/navigation";
import { FaGoogle } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import toast, { Toaster } from "react-hot-toast";

const Register = () => {
  const router = useRouter();
  const [name, setName] = useState("");
  const [email, setEmail] = useState("");
  const [photoUrl, setPhotoUrl] = useState("");
  const [password, setPassword] = useState("");
  const [loading, setLoading] = useState(false);

  const handleRegister = async (e) => {
    e.preventDefault();
    if (!name || !email || !password) {
      return toast.error("Please fill all required fields");
    }
    
    setLoading(true);
    const { data, error } = await authClient.signUp.email({
      email,
      password,
      name,
      image: photoUrl || "ibb.co",
    });

    setLoading(false);
    if (error) {
      toast.error(error.message || "Registration failed");
    } else {
      toast.success("Registration Successful!");
      
      setTimeout(() => router.push("/login"), 1500);
    }
  };

  const handleGoogleLogin = async () => {
    await authClient.signIn.social({
      provider: "google",
      callbackURL: "/"
    });
  };

  return (
    <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center p-6 py-20">
      <Toaster position="top-center" />
      <div className="w-full max-w-lg bg-[#242424] shadow-2xl overflow-hidden border border-gray-800 rounded-sm">
        
       <div className="relative h-48 w-full overflow-hidden">
          <img 
            src="/images/magic-girl-login.jpeg" 
            alt="Magic Registration" 
            className="w-full h-full object-cover opacity-80"
          />
          <div className="absolute inset-0 bg-gradient-to-t from-[#242424] to-transparent"></div>
          <div className="absolute bottom-4 left-8 text-white">
            <h2 className="text-xl font-bold">Start Your Journey</h2>
            <p className="text-[#B88E2F] text-[10px] uppercase tracking-widest">Join the TileVerse community</p>
          </div>
        </div>


        <div className="p-8 md:p-12">
          <h1 className="text-3xl font-bold text-white text-center mb-8 uppercase tracking-tighter">Create Account</h1>
          
          <form onSubmit={handleRegister} className="space-y-5">
            <input type="text" placeholder="Full Name" value={name} onChange={(e) => setName(e.target.value)} className="w-full bg-[#1B1B1B] border border-gray-700 py-3.5 px-5 text-white focus:border-[#B88E2F] outline-none text-sm" />
            <input type="email" placeholder="Email Address" value={email} onChange={(e) => setEmail(e.target.value)} className="w-full bg-[#1B1B1B] border border-gray-700 py-3.5 px-5 text-white focus:border-[#B88E2F] outline-none text-sm" />
            <input type="url" placeholder="Photo URL (Optional)" value={photoUrl} onChange={(e) => setPhotoUrl(e.target.value)} className="w-full bg-[#1B1B1B] border border-gray-700 py-3.5 px-5 text-white focus:border-[#B88E2F] outline-none text-sm" />
            <input type="password" placeholder="Password" value={password} onChange={(e) => setPassword(e.target.value)} className="w-full bg-[#1B1B1B] border border-gray-700 py-3.5 px-5 text-white focus:border-[#B88E2F] outline-none text-sm" />

            <button type="submit" disabled={loading} className="w-full bg-[#B88E2F] hover:bg-[#a07b28] text-white py-4 font-bold uppercase tracking-widest text-xs mt-4 disabled:opacity-50">
              {loading ? "Registering..." : "Register Now"}
            </button>
          </form>

          <div className="flex items-center gap-4 py-6">
            <div className="flex-1 h-[1px] bg-gray-800"></div>
            <span className="text-gray-600 text-[10px] uppercase tracking-widest">Or</span>
            <div className="flex-1 h-[1px] bg-gray-800"></div>
          </div>

          <button onClick={handleGoogleLogin} className="w-full border border-gray-700 hover:bg-white hover:text-black text-gray-300 py-3.5 flex items-center justify-center gap-3 font-bold uppercase text-[10px] tracking-widest">
            <FaGoogle className="text-[#B88E2F]" /> Register with Google
          </button>

          <p className="text-center mt-8 text-gray-500 text-xs">
            Already have an account? <Link href="/login" className="text-[#B88E2F] font-bold hover:underline">Login Here</Link>
          </p>
        </div>
      </div>
    </div>
  );
};

export default Register;
