import React, { useState } from "react";
import { Link, useLocation } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);
  const location = useLocation();

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  const navLinkClass = (path) => `
    hover:text-yellow-200 transition-colors duration-300 
    uppercase tracking-widest text-xs font-semibold
    ${location.pathname === path ? "text-yellow-200 border-b border-yellow-200 pb-1" : "text-white"}
  `;

  return (
    <nav className="bg-[#15503E] sticky top-0 z-50 shadow-md">
      {/* PERUBAHAN ADA DI SINI:
         1. 'container mx-auto': Menjaga konten tetap di tengah.
         2. 'max-w-7xl': Membatasi agar konten tidak terlalu lebar di layar super besar (Ultra Wide).
         3. 'px-6': Padding standar di HP.
         4. 'md:px-16': Padding diperbesar di Laptop (Logo geser ke tengah dikit).
         5. 'lg:px-28': Padding diperbesar lagi di Monitor Besar (Logo makin geser ke tengah).
      */}
      <div className="container mx-auto max-w-7xl px-6 md:px-16 lg:px-28 py-4 flex justify-between items-center">
        
        {/* === LOGO === */}
        <Link to="/">
          <img
            src={logo}
            alt="Logo Aldiora"
            className="h-12 w-auto object-contain brightness-0 invert"
          />
        </Link>

        {/* === DESKTOP MENU === */}
        <ul className="hidden md:flex items-center space-x-10 font-sans">
          <li>
            <Link to="/" className={navLinkClass("/")}>
              Home
            </Link>
          </li>
          <li>
            <Link to="/konsultasi" className={navLinkClass("/konsultasi")}>
              Consul
            </Link>
          </li>
          <li>
            <Link to="/about" className={navLinkClass("/about")}>
              About
            </Link>
          </li>
          <li>
            <Link 
              to="/contact" 
              className="px-6 py-2 border border-white text-white uppercase tracking-widest text-xs font-semibold hover:bg-white hover:text-[#15503E] transition-all duration-300"
            >
              Contact
            </Link>
          </li>
        </ul>

        {/* === TOMBOL HAMBURGER (Mobile) === */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none text-white">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>

      {/* === MOBILE MENU DROPDOWN === */}
      {isOpen && (
        <div className="md:hidden bg-white absolute w-full left-0 top-full shadow-xl animate-slideDown border-t border-gray-100">
          <ul className="flex flex-col p-6 space-y-4 text-[#15503E] font-medium text-sm tracking-wide uppercase">
            <li>
              <Link to="/" onClick={toggleMenu} className="block hover:bg-gray-100 p-3 rounded">
                Home
              </Link>
            </li>
            <li>
              <Link to="/konsultasi" onClick={toggleMenu} className="block hover:bg-gray-100 p-3 rounded">
                Consul
              </Link>
            </li>
            <li>
              <Link to="/about" onClick={toggleMenu} className="block hover:bg-gray-100 p-3 rounded">
                About
              </Link>
            </li>
            <li>
              <Link to="/contact" onClick={toggleMenu} className="block bg-[#15503E] text-white p-3 rounded text-center">
                Contact Us
              </Link>
            </li>
          </ul>
        </div>
      )}
    </nav>
  );
};

export default Navbar;