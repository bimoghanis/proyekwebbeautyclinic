import React, { useState, useEffect } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
// 1. IMPORT LOGO
import logoImage from "../assets/Logo2.png";

const Navbar = () => {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isOpen, setIsOpen] = useState(false);

  // Logic Scroll
  useEffect(() => {
    const handleScroll = () => {
      if (window.scrollY > 20) {
        setIsScrolled(true);
      } else {
        setIsScrolled(false);
      }
    };
    window.addEventListener("scroll", handleScroll);
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  return (
    <>
      <nav
        className={`fixed top-0 left-0 w-full z-50 transition-all duration-500 border-b ${
          isScrolled
            ? "bg-[#15503E]/90 backdrop-blur-md border-white/10 py-1 shadow-lg"
            : "bg-[#15503E] border-transparent py-2"
        }`}>
        <div className="container mx-auto px-6 md:px-12 lg:px-24 flex justify-between items-center text-[#FAE3C3]">
          {/* 1. LOGO (MENGGUNAKAN IMAGE MASKING) */}
          <Link
            to="/"
            className="z-50 relative flex items-center"
            onClick={() => setIsOpen(false)}>
            {/* TEKNIK CSS MASKING:
                Div ini background-nya warna krem (#FAE3C3).
                Lalu kita 'potong' div ini sesuai bentuk Logo2.png.
                Hasilnya: Logo berbentuk gambar tapi warnanya bisa diatur lewat CSS.
            */}
            <div
              className="bg-[#FAE3C3] h-12 w-12" // Ubah h-12 w-12 jika ingin memperbesar/memperkecil logo
              style={{
                maskImage: `url(${logoImage})`,
                maskSize: "contain",
                maskRepeat: "no-repeat",
                maskPosition: "center left", // Logo rata kiri
                WebkitMaskImage: `url(${logoImage})`, // Support Safari/Chrome
                WebkitMaskSize: "contain",
                WebkitMaskRepeat: "no-repeat",
                WebkitMaskPosition: "center left",
              }}
            />
          </Link>

          {/* 2. MENU DESKTOP (Hidden di HP) */}
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
            {/* <Link to="/contact" className="hover:text-white transition">
              Contact
            </Link> */}
          </div>

          {/* 3. TOMBOL HAMBURGER (Visible di HP) */}
          <button
            className="md:hidden z-50 text-[#FAE3C3] focus:outline-none"
            onClick={() => setIsOpen(!isOpen)}>
            {isOpen ? <X size={28} /> : <Menu size={28} />}
          </button>

          {/* 4. MENU MOBILE DROPDOWN (Overlay) */}
          <div
            className={`fixed inset-0 bg-[#15503E] flex flex-col items-center justify-center gap-8 text-xl font-bold uppercase tracking-widest transition-transform duration-500 ease-in-out md:hidden ${
              isOpen
                ? "translate-y-0 opacity-100"
                : "-translate-y-full opacity-0"
            }`}
            style={{ top: "0", left: "0", height: "100vh", width: "100%" }}>
            {/* Link Menu Mobile */}
            {["Home", "Konsultasi", "About"].map((item) => {
              const path = item === "Home" ? "/" : `/${item.toLowerCase()}`;
              return (
                <Link
                  key={item}
                  to={path}
                  onClick={() => setIsOpen(false)} // Tutup menu setelah klik
                  className="text-[#FAE3C3] hover:text-white transition-transform hover:scale-110">
                  {item}
                </Link>
              );
            })}
          </div>
        </div>
      </nav>
    </>
  );
};

export default Navbar;
