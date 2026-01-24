import React, { useRef, useState, useEffect } from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import TreatmentCard from "../components/TreatmentCard";

// Gambar dummy (TETAP)
const treatmentImg1 =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop";
const treatmentImg2 =
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop";
const treatmentImg3 =
  "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2074&auto=format&fit=crop";

// Arrow Icons (Dipercantik hover effect-nya)
const ArrowLeft = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M15 19l-7-7 7-7" />
  </svg>
);
const ArrowRight = () => (
  <svg className="w-5 h-5" fill="none" stroke="currentColor" viewBox="0 0 24 24">
    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth={2} d="M9 5l7 7-7 7" />
  </svg>
);

const Dashboard = () => {
  // --- HERO LOGIC (TETAP) ---
  const images = [hero1, hero2, hero3];
  const [currentImageIndex, setCurrentImageIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentImageIndex((prevIndex) =>
        prevIndex === images.length - 1 ? 0 : prevIndex + 1
      );
    }, 4000);
    return () => clearInterval(interval);
  }, [images.length]);

  // --- DATA TREATMENT (TETAP) ---
  const treatments = [
    {
      id: 1,
      image: treatmentImg1,
      category: "Treatment Profesional",
      title: "Facial, Laser, etc",
      description: "Revitalize your skin with comprehensive clinical treatments by certified dermatologists.",
      features: ["Expert Dermatologists", "Advanced Technology", "Personalized Care"],
    },
    {
      id: 2,
      image: treatmentImg2,
      category: "Aesthetic Care",
      title: "Botox, Fillers, etc",
      description: "Enhance your natural beauty with aesthetic procedures designed to rejuvenate safely.",
      features: ["Certified Specialists", "FDA Approved Products", "Natural Looking Results"],
    },
    {
      id: 3,
      image: treatmentImg3,
      category: "Skin Rejuvenation",
      title: "Peeling & Glow",
      description: "Get that perfect glow with our signature chemical peels and hydration therapy.",
      features: ["Instant Glow", "Dead Skin Removal", "Safe for Sensitive Skin"],
    },
    {
      id: 4,
      image: treatmentImg1,
      category: "Body Wellness",
      title: "Slimming & Firming",
      description: "Non-invasive body contouring treatments to help you achieve your desired shape.",
      features: ["No Downtime", "Proven Results", "Comfortable Process"],
    },
    {
      id: 5,
      image: treatmentImg2,
      category: "Hair Treatment",
      title: "Hair Loss Solution",
      description: "Advanced PRP and mesotherapy specifically designed for hair restoration.",
      features: ["Stimulate Growth", "Strengthen Roots", "Clinical Approach"],
    },
  ];

  // --- SLIDER LOGIC (TETAP) ---
  const sliderRef = useRef(null);

  const slideLeft = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.firstChild.clientWidth + 24;
      sliderRef.current.scrollBy({ left: -scrollAmount, behavior: "smooth" });
    }
  };

  const slideRight = () => {
    if (sliderRef.current) {
      const scrollAmount = sliderRef.current.firstChild.clientWidth + 24;
      sliderRef.current.scrollBy({ left: scrollAmount, behavior: "smooth" });
    }
  };

  return (
    <div className="bg-white overflow-x-hidden font-sans text-[#15503E]">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ================= HERO SECTION FULL SCREEN ================= */}
      {/* Background disamakan dengan tema About (Krem) */}
      <section className="w-full min-h-screen bg-[#FAE3C3] flex items-center relative overflow-hidden px-6">
        
        {/* Dekorasi Background Halus */}
        <div className="absolute top-0 right-0 w-96 h-96 bg-white/20 rounded-bl-full filter blur-3xl z-0"></div>

        <div className="max-w-7xl mx-auto py-12 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-12 md:gap-20 relative z-10">
          
          {/* BAGIAN KIRI: TEKS */}
          <div className="flex-1 max-w-xl text-center md:text-left animate-fadeIn">
            <p className="text-sm font-bold tracking-[0.3em] uppercase mb-4 text-[#15503E]/60">
              Welcome to Aldiora
            </p>
            {/* Font Playfair & Warna Hijau #15503E */}
            <h1 className="text-5xl md:text-6xl lg:text-7xl font-playfair font-bold text-[#15503E] leading-[1.1] mb-6">
              Where Health <br className="hidden md:block" />
              Meets Aesthetics <br className="hidden md:block" />
              <span className="text-white drop-shadow-md italic font-light">From Within</span>
            </h1>

            <p className="text-[#15503E]/80 text-lg leading-relaxed max-w-md mx-auto md:mx-0 mb-8 font-light">
              Empowering your confidence with personalized skin solutions that
              prioritize your health and enhance your authentic beauty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 justify-center md:justify-start">
              {/* Tombol Primary: Hijau Gelap */}
              <button className="bg-[#15503E] text-[#FAE3C3] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#0f3a2d] hover:scale-105 transition-all duration-300 shadow-xl">
                Consult Now
              </button>
              {/* Tombol Secondary: Outline */}
              <button className="bg-transparent border border-[#15503E] text-[#15503E] px-10 py-4 rounded-full text-sm font-bold uppercase tracking-widest hover:bg-[#15503E] hover:text-white transition-all duration-300">
                Visit Us
              </button>
            </div>
          </div>

          {/* BAGIAN KANAN: GAMBAR SLIDER */}
          <div className="flex-1 w-full max-w-md relative">
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-h-[600px] mx-auto">
              
              {/* Dekorasi Bingkai Miring */}
              <div className="absolute inset-0 bg-[#15503E]/10 rounded-[3rem] transform rotate-6 scale-95 z-0 transition-transform duration-500 hover:rotate-3"></div>

              {/* Container Gambar */}
              <div className="absolute inset-0 rounded-[3rem] overflow-hidden shadow-2xl z-10 border-4 border-white/50">
                {images.map((img, index) => (
                  <img
                    key={index}
                    src={img}
                    alt={`Slide ${index}`}
                    className={`absolute inset-0 w-full h-full object-cover transition-opacity duration-1000 ease-in-out ${
                      index === currentImageIndex
                        ? "opacity-100 scale-100"
                        : "opacity-0 scale-105"
                    }`}
                  />
                ))}
                {/* Overlay gradient bawah biar indikator kelihatan jelas */}
                <div className="absolute inset-0 bg-gradient-to-t from-[#15503E]/60 via-transparent to-transparent"></div>
              </div>

              {/* Indikator Slide */}
              <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 z-20 flex gap-3">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-[#FAE3C3] w-8"
                        : "bg-white/40 w-2 hover:bg-white"
                    }`}
                  />
                ))}
              </div>
            </div>
          </div>
        </div>
      </section>
      {/* ================= END HERO SECTION ================= */}

      {/* SECTION TREATMENT */}
      <section className="max-w-7xl mx-auto px-6 py-24 min-h-screen flex flex-col justify-center">
        <div className="flex flex-col md:flex-row justify-between items-end mb-12 gap-6 border-b border-[#15503E]/10 pb-6">
          <div className="text-center md:text-left">
            <p className="text-[#15503E]/60 text-sm font-bold uppercase tracking-widest mb-2">Our Services</p>
            {/* Font Playfair */}
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#15503E] mb-4">
              Featured Treatments
            </h2>
            <p className="text-[#15503E]/70 text-lg max-w-xl font-light">
              Discover our range of premium treatments tailored for you.
            </p>
          </div>
          
          {/* Tombol Navigasi Slider */}
          <div className="flex gap-4">
            <button
              onClick={slideLeft}
              className="p-4 rounded-full border border-[#15503E]/20 text-[#15503E] hover:bg-[#15503E] hover:text-[#FAE3C3] transition-all duration-300 active:scale-95"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={slideRight}
              className="p-4 rounded-full border border-[#15503E]/20 text-[#15503E] hover:bg-[#15503E] hover:text-[#FAE3C3] transition-all duration-300 active:scale-95"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        {/* Slider Container */}
        <div
          ref={sliderRef}
          className="flex gap-8 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-12 px-2"
        >
          {treatments.map((item) => (
            <div
              key={item.id}
              className="snap-start min-w-[85%] md:min-w-[calc(50%-16px)] lg:min-w-[calc(33.333%-22px)] flex-shrink-0"
            >
              <TreatmentCard
                image={item.image}
                category={item.category}
                title={item.title}
                description={item.description}
                features={item.features}
                onButtonClick={() => alert(`Navigasi ke ${item.category}`)}
              />
            </div>
          ))}
        </div>
      </section>

      {/* SECTION LOCATION */}
      <section className="bg-[#15503E] w-full py-24 text-[#FAE3C3]">
        <div className="container mx-auto px-6 flex flex-col items-center">
          <div className="mb-12 text-center max-w-2xl">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold mb-4">
              Visit Our Clinic
            </h2>
            <p className="text-white/70 text-lg font-light">
              Rasakan pengalaman perawatan terbaik di lokasi strategis kami.
              Kunjungi Aldiora Clinic untuk konsultasi langsung.
            </p>
          </div>

          <div className="w-full max-w-5xl h-[500px] rounded-[3rem] overflow-hidden shadow-2xl border-4 border-[#FAE3C3]/20 bg-gray-200 relative group">
            {/* Map Iframe */}
            <iframe
              title="Peta Aldiora Clinic"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.336495687645!2d106.81160311476906!3d-6.237435295484898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e5bd1910d1%3A0x94f9d8a4e8d3feec!2sJl.%20Wolter%20Monginsidi%20No.88P%2C%20RT.1%2FRW.4%2C%20Petogogan%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan!5e0!3m2!1sid!2sid!4v1626123456789!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0, filter: "grayscale(100%) contrast(1.2) opacity(0.9)" }} // Filter biar mapnya agak estetik
              allowFullScreen=""
              loading="lazy"
              className="group-hover:filter-none transition-all duration-700"
            ></iframe>
            
            {/* Overlay Text saat hover (Opsional) */}
            <div className="absolute bottom-6 left-6 bg-white/90 text-[#15503E] px-6 py-3 rounded-2xl shadow-lg backdrop-blur-sm pointer-events-none">
                <p className="font-bold text-sm">Aldiora Clinic Headquarters</p>
                <p className="text-xs">Jakarta Selatan</p>
            </div>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;