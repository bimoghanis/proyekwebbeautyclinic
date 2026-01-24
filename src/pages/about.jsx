import React from "react";
import { Quote } from "lucide-react";
import Footer from "../components/Footer";

const About = () => {
  return (
    // CONTAINER UTAMA (Scroll Normal)
    <div className="w-full overflow-x-hidden font-sans">
      
      {/* =========================================
          1. HEADER (EMPOWERING CONFIDENCE)
          Background: Krem (#FAE3C3)
      ========================================== */}
      {/* Menggunakan min-h-[80vh] agar header cukup tinggi tapi tidak memaksa full screen */}
      <section className="min-h-[80vh] w-full bg-[#FAE3C3] flex items-center justify-center px-6 relative py-24">
        <div className="absolute top-0 right-0 w-64 h-64 bg-white/20 rounded-bl-full filter blur-3xl"></div>
        
        <div className="container mx-auto max-w-4xl text-center relative z-10">
          <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 text-[#15503E]/60 animate-fadeIn">
            About Aldiora
          </p>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-[#15503E] mb-8 leading-tight">
            Empowering Confidence
          </h1>
          <p className="text-[#15503E]/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto font-light">
            Kami percaya bahwa kecantikan sejati bermula dari rasa percaya diri.
            Dengan teknologi dermatologi terkini dan sentuhan personal yang
            hangat, kami hadir untuk merawat versi terbaik dari diri Anda.
          </p>
        </div>
      </section>

      {/* =========================================
          2. QUOTE SECTION (FILOSOFI)
          Background: Putih (#FFFFFF)
      ========================================== */}
      <section className="w-full bg-white flex items-center justify-center px-6 py-24 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <Quote size={48} className="text-[#15503E] mx-auto mb-8 opacity-20 rotate-180" />
          
          <h3 className="text-2xl md:text-4xl font-playfair leading-relaxed text-[#15503E] font-medium">
            <span className="font-bold text-[#15503E]">Empowering Confidence</span> means nurturing your inner beauty 
            through balanced nutrition, radiant skin, and natural aesthetics that bring out the 
            <span className="font-bold border-b-2 border-[#FAE3C3]"> best version of you.</span>
          </h3>
        </div>
      </section>

      {/* =========================================
          3. VISION & MISSION
          Background: Hijau Tua (#15503E)
      ========================================== */}
      <section className="w-full bg-[#15503E] px-6 py-24 relative overflow-hidden">
        {/* Dekorasi Background */}
        <div className="absolute top-0 left-0 w-full h-full bg-[url('https://www.transparenttextures.com/patterns/cubes.png')] opacity-5"></div>
        <div className="absolute -right-20 bottom-[-50px] w-96 h-96 bg-[#FAE3C3]/5 rounded-full blur-[80px]"></div>

        <div className="container mx-auto max-w-6xl relative z-10">
          <div className="grid grid-cols-1 md:grid-cols-2 gap-16 items-start">
            
            {/* VISION */}
            <div className="flex flex-col space-y-6">
              <div className="inline-block border-b-2 border-[#FAE3C3] pb-2 mb-2 w-fit">
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
                  Vision
                </h2>
              </div>
              <p className="text-[#FAE3C3]/90 text-lg leading-relaxed font-light">
                To inspire transformation from within through holistic care that radiates health, beauty, and confidence.
              </p>
            </div>

            {/* MISSION */}
            <div className="flex flex-col space-y-6">
              <div className="inline-block border-b-2 border-[#FAE3C3] pb-2 mb-2 w-fit">
                 <h2 className="text-4xl md:text-5xl font-playfair font-bold text-white">
                  Mission
                </h2>
              </div>
              <ul className="space-y-4 text-white/80 font-light leading-relaxed">
                <li className="flex items-start gap-3">
                  <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FAE3C3] flex-shrink-0"></span>
                  <span>To deliver personalized, evidence-based nutrition, skin, and aesthetic treatments.</span>
                </li>
                <li className="flex items-start gap-3">
                   <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FAE3C3] flex-shrink-0"></span>
                   <span>To create a refined, comfortable, and meaningful selfcare experience.</span>
                </li>
                <li className="flex items-start gap-3">
                   <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FAE3C3] flex-shrink-0"></span>
                   <span>To help individuals feel healthier, more beautiful, and confident in their own skin.</span>
                </li>
                <li className="flex items-start gap-3">
                   <span className="mt-2 w-1.5 h-1.5 rounded-full bg-[#FAE3C3] flex-shrink-0"></span>
                   <span>To nurture a supportive, empowering, and positive community.</span>
                </li>
              </ul>
            </div>

          </div>
        </div>
      </section>

      {/* =========================================
          4. MEET OUR EXPERTS
          Background: Krem (#FAE3C3)
      ========================================== */}
      <section className="w-full bg-[#FAE3C3] flex flex-col justify-center px-6 py-24 relative overflow-hidden">
        <div className="container mx-auto relative z-10">
          <div className="text-center mb-16">
            <h2 className="text-4xl md:text-6xl font-playfair font-bold text-[#15503E]">
              Meet Our Experts
            </h2>
            <p className="text-[#15503E]/70 mt-4 max-w-xl mx-auto font-light">
              Ditangani langsung oleh dokter spesialis berpengalaman untuk hasil yang aman dan natural.
            </p>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-8 items-stretch">
            <DoctorCard name="Dr. Cameron Will" specialist="Spesialis Kulit" variant="light" />
            <DoctorCard name="Dr. Jane Cooper" specialist="Estetika Medis" variant="light" />
            <DoctorCard name="Dr. Darrell Steward" specialist="Dermatologi" variant="light" />
          </div>
        </div>
      </section>

      {/* =========================================
          5. OUR FACILITIES
          Background: Putih Bersih (#FFFFFF)
      ========================================== */}
      <section className="w-full bg-white flex flex-col justify-center px-6 py-24 relative">
        <div className="container mx-auto">
          
          {/* Header Section */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[#15503E]/10 pb-6">
             <div>
                <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#15503E] mb-2">
                  Our Facilities
                </h2>
                <p className="text-[#15503E]/60">Teknologi modern dalam kenyamanan premium.</p>
             </div>
             <div className="hidden md:block text-[#15503E]/40 text-sm font-bold tracking-widest uppercase">
                Explore The Clinic
             </div>
          </div>

          {/* GRID GALLERY - Kembali menggunakan tinggi fix (h-[600px]) untuk layout normal */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-6 w-full max-w-7xl mx-auto">
            
            {/* Kiri */}
            <div className="h-[400px] md:h-[600px] w-full overflow-hidden rounded-[2rem] relative group shadow-lg bg-gray-200 flex items-center justify-center border border-gray-100">
               <span className="text-gray-400 font-bold tracking-widest">MAIN FACILITY</span>
               <div className="absolute bottom-6 left-6 bg-white/90 backdrop-blur px-6 py-3 rounded-full text-[#15503E] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-all duration-500 translate-y-4 group-hover:translate-y-0">
                Reception Area
              </div>
            </div>

            {/* Kanan */}
            <div className="grid grid-rows-2 gap-6 h-[400px] md:h-[600px]">
              <div className="rounded-[2rem] overflow-hidden h-full relative group shadow-lg bg-gray-200 flex items-center justify-center border border-gray-100">
                <span className="text-gray-400 font-bold tracking-widest">TREATMENT ROOM</span>
              </div>
              <div className="grid grid-cols-2 gap-6 h-full">
                <div className="rounded-[2rem] overflow-hidden relative group shadow-lg bg-gray-200 flex items-center justify-center border border-gray-100">
                   <span className="text-gray-400 font-bold text-xs tracking-widest">TOOL 1</span>
                </div>
                <div className="rounded-[2rem] overflow-hidden relative group shadow-lg bg-gray-200 flex items-center justify-center border border-gray-100">
                   <span className="text-gray-400 font-bold text-xs tracking-widest">TOOL 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          6. FOOTER
      ========================================== */}
      <Footer />
    </div>
  );
};

// Component Doctor Card
const DoctorCard = ({ name, specialist, variant = "light" }) => {
  const isDark = variant === "dark";
  
  return (
    <div className={`flex flex-col text-left group p-6 rounded-[2rem] border transition-all duration-500 h-[400px] justify-end hover:-translate-y-2
      ${isDark 
        ? "bg-white/5 border-white/10 hover:bg-[#FAE3C3] hover:border-[#FAE3C3]" 
        : "bg-white/40 border-[#15503E]/10 hover:bg-white hover:shadow-2xl"
      }
    `}>
      {/* Placeholder Image */}
      <div className="overflow-hidden rounded-3xl h-full w-full mb-6 bg-gray-300 flex items-center justify-center relative">
         <span className="text-gray-500 font-bold text-sm z-10">PHOTO</span>
         <div className="absolute inset-0 bg-gradient-to-t from-black/20 to-transparent opacity-50"></div>
      </div>

      <h3 className={`text-2xl font-playfair font-bold transition-colors duration-300
        ${isDark ? "text-[#FAE3C3] group-hover:text-[#15503E]" : "text-[#15503E]"}
      `}>
        {name}
      </h3>
      <p className={`font-bold text-xs uppercase tracking-widest mt-1 transition-colors duration-300
        ${isDark ? "text-white/60 group-hover:text-[#15503E]/70" : "text-[#15503E]/60"}
      `}>
        {specialist}
      </p>
    </div>
  );
};

export default About;