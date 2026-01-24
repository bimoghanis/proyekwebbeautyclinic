import React from "react";
import {
  MapPin,
  Clock,
  MessageCircle,
  Instagram,
  Facebook,
  Shield,
} from "lucide-react";

const Contact = () => {
  // Ganti nomor ini dengan nomor WhatsApp Klinik Anda
  // Format: 628... (tanpa 0 atau +)
  const whatsappNumber = "6281122334455";
  const message = "Halo Aldiora, saya ingin reservasi perawatan.";
  const whatsappLink = `https://wa.me/${whatsappNumber}?text=${encodeURIComponent(message)}`;

  return (
    // Container Full Screen (Hijau Tua)
    <div className="min-h-screen bg-[#15503E] text-white font-sans relative flex flex-col justify-center py-20 md:py-0">
      <div className="container mx-auto px-6 md:px-12 lg:px-20">
        <div className="grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-24 items-center h-full">
          {/* === KOLOM KIRI: TEKS INFORMASI === */}
          <div className="space-y-8 animate-fadeInLeft">
            {/* Label Kecil (Warna Emas/Krem) */}
            <p className="text-[#FAE3C3] tracking-[0.2em] text-xs font-bold uppercase mb-2">
              Personal Concierge
            </p>

            {/* Judul Besar */}
            <h1 className="text-5xl md:text-7xl font-playfair font-medium leading-tight mb-6">
              Instant <br /> Access
            </h1>

            {/* Deskripsi dengan Garis Samping */}
            <div className="border-l-2 border-[#FAE3C3]/30 pl-6 py-2">
              <p className="text-white/80 text-lg leading-relaxed max-w-md font-light">
                Lewati antrian dan formulir panjang. Terhubung langsung dengan
                spesialis kami untuk reservasi instan dan konsultasi prioritas.
              </p>
            </div>

            {/* Detail Lokasi & Jam */}
            <div className="space-y-8 mt-8 pt-6">
              {/* Lokasi */}
              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-[#FAE3C3] group-hover:text-[#15503E] transition-all duration-300 shadow-lg">
                  <MapPin size={22} />
                </div>
                <div>
                  <h3 className="text-[#FAE3C3] text-xs font-bold uppercase tracking-widest mb-2">
                    Visit Us
                  </h3>
                  <p className="text-xl font-playfair leading-tight">
                    Jl. Wolter Monginsidi No.88P, <br /> Kebayoran Baru, Jakarta
                    Selatan
                  </p>
                </div>
              </div>

              {/* Jam Operasional */}
              <div className="flex items-start gap-5 group">
                <div className="p-3 bg-white/5 border border-white/10 rounded-xl group-hover:bg-[#FAE3C3] group-hover:text-[#15503E] transition-all duration-300 shadow-lg">
                  <Clock size={22} />
                </div>
                <div>
                  <h3 className="text-[#FAE3C3] text-xs font-bold uppercase tracking-widest mb-2">
                    Operating Hours
                  </h3>
                  <p className="text-xl font-playfair">
                    Mon - Sat: 09:00 - 20:00
                  </p>
                </div>
              </div>
            </div>
          </div>

          {/* === KOLOM KANAN: KARTU WHATSAPP (Highlight) === */}
          <div className="relative animate-fadeInRight delay-100 mt-10 lg:mt-0">
            {/* Card Container (Glassmorphism) */}
            <div className="bg-white/5 backdrop-blur-md border border-white/10 p-8 md:p-12 rounded-[2.5rem] text-center relative overflow-hidden group hover:border-[#FAE3C3]/50 transition-all duration-500 shadow-2xl">
              {/* Efek Glow Hijau Muda di belakang */}
              <div className="absolute top-[-20%] left-1/2 -translate-x-1/2 w-40 h-40 bg-[#FAE3C3]/20 blur-[60px] rounded-full pointer-events-none"></div>

              {/* Icon WhatsApp Besar */}
              <div className="relative inline-block mb-8">
                <div className="p-5 bg-[#15503E] rounded-full shadow-2xl border border-white/20 group-hover:scale-110 transition-transform duration-300">
                  <MessageCircle size={40} className="text-[#FAE3C3]" />
                </div>
                {/* Dot Online Indicator */}
                <div className="absolute top-0 right-0 flex items-center justify-center">
                  <span className="relative flex h-4 w-4">
                    <span className="animate-ping absolute inline-flex h-full w-full rounded-full bg-green-400 opacity-75"></span>
                    <span className="relative inline-flex rounded-full h-4 w-4 bg-green-500 border-2 border-[#15503E]"></span>
                  </span>
                </div>
              </div>

              <h2 className="text-3xl font-playfair mb-4 font-bold text-white">
                Chat with Us
              </h2>
              <p className="text-white/70 mb-10 max-w-xs mx-auto text-sm leading-relaxed">
                Klik tombol di bawah untuk memulai percakapan pribadi di
                WhatsApp. Concierge kami online dan siap membantu Anda.
              </p>

              {/* Tombol Utama */}
              <a
                href={whatsappLink}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex items-center justify-center gap-3 w-full bg-[#FAE3C3] text-[#15503E] font-bold py-4 rounded-xl hover:bg-white hover:scale-[1.02] transition-all duration-300 shadow-xl tracking-widest text-sm">
                <MessageCircle size={18} />
                OPEN WHATSAPP
              </a>

              {/* Status Text */}
              <div className="mt-8 flex items-center justify-center gap-2 text-[10px] text-green-300 font-medium tracking-widest uppercase opacity-80">
                <Shield size={12} />
                Typically replies instantly
              </div>
            </div>
          </div>
        </div>
      </div>

      {/* === CUSTOM FOOTER (Copyright) === */}
      {/* Footer minimalis yang menempel di bawah layar */}
    </div>
  );
};

export default Contact;
