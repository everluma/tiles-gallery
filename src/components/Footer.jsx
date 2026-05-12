"use client";

import Link from "next/link";
import { FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn } from "react-icons/fa";

const Footer = () => {
  return (
    <footer className="bg-[#141414] text-white border-t border-gray-800 pt-20 pb-10 px-6 lg:px-20">
      <div className="max-w-[1400px] mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-12 lg:gap-20">
        
        {/* --- Brand Info --- */}
        <div className="space-y-6">
          <Link href="/" className="flex items-center gap-1 group">
            <span className="text-3xl font-bold tracking-tighter text-[#B88E2F]">TILE</span>
            <span className="text-3xl font-bold tracking-tighter text-white">VERSE</span>
          </Link>
          <p className="text-gray-400 leading-relaxed font-light">
            Crafting luxury spaces with the finest ceramic and marble tiles. 
            Your vision, our masterpiece. Transform your home into a work of art.
          </p>
          <div className="flex gap-4">
            {[FaFacebookF, FaInstagram, FaTwitter, FaLinkedinIn].map((Icon, index) => (
              <a 
                key={index} 
                href="#" 
                className="w-10 h-10 border border-gray-700 flex items-center justify-center rounded-full hover:bg-[#B88E2F] hover:border-[#B88E2F] transition-all duration-300 text-gray-400 hover:text-white"
              >
                <Icon size={16} />
              </a>
            ))}
          </div>
        </div>

        {/* --- Quick Links--- */}
        <div>
          <h4 className="text-[#B88E2F] font-bold uppercase tracking-widest mb-8 text-sm">Quick Navigation</h4>
          <ul className="space-y-4 text-gray-400">
            {["Home", "All Tiles", "New Arrivals", "Showroom Locations", "Installation Guide"].map((item) => (
              <li key={item}>
                <Link href="#" className="hover:text-white hover:translate-x-2 transition-all duration-300 inline-block">
                  {item}
                </Link>
              </li>
            ))}
          </ul>
        </div>

        {/* --- Contact info --- */}
        <div>
          <h4 className="text-[#B88E2F] font-bold uppercase tracking-widest mb-8 text-sm">Contact Us</h4>
          <ul className="space-y-4 text-gray-400">
            <li className="flex flex-col">
              <span className="text-xs uppercase text-gray-600 mb-1">Head Office</span>
              <span>123 Luxury Avenue, Gulshan, Dhaka</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xs uppercase text-gray-600 mb-1">Email Support</span>
              <span className="text-white font-medium">contact@tileverse.com</span>
            </li>
            <li className="flex flex-col">
              <span className="text-xs uppercase text-gray-600 mb-1">Phone</span>
              <span className="text-white font-medium">+880 1234 567890</span>
            </li>
          </ul>
        </div>

        {/* --- Newsletter --- */}
        <div>
          <h4 className="text-[#B88E2F] font-bold uppercase tracking-widest mb-8 text-sm">Newsletter</h4>
          <p className="text-gray-400 mb-6 text-sm">Subscribe to receive exclusive offers and design inspiration.</p>
          <form className="relative">
            <input 
              type="email" 
              placeholder="Your email address" 
              className="w-full bg-transparent border-b border-gray-700 py-3 focus:outline-none focus:border-[#B88E2F] transition-colors placeholder:text-gray-600 text-sm"
            />
            <button className="absolute right-0 bottom-3 text-[#B88E2F] font-bold uppercase text-xs tracking-widest hover:text-white transition-colors">
              Join
            </button>
          </form>
        </div>
      </div>

      {/* --- CopyRight --- */}
      <div className="mt-20 pt-10 border-t border-gray-800/50 flex flex-col md:row justify-between items-center gap-6">
        <p className="text-gray-600 text-xs tracking-widest uppercase text-center">
          © {new Date().getFullYear()} TILEVERSE. ALL RIGHTS RESERVED.
        </p>
        <div className="flex gap-8 text-xs text-gray-600 uppercase tracking-[0.2em]">
          <Link href="#" className="hover:text-white transition-colors">Privacy Policy</Link>
          <Link href="#" className="hover:text-white transition-colors">Terms of Service</Link>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
