import React, { useEffect } from "react";
import { useParams, Link } from "react-router-dom";
import { SERVICES_DATA } from "../data/services"; // Pastikan path ini benar
import Footer from "../components/Footer";
import { ArrowLeft, CheckCircle } from "lucide-react";

const ServiceDetail = () => {
  const { slug } = useParams(); // Menangkap 'doctor-consultation' dari URL
  
  // Mencari data yang cocok dengan slug
  const service = SERVICES_DATA.find((item) => item.slug === slug);

  // Scroll ke paling atas saat halaman dibuka
  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  // Jika slug ngawur/tidak ditemukan
  if (!service) {
    return (
      <div className="h-screen flex flex-col items-center justify-center bg-[#E5F0EB]">
        <h1 className="text-2xl font-bold text-[#15503E]">Treatment Not Found</h1>
        <Link to="/konsultasi" className="mt-4 text-blue-600 hover:underline">Back to Menu</Link>
      </div>
    );
  }

  return (
    <div className="min-h-screen bg-[#E5F0EB] text-[#15503E] font-sans">
      {/* Background hijau muda lembut (#E5F0EB) sesuai nuansa medis/segar */}

      <div className="container mx-auto px-6 py-24 md:py-32 max-w-5xl">
        
        {/* Tombol Back */}
        <Link to="/konsultasi" className="inline-flex items-center gap-2 text-sm font-bold uppercase tracking-widest mb-10 hover:opacity-70 transition group">
          <ArrowLeft size={16} className="group-hover:-translate-x-1 transition-transform"/> Back to Menu
        </Link>

        {/* 1. HEADER & FULL DESCRIPTION */}
        <div className="mb-12 animate-fadeIn">
          <h1 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-[#15503E]">
            {service.title}
          </h1>
          <p className="text-lg md:text-xl leading-relaxed text-[#15503E]/80 max-w-4xl font-light">
            {service.fullDesc}
          </p>
        </div>

        {/* 2. HERO IMAGE (Besar di Tengah) */}
        <div className="w-full h-[300px] md:h-[500px] rounded-[3rem] overflow-hidden shadow-2xl mb-16 relative">
           <img 
             src={service.image} 
             alt={service.title} 
             className="w-full h-full object-cover"
           />
           {/* Overlay agar gambar menyatu dengan background */}
           <div className="absolute inset-0 bg-[#15503E]/10 mix-blend-multiply"></div>
        </div>

        {/* 3. PRICING LIST (Tabel Harga) */}
        {service.pricing && service.pricing.length > 0 && (
          <div className="bg-transparent space-y-2">
            <h3 className="text-xl font-bold uppercase tracking-widest mb-6 opacity-60">Price List</h3>
            
            {service.pricing.map((item, index) => (
              <div 
                key={index} 
                className="flex flex-col md:flex-row justify-between items-start md:items-center py-8 border-b border-[#15503E]/20 hover:bg-[#15503E]/5 transition-colors px-6 rounded-2xl cursor-default"
              >
                {/* Kiri: Nama & Deskripsi */}
                <div className="md:w-3/4 pr-8">
                  <h4 className="text-2xl font-playfair font-bold mb-2 text-[#15503E]">
                    {item.title}
                  </h4>
                  <p className="text-sm md:text-base text-[#15503E]/70 leading-relaxed font-light">
                    {item.desc}
                  </p>
                </div>

                {/* Kanan: Harga */}
                <div className="md:w-1/4 mt-4 md:mt-0 text-left md:text-right flex-shrink-0">
                  <p className="text-xs uppercase tracking-widest opacity-50 mb-1">Starts From</p>
                  <p className="text-2xl md:text-3xl font-bold font-playfair text-[#15503E]">
                    {item.price}
                  </p>
                </div>
              </div>
            ))}
          </div>
        )}

        {/* CTA BUTTON */}
        <div className="mt-20 text-center">
          <a 
            href="https://wa.me/6281122334455" // Ganti dengan No WA Klinik
            target="_blank"
            rel="noopener noreferrer"
            className="inline-flex items-center gap-3 bg-[#15503E] text-[#FAE3C3] px-10 py-5 rounded-full font-bold uppercase tracking-widest hover:scale-105 transition-transform shadow-xl hover:shadow-2xl"
          >
            Book Appointment <CheckCircle size={20} />
          </a>
          <p className="mt-4 text-xs opacity-60">
            *Konsultasi diperlukan sebelum tindakan. Harga dapat berubah sewaktu-waktu.
          </p>
        </div>

      </div>


    </div>
  );
};

export default ServiceDetail;