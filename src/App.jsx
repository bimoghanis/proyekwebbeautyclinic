import React from "react";
// GANTI BrowserRouter JADI HashRouter
import { HashRouter, Routes, Route } from "react-router-dom";
import Layout from "./components/layout";
import Dashboard from "./pages/dashboard";
import Konsultasi from "./pages/consultation";
import ServiceDetail from "./pages/ServiceDetail";
import About from "./pages/about";
import Contact from "./pages/contact";

function App() {
  return (
    // Gunakan HashRouter di sini
    <HashRouter>
      <Routes>
        <Route path="/" element={<Layout />}>
          <Route index element={<Dashboard />} />
          <Route path="konsultasi" element={<Konsultasi />} />
          <Route path="konsultasi/:slug" element={<ServiceDetail />} />
          <Route path="about" element={<About />} />
          <Route path="contact" element={<Contact />} />
        </Route>
      </Routes>
    </HashRouter>
  );
}

export default App;
