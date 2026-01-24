import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"; // Sesuaikan casing folder jika perlu (misal ./components/Layout)

// Import Halaman
import Dashboard from "./pages/dashboard";
import Konsultasi from "./pages/consultation"; // Halaman Menu Utama
import ServiceDetail from "./pages/ServiceDetail"; // <--- Halaman Detail Baru (Import ini)
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route Induk menggunakan Layout */}
        <Route path="/" element={<Layout />}>
          
          {/* 1. Dashboard (Home) */}
          <Route index element={<Dashboard />} />

          {/* 2. Konsultasi (Menu Utama) */}
          <Route path="konsultasi" element={<Konsultasi />} />

          {/* 3. Detail Konsultasi (Dynamic Route) */}
          {/* :slug akan menangkap nama treatment (misal: /konsultasi/doctor-consultation) */}
          <Route path="konsultasi/:slug" element={<ServiceDetail />} />

          {/* 4. Halaman Lain */}
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
          
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;