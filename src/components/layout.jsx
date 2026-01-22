import React from "react";
import { Outlet, useLocation } from "react-router-dom";
import Navbar from "./Navbar";
import Footer from "./Footer";

const Layout = () => {
  const location = useLocation();

  // Daftar halaman yang memiliki Footer sendiri (karena efek scroll khusus)
  // Saat ini hanya "/about"
  const isAboutPage = location.pathname === "/about";

  return (
    <div className="flex flex-col min-h-screen">
      {/* Navbar selalu muncul (Sticky) */}
      <Navbar />

      <main className="flex-grow w-full">
        <Outlet />
      </main>

      {/* Logic Smart Footer:
          Hanya tampilkan Footer global jika BUKAN di halaman About.
          Karena About sudah punya footer sendiri di dalam snap-scroll nya.
      */}
      {!isAboutPage && <Footer />}
    </div>
  );
};

export default Layout;
