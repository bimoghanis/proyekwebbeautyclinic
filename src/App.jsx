import React, { Suspense, lazy } from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout"; 

// --- 1. UBAH IMPORT MENJADI LAZY ---
// Kita gunakan lazy() agar halaman hanya didownload saat user membukanya.
const Dashboard = lazy(() => import("./pages/dashboard"));
const Konsultasi = lazy(() => import("./pages/consultation"));
const ServiceDetail = lazy(() => import("./pages/ServiceDetail"));
const About = lazy(() => import("./pages/about"));
const Contact = lazy(() => import("./pages/contact"));

// --- 2. KOMPONEN LOADING ---
// Ini akan muncul selama 0.5 - 1 detik saat browser mengambil data halaman baru
const LoadingScreen = () => (
  <div className="w-full min-h-[80vh] flex flex-col items-center justify-center bg-white">
    {/* Kamu bisa ganti ini dengan Spinner/Logo berputar */}
    <div className="w-12 h-12 border-4 border-[#15503E]/20 border-t-[#15503E] rounded-full animate-spin mb-4"></div>
    <p className="text-[#15503E] font-medium animate-pulse">Memuat Halaman...</p>
  </div>
);

function App() {
  return (
    // Gunakan HashRouter di sini
    <HashRouter>
      <Routes>
        {/* Layout TIDAK perlu di-lazy load agar Navbar/Footer muncul duluan (UX lebih bagus) */}
        <Route path="/" element={<Layout />}>
          
          {/* --- 3. BUNGKUS DENGAN SUSPENSE --- */}
          {/* Suspense membungkus rute anak. Jika halaman belum siap, tampilkan LoadingScreen */}
          <Route index element={
            <Suspense fallback={<LoadingScreen />}>
              <Dashboard />
            </Suspense>
          } />

          <Route path="konsultasi" element={
            <Suspense fallback={<LoadingScreen />}>
              <Konsultasi />
            </Suspense>
          } />

          <Route path="konsultasi/:slug" element={
            <Suspense fallback={<LoadingScreen />}>
              <ServiceDetail />
            </Suspense>
          } />

          <Route path="about" element={
            <Suspense fallback={<LoadingScreen />}>
              <About />
            </Suspense>
          } />

          <Route path="contact" element={
            <Suspense fallback={<LoadingScreen />}>
              <Contact />
            </Suspense>
          } />
          
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
