import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Menu, X } from "lucide-react";
import logo from "../assets/logo.png";

const Navbar = () => {
  const [isOpen, setIsOpen] = useState(false);

  const toggleMenu = () => {
    setIsOpen(!isOpen);
  };

  return (
    <nav className="bg-white text-aldiora font-playfair border-b border-aldiora sticky top-0 z-50">
      {" "}
      <div className="container mx-auto px-5 py-5 flex justify-between items-center">
        <img
          src={logo}
          alt="Logo Aldiora"
          className="h-14 w-auto object-contain"
        />{" "}
        <ul className="hidden md:flex space-x-8 font-medium">
          <li>
            <Link to="/" className="hover:text-navFont transition">
              Dashboard
            </Link>
          </li>
          <li>
            <Link to="/konsultasi" className="hover:text-navFont transition">
              Konsultasi
            </Link>
          </li>
          <li>
            <Link to="/about" className="hover:text-navFont transition">
              About
            </Link>
          </li>
          <li>
            <Link to="/contact" className="hover:text-navFont transition">
              Contact Us
            </Link>
          </li>
        </ul>
        {/* Tombol Hamburger (Muncul di HP, Hidden di Layar Besar 'md') */}
        <button onClick={toggleMenu} className="md:hidden focus:outline-none">
          {isOpen ? <X size={28} /> : <Menu size={28} />}
        </button>
      </div>
      {/* Menu Mobile Dropdown (Muncul jika isOpen = true) */}
      {isOpen && (
        <div className="md:hidden bg-white absolute border-aldiora sticky top-0 z-50 w-full left-0 top-full shadow-lg">
          <hr className="border-aldiora opacity-50" />
          <ul className="flex flex-col space-y-4 p-4">
            <li>
              <Link
                to="/"
                onClick={toggleMenu}
                className="block hover:text-navFont p-2 rounded"
              >
                Dashboard
              </Link>
            </li>
            <li>
              <Link
                to="/konsultasi"
                onClick={toggleMenu}
                className="block hover:text-navFont p-2 rounded"
              >
                Konsultasi
              </Link>
            </li>
            <li>
              <Link
                to="/about"
                onClick={toggleMenu}
                className="block hover:text-navFont p-2 rounded"
              >
                About
              </Link>
            </li>
            <li>
              <Link
                to="/contact"
                onClick={toggleMenu}
                className="block hover:text-navFont p-2 rounded"
              >
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
