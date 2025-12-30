import React from "react";
import { Outlet } from "react-router-dom";
import Navbar from "./navbar";
import Footer from "./footer";


const layout = () => {
  return (
    <div className="flex flex-col min-h-screen">
      <Navbar />
      <main className="flex-grow container mx-auto p-6">
        {/* Konten halaman akan dirender di sini */}
        <Outlet />
      </main>
      <Footer />
    </div>
  );
};

export default layout;
