import React from "react";
import Footer from "../components/Footer";

const About = () => {
  return (
    // CONTAINER UTAMA (Snap Scroll Wrapper)
    <div className="h-screen w-full overflow-y-scroll snap-y snap-mandatory scroll-smooth no-scrollbar">
      {/* =========================================
          SECTION 1: HEADER
      ========================================== */}
      <section className="h-screen w-full snap-start bg-[#FAE3C3] flex items-center justify-center px-6 relative">
        <div className="container mx-auto max-w-4xl text-center">
          <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-6 text-gray-500 animate-fadeIn">
            About Aldiora
          </p>
          <h1 className="text-5xl md:text-7xl font-playfair font-bold text-[#15503E] mb-8 leading-tight">
            Empowering Confidence
          </h1>
          <p className="text-[#15503E]/80 text-lg md:text-xl leading-relaxed max-w-3xl mx-auto">
            Kami percaya bahwa kecantikan sejati bermula dari rasa percaya diri.
            Dengan teknologi dermatologi terkini dan sentuhan personal yang
            hangat, kami hadir untuk merawat versi terbaik dari diri Anda.
          </p>

          {/* Indikator Scroll (Bounce Icon) */}
          <div className="absolute bottom-10 left-1/2 -translate-x-1/2 animate-bounce">
            <svg
              className="w-6 h-6 text-[#15503E]"
              fill="none"
              stroke="currentColor"
              viewBox="0 0 24 24">
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M19 14l-7 7m0 0l-7-7m7 7V3"></path>
            </svg>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 2: FOUNDER STORY
      ========================================== */}
<section className="h-screen w-full snap-start flex flex-col md:flex-row bg-[#15503E]">
        
        {/* KIRI: Placeholder Foto Founder */}
        {/* HAPUS 'relative' karena kita tidak butuh positioning untuk dekorasi lagi */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full flex items-center justify-center bg-[#15503E]">
          
          {/* --- BAGIAN INI DIHAPUS (Dekorasi Sudut Atas Kanan) ---
          <div className="absolute top-0 right-0 w-32 h-32 bg-[#FAE3C3] hidden md:block rounded-bl-[100px] z-0"></div> 
          ------------------------------------------------------- */}

          <div className="relative z-10 w-64 md:w-96 h-64 md:h-[500px]">
            <div className="w-full h-full rounded-tl-[80px] rounded-br-[80px] rounded-tr-3xl rounded-bl-3xl overflow-hidden border-4 border-[#FAE3C3]/20 shadow-2xl bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 font-bold">Founder Image</span>
            </div>
          </div>
        </div>

        {/* KANAN: Text */}
        {/* HAPUS 'md:rounded-tl-[100px]' agar sudutnya lurus siku-siku */}
        <div className="w-full md:w-1/2 h-1/2 md:h-full bg-[#ffffff] flex items-center justify-center p-8 md:p-20">
          <div className="max-w-lg text-left">
            <p className="text-[#15503E] font-bold tracking-widest uppercase mb-2 text-sm">
              The Founder
            </p>
            <h2 className="text-4xl md:text-6xl font-playfair font-bold mb-6 text-[#15503E]">
              Dr. Anja Bunga
            </h2>
            <blockquote className="text-[#15503E]/80 mb-6 leading-relaxed italic border-l-4 border-[#15503E] pl-4 text-sm md:text-lg">
              "Kecantikan bukan tentang mengubah siapa diri kita, tapi tentang
              merawat apa yang sudah kita miliki."
            </blockquote>
            <p className="text-[#15503E]/70 leading-relaxed text-sm md:text-base hidden md:block">
              Berawal dari mimpi sederhana untuk menghadirkan perawatan kelas
              dunia di Jakarta Selatan, kini Aldiora menjadi rumah bagi ribuan
              pasien.
            </p>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 3: DOCTORS
      ========================================== */}
      <section className="h-screen w-full snap-start bg-[#ffffff] flex flex-col justify-center px-6 pt-16 md:pt-0">
        <div className="container mx-auto h-full flex flex-col justify-center">
          <div className="text-center mb-8 md:mb-12">
            <h2 className="text-4xl md:text-5xl font-playfair font-bold text-[#15503E]">
              Meet Our Experts
            </h2>
          </div>

          <div className="grid grid-cols-1 md:grid-cols-3 gap-6 md:gap-8 h-[60vh] md:h-auto items-center">
            {/* Panggil Card tanpa props image */}
            <DoctorCard name="Dr. Cameron" specialist="Spesialis Kulit" />
            <DoctorCard name="Dr. Jane Cooper" specialist="Estetika Medis" />
            <DoctorCard name="Dr. Darrell" specialist="Dermatologi" />
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 4: CLINIC GALLERY (SUDAH DI-FIX BIAR GA NABRAK)
      ========================================== */}
      {/* FIX: Gunakan flex flex-col agar container bisa mengatur tinggi anak-anaknya */}
      <section className="h-screen w-full snap-start bg-[#ffffff] flex flex-col justify-center px-6 py-10 md:py-0">
        <div className="container mx-auto h-full flex flex-col justify-center">
          {/* JUDUL */}
          <h2 className="text-4xl md:text-5xl font-playfair font-bold text-center text-[#15503E] mb-6 md:mb-10 flex-shrink-0">
            Our Facilities
          </h2>

          {/* GRID:
              FIX: Gunakan 'flex-grow h-0 min-h-0'.
              Ini memaksa grid mengisi SISA ruang kosong, jadi tidak akan nabrak footer.
          */}
          <div className="grid grid-cols-1 md:grid-cols-2 gap-4 w-full max-w-6xl mx-auto flex-grow h-0 min-h-0 pb-4 md:pb-8">
            {/* Placeholder Kiri */}
            <div className="h-full w-full overflow-hidden rounded-3xl relative group shadow-xl bg-gray-300 flex items-center justify-center">
              <span className="text-gray-500 font-bold">
                Main Facility Image
              </span>
              <div className="absolute bottom-4 left-6 bg-white/90 px-4 py-2 rounded-full text-[#15503E] text-xs font-bold uppercase tracking-widest opacity-0 group-hover:opacity-100 transition-opacity">
                Reception Area
              </div>
            </div>

            {/* Placeholder Kanan (Grid Kecil) */}
            <div className="hidden md:grid grid-rows-2 gap-4 h-full">
              <div className="rounded-3xl overflow-hidden h-full relative group shadow-xl bg-gray-300 flex items-center justify-center">
                <span className="text-gray-500 font-bold">Room 1</span>
              </div>
              <div className="grid grid-cols-2 gap-4 h-full">
                <div className="rounded-3xl overflow-hidden relative group shadow-xl bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 font-bold">Tool 1</span>
                </div>
                <div className="rounded-3xl overflow-hidden relative group shadow-xl bg-gray-300 flex items-center justify-center">
                  <span className="text-gray-500 font-bold">Tool 2</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* =========================================
          SECTION 5: FOOTER (Snap Terakhir)
      ========================================== */}
      <div className="snap-start w-full">
        <Footer />
      </div>
    </div>
  );
};

// Component Doctor Card (Versi Zonk/Placeholder)
const DoctorCard = ({ name, specialist }) => {
  return (
    <div className="flex flex-col text-left group bg-white/40 p-4 rounded-3xl border border-[#15503E]/10 hover:bg-white hover:shadow-2xl transition-all duration-500 h-full justify-end">
      {/* Placeholder Image */}
      <div className="overflow-hidden rounded-2xl h-[250px] md:h-[300px] w-full mb-4 bg-gray-300 flex items-center justify-center">
        <span className="text-gray-500 font-bold text-sm">Doctor Photo</span>
      </div>

      <h3 className="text-2xl font-playfair font-bold text-[#15503E]">
        {name}
      </h3>
      <p className="text-[#15503E]/60 font-bold text-xs uppercase tracking-widest">
        {specialist}
      </p>
    </div>
  );
};

export default About;
