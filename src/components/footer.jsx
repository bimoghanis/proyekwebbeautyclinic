import React, { useState } from "react";
import { Link } from "react-router-dom";
import { MapPin, Phone, Mail, Instagram, ChevronDown } from "lucide-react";
import logo from "../assets/logo.png";

const Footer = () => {
  const [openSection, setOpenSection] = useState(null);

  const toggleSection = (section) => {
    setOpenSection(openSection === section ? null : section);
  };

  return (
    <footer className="bg-aldiora-soft text-aldiora-dark font-playfair py-8 border-t border-white/20">
      <div className="container mx-auto px-6">
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 text-sm">
          {/* === KOLOM 1: LOGO === */}
          {/* Ubah 'items-center' jadi 'items-start' agar logo rata kiri di HP */}
          <div className="flex flex-col items-start space-y-3">
            <div className="flex items-center gap-2">
              <img
                src={logo}
                alt="Aldiora Logo"
                className="h-15 w-auto object-contain"
              />
            </div>

            <div className="flex items-center gap-2 mt-1">
              <a
                href="https://www.instagram.com/aldioraclinic/"
                className="p-2 bg-white/40 rounded-full hover:bg-white/60 transition"
              >
                <Instagram size={18} />
              </a>
              <a
                href="#"
                className="p-2 bg-white/40 rounded-full hover:bg-white/60 transition"
              >
                <svg
                  xmlns="http://www.w3.org/2000/svg"
                  width="18"
                  height="18"
                  viewBox="0 0 24 24"
                  fill="none"
                  stroke="currentColor"
                  strokeWidth="2"
                  strokeLinecap="round"
                  strokeLinejoin="round"
                >
                  <path d="M3 21l1.65-3.8a9 9 0 1 1 3.4 2.9L3 21" />
                  <path d="M9 10a.5.5 0 0 0 1 0V9a.5.5 0 0 0-1 0v1a5 5 0 0 0 5 5h1a.5.5 0 0 0 0-1h-1a.5.5 0 0 0 0 1" />
                </svg>
              </a>
            </div>
          </div>

          {/* === KOLOM 2: QUICK LINKS === */}
          {/* Mobile: items-start (Kiri). Desktop: items-center (Tengah - Sesuai request sebelumnya) */}
          <div className="flex flex-col items-start md:items-center w-full md:w-auto">
            <button
              onClick={() => toggleSection("quickLinks")}
              // text-left agar tulisan 'Quick Links' di kiri
              className="flex justify-between items-center w-full md:w-auto py-2 md:py-0 font-bold text-base focus:outline-none border-t border-aldiora-dark/10 md:border-none md:mb-3 text-left"
            >
              <span>Quick Links</span>
              <ChevronDown
                size={16}
                className={`md:hidden transition-transform duration-300 ${
                  openSection === "quickLinks" ? "rotate-180" : ""
                }`}
              />
            </button>

            {/* List Menu: text-left (HP) & md:text-center (Laptop) */}
            <ul
              className={` text-left md:text-left overflow-hidden transition-all duration-300 ease-in-out w-full md:w-auto
              ${
                openSection === "quickLinks"
                  ? "max-h-40 opacity-100 mt-2"
                  : "max-h-0 opacity-0 md:max-h-none md:opacity-100 md:mt-0"
              }
            `}
            >
              <li>
                <Link to="/" className="hover:underline block py-1">
                  Product
                </Link>
              </li>
              <li>
                <Link to="/konsultasi" className="hover:underline block py-1">
                  Consul
                </Link>
              </li>
              <li>
                <Link to="/about" className="hover:underline block py-1">
                  About
                </Link>
              </li>
              <li>
                <Link to="/contact" className="hover:underline block py-1">
                  Contact Us
                </Link>
              </li>
            </ul>
          </div>

          {/* === KOLOM 3: CONTACT === */}
          {/* items-start (Kiri Selamanya) */}
          <div className="flex flex-col items-start md:ml-auto md:pl-10 w-full md:w-auto">
            <button
              onClick={() => toggleSection("contact")}
              // text-left
              className="flex justify-between items-center w-full md:w-auto py-2 md:py-0 font-bold text-base focus:outline-none border-t border-b border-aldiora-dark/10 md:border-none md:mb-3 text-left"
            >
              <span>Contact</span>
              <ChevronDown
                size={16}
                className={`md:hidden transition-transform duration-300 ${
                  openSection === "contact" ? "rotate-180" : ""
                }`}
              />
            </button>

            <ul
              className={`space-y-2 text-left overflow-hidden transition-all duration-300 ease-in-out w-full md:w-auto
              ${
                openSection === "contact"
                  ? "max-h-60 opacity-100 mt-2"
                  : "max-h-0 opacity-0 md:max-h-none md:opacity-100 md:mt-0"
              }
            `}
            >
              {/* ITEM ALAMAT: justify-start (Kiri) */}
              <li className="flex flex-col md:flex-row items-start gap-2 justify-start">
                <MapPin className="mt-0.5 flex-shrink-0" size={16} />
                <span className="leading-tight">
                  Jl. Wolter Monginsidi No.88P,
                  <br /> Petogogan, Kebayoran Baru
                </span>
              </li>

              {/* ITEM TELEPON: justify-start (Kiri) */}
              <li className="flex items-center gap-2 justify-start">
                <Phone size={16} />
                <span>08112233445</span>
              </li>

              {/* ITEM EMAIL: justify-start (Kiri) */}
              <li className="flex items-center gap-2 justify-start">
                <Mail size={16} />
                <span>Aldiora@email.com</span>
              </li>
            </ul>
          </div>
        </div>

        {/* COPYRIGHT */}
        <div className="border-t border-aldiora-dark/10 mt-8 pt-4 text-center text-[10px] font-medium opacity-80">
          &copy; {new Date().getFullYear()} Aldiora Clinic. All rights reserved.
        </div>
      </div>
    </footer>
  );
};

export default Footer;
