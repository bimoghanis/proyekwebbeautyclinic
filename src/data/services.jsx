import React from "react";
import { Stethoscope, Sparkles, Activity } from "lucide-react";

export const SERVICES_DATA = [
  // === 01. DOCTOR CONSULTATION (Tetap) ===
  {
    id: "01",
    slug: "doctor-consultation",
    title: "Doctor Consultation",
    shortDesc: "Konsultasi profesional untuk analisis kondisi kulit yang tepat.",
    fullDesc: "Di Aldiora Clinic, setiap perjalanan menuju kecantikan dimulai dari konsultasi profesional. Dokter kami akan memahami kondisi kulit, gaya hidup, dan tujuan perawatanmu sebelum memberikan rekomendasi, sehingga setiap tindakan yang dilakukan aman, personal, dan memberikan hasil terbaik.",
    image: "https://images.unsplash.com/photo-1666214280391-8ff395c86f02?q=80&w=2068&auto=format&fit=crop",
    icon: <Stethoscope size={24} />,
    pricing: [
      {
        title: "Sp.GK (Nutrition Specialist)",
        desc: "Menganalisis kebutuhan nutrisi tubuh untuk mendukung kesehatan kulit dan kebugaran secara menyeluruh. Cocok bagi kamu yang ingin merawat kecantikan dari dalam.",
        price: "Rp 350.000"
      },
      {
        title: "Sp.DVE (Dermatovenereologist)",
        desc: "Konsultasi eksklusif dengan dokter berpengalaman untuk evaluasi kondisi kulit dan perencanaan perawatan yang tepat, mencakup masalah jerawat, pigmentasi, hingga penuaan.",
        price: "Rp 350.000"
      },
      {
        title: "Aesthetic Doctor",
        desc: "Sesi evaluasi awal untuk mengetahui kondisi kulit dan rekomendasi perawatan yang sesuai. Free konsultasi dengan treatment > Rp 250.000.",
        price: "Rp 50.000"
      }
    ]
  },

  // === 02. FACIAL TREATMENTS ===
  {
    id: "02",
    slug: "facial-treatments",
    title: "Facial Treatments",
    shortDesc: "Perawatan pembersihan kulit menyeluruh untuk wajah bersih dan segar.",
    fullDesc: "Perawatan pembersihan kulit menyeluruh untuk mengangkat kotoran, komedo, dan sel kulit mati, sehingga kulit terasa lebih bersih, segar, dan glowing.",
    image: "https://images.unsplash.com/photo-1570172619644-dfd03ed5d881?q=80&w=2070&auto=format&fit=crop",
    icon: <Sparkles size={24} />,
    pricing: [] // Isi nanti jika ada data harga
  },

  // === 03. PEELING TREATMENTS ===
  {
    id: "03",
    slug: "peeling-treatments",
    title: "Peeling Treatments",
    shortDesc: "Eksfoliasi bahan aktif untuk meratakan tekstur dan mencerahkan.",
    fullDesc: "Eksfoliasi menggunakan bahan aktif khusus untuk meratakan tekstur kulit, mencerahkan, dan membantu mengatasi masalah jerawat atau pigmentasi ringan.",
    image: "https://images.unsplash.com/photo-1616394584738-fc6e612e71b9?q=80&w=2070&auto=format&fit=crop",
    icon: <Activity size={24} />,
    pricing: []
  },

  // === 04. BODY TREATMENTS ===
  {
    id: "04",
    slug: "body-treatments",
    title: "Body Treatments",
    shortDesc: "Perawatan tubuh untuk mengencangkan dan membentuk kontur.",
    fullDesc: "Perawatan tubuh untuk mengencangkan area yang kendur, mengurangi lemak, dan membentuk kontur tubuh lebih firm menggunakan teknologi RF & Ultrafirm.",
    image: "https://images.unsplash.com/photo-1609357601538-129d89077939?q=80&w=2071&auto=format&fit=crop",
    icon: <Sparkles size={24} />,
    pricing: []
  },

  // === 05. PRP + MICRONEEDLING ===
  {
    id: "05",
    slug: "prp-microneedling",
    title: "PRP + Microneedling",
    shortDesc: "Regenerasi kulit alami menggunakan plasma darah sendiri.",
    fullDesc: "Kombinasi plasma dari darah sendiri dengan microneedling untuk merangsang regenerasi kulit, memperbaiki tekstur, memudarkan bekas jerawat, dan memberikan efek rejuvenation alami.",
    image: "https://images.unsplash.com/photo-1624482246182-18329bb95588?q=80&w=2070&auto=format&fit=crop",
    icon: <Activity size={24} />,
    pricing: []
  },

  // === 06. ACNE INJECTION ===
  {
    id: "06",
    slug: "acne-injection",
    title: "Acne Injection",
    shortDesc: "Solusi cepat meredakan peradangan jerawat aktif.",
    fullDesc: "Suntikan obat khusus untuk meredakan peradangan jerawat aktif secara cepat, mengurangi kemerahan, dan mempercepat penyembuhan.",
    image: "https://images.unsplash.com/photo-1619451334792-150fd785ee74?q=80&w=2070&auto=format&fit=crop",
    icon: <Stethoscope size={24} />,
    pricing: []
  },

  // === 07. KELOID INJECTION ===
  {
    id: "07",
    slug: "keloid-injection",
    title: "Keloid Injection",
    shortDesc: "Penanganan keloid untuk mengecilkan jaringan parut.",
    fullDesc: "Suntikan penanganan keloid untuk mengecilkan jaringan parut yang menonjol, mengurangi gatal/nyeri, dan memperbaiki tampilan kulit.",
    image: "https://images.unsplash.com/photo-1628926379972-8776fb4e3105?q=80&w=2070&auto=format&fit=crop",
    icon: <Stethoscope size={24} />,
    pricing: []
  },

  // === 08. LASER TREATMENTS ===
  {
    id: "08",
    slug: "laser-treatments",
    title: "Laser Treatments",
    shortDesc: "Teknologi laser untuk pencerahan, tekstur, dan pigmentasi.",
    fullDesc: "Serangkaian laser untuk berbagai kebutuhan seperti mencerahkan, menghilangkan pigmentasi, mengecilkan pori, memperbaiki tekstur, mengatasi bekas jerawat, hingga menghapus tato.",
    image: "https://images.unsplash.com/photo-1608255738791-a716887f0773?q=80&w=2070&auto=format&fit=crop",
    icon: <Sparkles size={24} />,
    pricing: []
  },

  // === 09. SKIN BOOSTERS ===
  {
    id: "09",
    slug: "skin-boosters",
    title: "Skin Boosters",
    shortDesc: "Hidrasi intens untuk kulit lembap dan glowing dari dalam.",
    fullDesc: "Suntikan hidrasi intens berisi nutrisi seperti HA untuk melembapkan kulit dari dalam, memberikan efek glowing, supple, dan memperbaiki tekstur.",
    image: "https://images.unsplash.com/photo-1596436673209-c3f66a7e8172?q=80&w=2030&auto=format&fit=crop",
    icon: <Activity size={24} />,
    pricing: []
  },

  // === 10. ALDIORA REFINE INJECTIONS ===
  {
    id: "10",
    slug: "aldiora-refine-injections",
    title: "Aldiora Refine Injections",
    shortDesc: "Suntikan anti-aging untuk menghaluskan garis halus dan kerutan.",
    fullDesc: "Suntikan anti-aging untuk menghaluskan garis halus dan kerutan dengan hasil natural. Tersedia pilihan Signature & Prestige untuk tingkat kehalusan hasil yang berbeda.",
    image: "https://images.unsplash.com/photo-1616394585366-7409668cb362?q=80&w=2070&auto=format&fit=crop",
    icon: <Sparkles size={24} />,
    pricing: []
  },

  // === 11. IV DRIPS ===
  {
    id: "11",
    slug: "iv-drips",
    title: "IV Drips",
    shortDesc: "Infus nutrisi untuk energi, imunitas, dan kesehatan kulit.",
    fullDesc: "Infus nutrisi yang langsung diserap tubuh untuk meningkatkan energi, hidrasi, imunitas, dan menjaga kesehatan kulit agar glowing dari dalam.",
    image: "https://images.unsplash.com/photo-1628926379893-d53251931433?q=80&w=2070&auto=format&fit=crop",
    icon: <Activity size={24} />,
    pricing: []
  }
];