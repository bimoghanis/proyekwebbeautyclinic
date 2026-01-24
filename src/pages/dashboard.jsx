import React, { useRef, useState, useEffect } from "react";
import hero1 from "../assets/hero1.png";
import hero2 from "../assets/hero2.png";
import hero3 from "../assets/hero3.png";
import TreatmentCard from "../components/TreatmentCard";

// Gambar dummy
const treatmentImg1 =
  "https://images.unsplash.com/photo-1576091160399-112ba8d25d1d?q=80&w=2070&auto=format&fit=crop";
const treatmentImg2 =
  "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop";
const treatmentImg3 =
  "https://images.unsplash.com/photo-1512678080530-7760d81faba6?q=80&w=2074&auto=format&fit=crop";

// Arrow Icons
const ArrowLeft = () => (
  <svg
    className="w-5 h-5 text-[#1A4D2E]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M15 19l-7-7 7-7"
    />
  </svg>
);
const ArrowRight = () => (
  <svg
    className="w-5 h-5 text-[#1A4D2E]"
    fill="none"
    stroke="currentColor"
    viewBox="0 0 24 24"
  >
    <path
      strokeLinecap="round"
      strokeLinejoin="round"
      strokeWidth={2}
      d="M9 5l7 7-7 7"
    />
  </svg>
);

