import React from "react";
import { ArrowRight, Stethoscope, Sparkles, Activity } from "lucide-react";
import Footer from "../components/Footer";

// === DATA PERAWATAN ===
const SERVICES = [
  {
    id: "01",
    title: "Doctor Consultation",
    desc: "Konsultasi bersama dokter kulit, gizi, dan estetika untuk menilai kondisi kulit serta menentukan perawatan yang paling tepat dan aman sesuai kebutuhanmu.",
    icon: <Stethoscope size={24} />,
  },
  {
    id: "02",
    title: "Facial Treatments",
    desc: "Perawatan pembersihan kulit menyeluruh untuk mengangkat kotoran, komedo, dan sel kulit mati, sehingga kulit terasa lebih bersih, segar, dan glowing.",
    icon: <Sparkles size={24} />,
  },
  {
    id: "03",
    title: "Peeling Treatments",
    desc: "Eksfoliasi menggunakan bahan aktif khusus untuk meratakan tekstur kulit, mencerahkan, dan membantu mengatasi masalah jerawat atau pigmentasi ringan.",
    icon: <Activity size={24} />,
  },
  {
    id: "04",
    title: "Body Treatments",
    desc: "Perawatan tubuh untuk mengencangkan area yang kendur, mengurangi lemak, dan membentuk kontur tubuh lebih firm menggunakan teknologi RF & Ultrafirm.",
    icon: <Sparkles size={24} />,
  },
  {
    id: "05",
    title: "PRP + Microneedling",
    desc: "Kombinasi plasma dari darah sendiri dengan microneedling untuk merangsang regenerasi kulit, memperbaiki tekstur, memudarkan bekas jerawat, dan memberikan efek rejuvenation alami.",
    icon: <Activity size={24} />,
  },
  {
    id: "06",
    title: "Acne Injection",
    desc: "Suntikan obat khusus untuk meredakan peradangan jerawat aktif secara cepat, mengurangi kemerahan, dan mempercepat penyembuhan.",
    icon: <Stethoscope size={24} />,
  },
  {
    id: "07",
    title: "Keloid Injection",
    desc: "Suntikan penanganan keloid untuk mengecilkan jaringan parut yang menonjol, mengurangi gatal/nyeri, dan memperbaiki tampilan kulit.",
    icon: <Activity size={24} />,
  },
  {
    id: "08",
    title: "Laser Treatments",
    desc: "Serangkaian laser untuk berbagai kebutuhan seperti mencerahkan, menghilangkan pigmentasi, mengecilkan pori, memperbaiki tekstur, mengatasi bekas jerawat, hingga menghapus tato.",
    icon: <Sparkles size={24} />,
  },
  {
    id: "09",
    title: "Skin Boosters",
    desc: "Suntikan hidrasi intens berisi nutrisi seperti HA untuk melembapkan kulit dari dalam, memberikan efek glowing, supple, dan memperbaiki tekstur.",
    icon: <Activity size={24} />,
  },
  {
    id: "10",
    title: "Aldiora Refine Injections",
    desc: "Suntikan anti-aging untuk menghaluskan garis halus dan kerutan dengan hasil natural. Tersedia pilihan Signature & Prestige untuk tingkat kehalusan hasil yang berbeda.",
    icon: <Sparkles size={24} />,
  },
  {
    id: "11",
    title: "IV Drips",
    desc: "Infus nutrisi yang langsung diserap tubuh untuk meningkatkan energi, hidrasi, imunitas, dan menjaga kesehatan kulit agar glowing dari dalam.",
    icon: <Activity size={24} />,
  },
];

const Consultation = () => {
  return (
    // CONTAINER UTAMA (Scroll Biasa)
    // Hapus 'h-screen', 'snap-y', dll. Ganti dengan 'min-h-screen'
    <div className="min-h-screen w-full bg-[#FAE3C3]">
      
      {/* =========================================
          SECTION 1: HERO (Header)
      ========================================== */}
      <section className="w-full bg-[#15503E] text-[#FAE3C3] flex items-center justify-center relative overflow-hidden py-24 md:py-32 px-6">
        {/* Dekorasi Background */}
        <div className="absolute top-[-20%] right-[-10%] w-[600px] h-[600px] bg-[#FAE3C3]/5 rounded-full blur-[100px]"></div>
        <div className="absolute bottom-[-20%] left-[-10%] w-[400px] h-[400px] bg-[#FAE3C3]/5 rounded-full blur-[80px]"></div>

        <div className="container mx-auto text-center relative z-10 max-w-4xl">
          <p className="text-sm md:text-base font-bold tracking-[0.3em] uppercase mb-4 animate-fadeIn">
            Treatment Menu
          </p>
          <h1 className="text-5xl md:text-8xl font-playfair font-medium mb-8 leading-tight">
            Curated <br /> Treatments
          </h1>
          <p className="text-white/80 text-lg md:text-xl leading-relaxed max-w-2xl mx-auto font-light">
            Temukan solusi perawatan kulit yang dirancang khusus untuk kebutuhan Anda, 
            mulai dari konsultasi ahli hingga teknologi laser terkini.
          </p>
        </div>
      </section>

      {/* =========================================
          SECTION 2: SERVICE LIST (Grid Catalog)
      ========================================== */}
      <section className="w-full py-20 px-6">
        <div className="container mx-auto">
          
          {/* Header Kecil */}
          <div className="flex flex-col md:flex-row justify-between items-end mb-12 border-b border-[#15503E]/10 pb-6 gap-4">
            <div>
              <h2 className="text-3xl md:text-4xl font-playfair font-bold text-[#15503E]">
                Our Services
              </h2>
              <p className="text-[#15503E]/60 text-sm mt-2">
                Pilih perawatan yang sesuai dengan kondisi kulitmu.
              </p>
            </div>
            <div className="text-[#15503E]/40 text-sm font-bold tracking-widest">
              {SERVICES.length} TREATMENTS AVAILABLE
            </div>
          </div>

          {/* GRID CARD */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8">
            {SERVICES.map((service) => (
              <ServiceCard key={service.id} data={service} />
            ))}
          </div>

        </div>
      </section>

      {/* =========================================
          SECTION 3: FOOTER
      ========================================== */}
      

    </div>
  );
};

// === COMPONENT KECIL: SERVICE CARD ===
const ServiceCard = ({ data }) => {
  return (
    <div className="group bg-white p-8 rounded-[2rem] border border-[#15503E]/5 hover:border-[#15503E] transition-all duration-300 hover:shadow-xl flex flex-col h-full transform hover:-translate-y-1">
      
      {/* Nomor & Icon */}
      <div className="flex justify-between items-start mb-6">
        <span className="text-4xl font-playfair text-[#15503E]/20 group-hover:text-[#15503E] transition-colors font-bold">
          {data.id}
        </span>
        <div className="p-3 bg-[#FAE3C3]/30 rounded-full text-[#15503E] group-hover:bg-[#15503E] group-hover:text-[#FAE3C3] transition-colors">
          {data.icon}
        </div>
      </div>

      {/* Judul */}
      <h3 className="text-2xl font-playfair font-bold text-[#15503E] mb-4 leading-tight">
        {data.title}
      </h3>

      {/* Deskripsi */}
      <p className="text-gray-600 text-sm leading-relaxed mb-8 flex-grow">
        {data.desc}
      </p>

      {/* Link 'Book Now' */}
      <a href="#" className="inline-flex items-center gap-2 text-[#15503E] font-bold text-xs uppercase tracking-widest group-hover:gap-4 transition-all mt-auto">
        Book Appointment <ArrowRight size={16} />
      </a>
    </div>
  );
};

export default Consultation;