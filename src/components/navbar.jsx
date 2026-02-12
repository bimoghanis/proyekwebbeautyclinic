import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);

  useEffect(() => {
    const handleScroll = () => {
      // Deteksi jika scroll lebih dari 20px
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };

    window.addEventListener("scroll", handleScroll);
    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  }, []);

  return (
    <nav
      className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
        isScrolled
          ? "bg-[#15503E]/70 backdrop-blur-md border-white/10 py-2 shadow-lg"
          : "bg-[#15503E] border-transparent py-3"
      }`}>
      {/* PERUBAHAN ADA DI SINI:
         Saya tambahkan md:px-12 dan lg:px-24 agar di layar besar lebih masuk ke tengah
      */}
      <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center text-[#FAE3C3]">
        {/* 1. LOGO */}
        <Link
          to="/"
          className="text-2xl font-playfair font-bold tracking-wider">
          ALDIORA
        </Link>

        {/* 2. MENU */}
        <div className="hidden md:flex gap-8 text-sm font-bold uppercase tracking-widest">
          <Link to="/" className="hover:text-white transition">
            Home
          </Link>
          <Link to="/konsultasi" className="hover:text-white transition">
            Consultation
          </Link>
          <Link to="/about" className="hover:text-white transition">
            About
          </Link>
          <Link to="/contact" className="hover:text-white transition">
            Contact
          </Link>
        </div>
      </div>
    </nav>
  );
};

export default Navbar;