const Dashboard = () => {
  // --- HERO LOGIC ---
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

  // --- DATA TREATMENT ---
  const treatments = [
    {
      id: 1,
      image: treatmentImg1,
      category: "Treatment Profesional",
      title: "Facial, Laser, etc",
      description:
        "Revitalize your skin with comprehensive clinical treatments by certified dermatologists.",
      features: [
        "Expert Dermatologists",
        "Advanced Technology",
        "Personalized Care",
      ],
    },
    {
      id: 2,
      image: treatmentImg2,
      category: "Aesthetic Care",
      title: "Botox, Fillers, etc",
      description:
        "Enhance your natural beauty with aesthetic procedures designed to rejuvenate safely.",
      features: [
        "Certified Specialists",
        "FDA Approved Products",
        "Natural Looking Results",
      ],
    },
    {
      id: 3,
      image: treatmentImg3,
      category: "Skin Rejuvenation",
      title: "Peeling & Glow",
      description:
        "Get that perfect glow with our signature chemical peels and hydration therapy.",
      features: [
        "Instant Glow",
        "Dead Skin Removal",
        "Safe for Sensitive Skin",
      ],
    },
    {
      id: 4,
      image: treatmentImg1,
      category: "Body Wellness",
      title: "Slimming & Firming",
      description:
        "Non-invasive body contouring treatments to help you achieve your desired shape.",
      features: ["No Downtime", "Proven Results", "Comfortable Process"],
    },
    {
      id: 5,
      image: treatmentImg2,
      category: "Hair Treatment",
      title: "Hair Loss Solution",
      description:
        "Advanced PRP and mesotherapy specifically designed for hair restoration.",
      features: ["Stimulate Growth", "Strengthen Roots", "Clinical Approach"],
    },
  ];

  // --- SLIDER LOGIC ---
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
    <div className="bg-[#FEFCF5] overflow-x-hidden">
      <style>{`
        .hide-scrollbar::-webkit-scrollbar { display: none; }
        .hide-scrollbar { -ms-overflow-style: none; scrollbar-width: none; }
      `}</style>

      {/* ================= HERO SECTION FULL SCREEN ================= */}
      <section className="w-full min-h-screen bg-[#FAE3C3] flex items-center relative overflow-hidden">
        {/* Container Utama: Mengatur lebar konten agar tidak terlalu melebar di layar besar */}
        <div className="max-w-7xl mx-auto px-6 md:px-12 py-12 w-full flex flex-col-reverse md:flex-row items-center justify-between gap-10 md:gap-16">
          {/* BAGIAN KIRI: TEKS */}
          <div className="flex-1 max-w-xl space-y-6 text-center md:text-left z-10">
            <h1 className="text-4xl md:text-5xl lg:text-6xl font-serif font-bold text-[#1A4D2E] leading-[1.2]">
              Where Health <br className="hidden md:block" />
              Meets Aesthetics <br className="hidden md:block" />
              <span className="text-[#B99470]">From Within</span>
            </h1>

            <p className="text-[#4A5D50] text-base md:text-lg leading-relaxed max-w-md mx-auto md:mx-0">
              Empowering your confidence with personalized skin solutions that
              prioritize your health and enhance your authentic beauty.
            </p>

            <div className="flex flex-col sm:flex-row gap-4 pt-4 justify-center md:justify-start">
              <button className="bg-[#1A4D2E] text-white px-8 py-3 rounded-full text-base font-semibold hover:bg-[#143b23] transition-all duration-300 shadow-lg hover:shadow-xl transform hover:-translate-y-1">
                Consult Now
              </button>
              <button className="bg-transparent border-2 border-[#1A4D2E] text-[#1A4D2E] px-8 py-3 rounded-full text-base font-semibold hover:bg-[#1A4D2E] hover:text-white transition-all duration-300">
                Visit Us
              </button>
            </div>
          </div>

          {/* BAGIAN KANAN: GAMBAR SLIDER */}
          <div className="flex-1 w-full max-w-md relative z-10">
            {/* Aspect Ratio Kotak/Portrait agar pas di layar */}
            <div className="relative w-full aspect-[4/5] md:aspect-square lg:aspect-[4/5] max-h-[500px] mx-auto">
              {/* Dekorasi Latar Belakang Miring */}
              <div className="absolute inset-0 bg-white/40 rounded-[2rem] transform rotate-6 scale-95 z-0 transition-transform duration-500 hover:rotate-3"></div>

              {/* Container Gambar */}
              <div className="absolute inset-0 rounded-[2rem] overflow-hidden shadow-2xl z-10 border-4 border-white/50">
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
              </div>

              {/* Indikator Slide (Titik-titik) */}
              <div className="absolute bottom-6 left-1/2 transform -translate-x-1/2 z-20 flex gap-2 p-2 bg-black/10 backdrop-blur-sm rounded-full">
                {images.map((_, index) => (
                  <button
                    key={index}
                    onClick={() => setCurrentImageIndex(index)}
                    className={`h-2.5 rounded-full transition-all duration-300 ${
                      index === currentImageIndex
                        ? "bg-white w-8"
                        : "bg-white/60 w-2.5 hover:bg-white"
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
      <section className="max-w-7xl mx-auto px-4 py-20 min-h-screen flex flex-col justify-center">
        {/* ... (Konten Treatment tetap sama seperti sebelumnya) ... */}
        <div className="flex flex-col md:flex-row justify-between items-end mb-10 gap-4">
          <div className="text-center md:text-left">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A4D2E] mb-3">
              Our Featured Treatments
            </h2>
            <p className="text-[#6B8E7B] text-base max-w-xl">
              Discover our range of premium treatments tailored for you.
            </p>
          </div>
          <div className="flex gap-3">
            <button
              onClick={slideLeft}
              className="p-3 rounded-full border border-[#1A4D2E] text-[#1A4D2E] hover:bg-[#1A4D2E] hover:text-white transition"
            >
              <ArrowLeft />
            </button>
            <button
              onClick={slideRight}
              className="p-3 rounded-full border border-[#1A4D2E] text-[#1A4D2E] hover:bg-[#1A4D2E] hover:text-white transition"
            >
              <ArrowRight />
            </button>
          </div>
        </div>

        <div
          ref={sliderRef}
          className="flex gap-6 overflow-x-auto snap-x snap-mandatory scroll-smooth hide-scrollbar pb-8 px-1"
        >
          {treatments.map((item) => (
            <div
              key={item.id}
              className="snap-start min-w-full md:min-w-[calc(50%-12px)] lg:min-w-[calc(33.333%-16px)] flex-shrink-0"
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
      <section className="bg-white w-full py-20">
        <div className="container mx-auto px-4 flex flex-col h-full justify-center">
          <div className="mb-10 text-center">
            <h2 className="text-3xl md:text-4xl font-serif font-bold text-[#1A4D2E] mb-3">
              Lokasi Kami
            </h2>
            <p className="text-gray-600">
              Kunjungi Aldiora Clinic untuk konsultasi langsung.
            </p>
          </div>

          <div className="w-full h-[60vh] rounded-2xl overflow-hidden shadow-2xl border border-gray-100">
            <iframe
              title="Peta Aldiora Clinic"
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3966.336495687645!2d106.81160311476906!3d-6.237435295484898!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x2e69f3e5bd1910d1%3A0x94f9d8a4e8d3feec!2sJl.%20Wolter%20Monginsidi%20No.88P%2C%20RT.1%2FRW.4%2C%20Petogogan%2C%20Kec.%20Kby.%20Baru%2C%20Kota%20Jakarta%20Selatan!5e0!3m2!1sid!2sid!4v1626123456789!5m2!1sid!2sid"
              width="100%"
              height="100%"
              style={{ border: 0 }}
              allowFullScreen=""
              loading="lazy"
            ></iframe>
          </div>
        </div>
      </section>
    </div>
  );
};

export default Dashboard;
