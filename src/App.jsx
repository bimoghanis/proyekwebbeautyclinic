import React from "react";
import { BrowserRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import Konsultasi from "./pages/consultation";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    <BrowserRouter>
      <Routes>
        {/* Route Induk menggunakan Layout */}
        <Route path="/" element={<Layout />}>
          {/* Route Anak (akan muncul di posisi <Outlet />) */}
          <Route index element={<Dashboard />} />
          <Route path="konsultasi" element={<Konsultasi />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </BrowserRouter>
  );
}

export default App;
