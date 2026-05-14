"use client";

import Link from "next/link";
import { FaArrowLeft, FaCloudUploadAlt, FaUserEdit } from "react-icons/fa";
import { authClient } from "@/lib/auth-client";
import { useState, useEffect } from "react";
import { useRouter } from "next/navigation";
import toast, { Toaster } from "react-hot-toast";

const UpdateProfile = () => {
  const router = useRouter();
  const { data: session, isPending } = authClient.useSession();
  const { refetch } = authClient.useSession(); // Destructuring refetch for sync fix

  const [name, setName] = useState("");
  const [image, setImage] = useState("");
  const [loading, setLoading] = useState(false);

  useEffect(() => {
    if (session?.user) {
      setName(session.user.name || "");
      setImage(session.user.image || "");
    }
  }, [session]);

  const handleUpdate = async (e) => {
    e.preventDefault();
    if (!name.trim()) {
      return toast.error("Name cannot be empty");
    }

    setLoading(true);
    try {
      const { error } = await authClient.updateUser({
        name,
        image,
      });

      if (error) {
        toast.error(error.message || "Update failed");
      } else {
        // Crucial Step: Refetching updates Navbar and Profile data instantly across components
        await refetch();
        toast.success("Profile updated successfully!");
        
        setTimeout(() => {
          router.push("/my-profile");
          router.refresh();
        }, 1200);
      }
    } catch (err) {
      toast.error("An unexpected error occurred");
    } finally {
      setLoading(false);
    }
  };

  if (isPending) {
    return (
      <div className="min-h-screen bg-[#1B1B1B] flex items-center justify-center">
        <div className="w-10 h-10 border-4 border-[#B88E2F] border-t-transparent rounded-full animate-spin"></div>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#1B1B1B] text-white flex items-center justify-center p-6 py-20">
      <Toaster position="top-center" />
      <div className="max-w-2xl w-full">
        
        {/* --- back profile button --- */}
        <Link 
          href="/my-profile" 
          className="flex items-center gap-2 text-gray-500 hover:text-[#B88E2F] transition-colors mb-8 uppercase text-xs tracking-widest font-bold"
        >
          <FaArrowLeft /> Back to Profile
        </Link>

        {/* --- Challenge Requirement: Form with exactly image & Name inputs --- */}
        <div className="bg-[#242424] border border-gray-800 shadow-2xl overflow-hidden rounded-sm">
          
          <div className="bg-[#141414] p-8 border-b border-gray-800 text-center">
            <h1 className="text-3xl font-bold uppercase tracking-widest mb-2">
              Update <span className="text-[#B88E2F]">Information</span>
            </h1>
            <p className="text-gray-500 text-xs tracking-widest uppercase">Refine your identity in the Verse</p>
          </div>

          <div className="p-8 md:p-12">
            <form className="space-y-8" onSubmit={handleUpdate}>
              
              {/* Input 1: Name Field */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#B88E2F] font-bold">Full Name</label>
                <div className="relative">
                  <span className="absolute left-4 top-4 text-gray-600">
                    <FaUserEdit />
                  </span>
                  <input
                    type="text"
                    value={name}
                    onChange={(e) => setName(e.target.value)}
                    placeholder="Enter your new name"
                    className="w-full bg-[#1B1B1B] border border-gray-700 py-4 pl-12 pr-5 text-white focus:outline-none focus:border-[#B88E2F] transition-all rounded-sm placeholder:text-gray-700 text-sm"
                  />
                </div>
              </div>

              {/* Input 2: Image URL Field */}
              <div className="space-y-2">
                <label className="text-[10px] uppercase tracking-[0.2em] text-[#B88E2F] font-bold">New Image URL</label>
                <div className="relative">
                  <span className="absolute left-4 top-4 text-gray-600">
                    <FaCloudUploadAlt />
                  </span>
                  <input
                    type="url"
                    value={image}
                    onChange={(e) => setImage(e.target.value)}
                    placeholder="https://example.com"
                    className="w-full bg-[#1B1B1B] border border-gray-700 py-4 pl-12 pr-5 text-white focus:outline-none focus:border-[#B88E2F] transition-all rounded-sm placeholder:text-gray-700 text-sm"
                  />
                </div>
                <p className="text-[9px] text-gray-600 italic mt-2 uppercase tracking-wider text-right">Provide a valid image link for better visual</p>
              </div>

              {/* Update Button */}
              <button 
                type="submit" 
                disabled={loading}
                className="w-full bg-[#B88E2F] hover:bg-[#a07b28] text-white py-4 font-bold uppercase tracking-widest transition-all shadow-xl active:scale-95 text-xs mt-4 disabled:opacity-50"
              >
                {loading ? "Updating..." : "Update Information"}
              </button>
            </form>
          </div>
        </div>

        {/* --- footer line --- */}
        <p className="text-center mt-8 text-gray-700 text-[10px] tracking-[0.4em] uppercase">
          ✦ Quality ✦ Durability ✦ Aesthetics ✦
        </p>
      </div>
    </div>
  );
};

export default UpdateProfile;
