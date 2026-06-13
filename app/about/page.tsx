import AboutSectionOne from "@/components/About/AboutSectionOne";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title: "Tentang Kami – PT Acer Pro Multi Kreasi | Solusi Multi-Sektor & Event Management",
  description:
    "Profil resmi PT Acer Pro Multi Kreasi. Tumbuh sejak 2008, kami menghadirkan layanan profesional terintegrasi di Papua Barat: Event Management, Creative Media, Business Support, Jasa Konstruksi, hingga Sports Development.",
  keywords: [
    "Tentang PT Acer Pro Multi Kreasi",
    "Profil Acer Pro",
    "Bintuneo Media",
    "Acer Pro Event Management",
    "Sejarah Acer Pro",
    "Perusahaan Multi-Sektor Papua Barat",
    "Event Organizer Teluk Bintuni",
    "EO Papua Barat",
    "Jasa Dokumentasi Bintuni",
    "Creative Agency Papua Barat",
    "Business Support Services Bintuni",
    "Kontraktor Konstruksi Bintuni",
    "Sports Development Papua"
  ],
  icons: {
    icon: "/images/acerpro-logo.png",
  },
  openGraph: {
    title: "Tentang Kami – PT Acer Pro Multi Kreasi | Solusi Multi-Sektor & Event Management",
    description:
      "Kenali perjalanan transformasi PT Acer Pro Multi Kreasi sejak tahun 2008 dalam membangun ekosistem industri kreatif, layanan bisnis, konstruksi, dan olahraga di tanah Papua.",
    url: "https://acerpro08.com/about", 
    images: "/images/acerpro-logo.png", 
    type: "website",
  },
  robots: {
    index: true,
    follow: true,
  },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://acerpro08.com/#organization",
      "name": "PT Acer Pro Multi Kreasi",
      "alternateName": "Acer Pro Event Management & Bintuneo Media",
      "url": "https://acerpro08.com",
      "logo": "https://acerpro08.com/images/acerpro-logo.png",
      "description":
        "Perusahaan multi-sektor terpercaya di Papua Barat yang bergerak di bidang layanan kreatif, event management, business support services, konstruksi, dan pengembangan olahraga.",
      "address": {
        "@type": "PostalAddress",
        "addressLocality": "Teluk Bintuni",
        "addressRegion": "Papua Barat",
        "addressCountry": "ID"
      },
      "areaServed": [
        "Papua Barat",
        "Papua"
      ],
      "sameAs": [
        "https://www.instagram.com/acerpro.id",
      ]
    })
  }
};


const AboutPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Tentang Kami"
        description={
          <span className="block text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark text-justify">
            {/* Gunakan span block sebagai pengganti p paragraf 1 */}
            <span className="block mb-6">
              <b>PT Acer Pro Multi Kreasi</b> berawal dari sebuah inisiatif kreatif bernama <b>Acer Pro</b>, yang didirikan pada tahun 2008 di Serui, Kabupaten Kepulauan Yapen, Provinsi Papua. Acer Pro lahir dari semangat kolaborasi anak muda kreatif yang digagas oleh Rifaldhi Kwando, Arief N.H., Wadex, bersama rekan-rekan lainnya, sebagai wadah untuk berkarya, membangun komunitas, serta menghadirkan berbagai kegiatan kreatif dan sosial yang memberikan dampak positif bagi masyarakat.
            </span>
            <span className="block mb-6">
              Dalam perjalanannya, Acer Pro terus berkembang mengikuti dinamika kebutuhan pasar dan peluang usaha yang semakin luas. Pada tahun 2019, Acer Pro memperluas aktivitasnya dengan memindahkan basis operasional ke Kabupaten Teluk Bintuni, Papua Barat, sebagai langkah strategis untuk menjangkau peluang baru dalam bidang <i>event</i>, layanan kreatif, pengembangan komunitas, dan dukungan operasional bisnis.
            </span>
            {/* Gunakan span block sebagai pengganti p paragraf 2 */}
            <span className="block mb-6">
              Memasuki tahun 2023, Acer Pro mulai melakukan transformasi menjadi organisasi yang lebih profesional, dengan pendekatan kerja yang lebih terstruktur, berorientasi hasil, dan siap menjawab kebutuhan kerja sama dengan berbagai pihak, baik sektor pemerintah, swasta, komunitas, maupun institusi lainnya.
            </span>

            {/* Gunakan span block sebagai pengganti p paragraf 3 */}
            <span className="block">
              Sebagai bentuk komitmen terhadap profesionalisme, tata kelola usaha yang lebih baik, serta kebutuhan legalitas untuk pengembangan bisnis jangka panjang, pada tahun 2026 resmi didirikan <b>PT Acer Pro Multi Kreasi</b> sebagai badan hukum perusahaan. Saat ini, PT Acer Pro Multi Kreasi hadir sebagai perusahaan multi-sektor yang berfokus pada layanan kreatif, <i>event management, business support services</i>, konstruksi, serta pengembangan olahraga.
            </span>
          </span>
        }
      />
      <AboutSectionOne content={aboutContent}/>
      {/* <AboutSectionTwo content={aboutContent}/> */}
    </>
  );
};

// Data konten yang direkomendasikan untuk digunakan dalam AboutSectionOne dan AboutSectionTwo
const aboutContent = {
// 1. Pengantar Identitas Perusahaan
  introduction:
    "PT Acer Pro Multi Kreasi adalah perusahaan multi-sektor yang didirikan dengan tujuan mengintegrasikan potensi kreativitas di tanah Papua dengan penyediaan jasa profesional berstandar tinggi. Berawal dari inisiatif kreatif sejak tahun 2008, kami berkomitmen menghadirkan eksekusi terbaik, manajemen terstruktur, serta solusi inovatif yang berdampak positif dalam setiap proyek dan layanan yang kami tangani.",
  // 2. Visi dan Misi
  vision: "Menjadi perusahaan multi-sektor terpercaya yang menghadirkan solusi kreatif, profesional, dan berdampak nyata bagi pembangunan bisnis, komunitas, dan masyarakat.",
  mission: [
    "Menyediakan layanan berkualitas dengan standar profesional dan berorientasi hasil.",
    "Menjadi mitra strategis bagi pemerintah, perusahaan, komunitas, dan institusi.",
    "Mengembangkan solusi kreatif, operasional, dan bisnis yang inovatif serta adaptif.",
    "Mendukung pengembangan ekonomi lokal, komunitas, dan ekosistem usaha yang berkelanjutan.",
    "Membangun kolaborasi yang kuat untuk menciptakan dampak nyata bagi masyarakat.",
  ],

  advantages: [
    {
    title: "Multi-sector Integrated Services",
    description: "Satu perusahaan dengan layanan lintas sektor yang terintegrasi."
    },
    {
    title: "Strong Local Understanding",
    description: "Memiliki pemahaman kuat terhadap karakter pasar dan kebutuhan daerah Papua."
    },
    {
    title: "Professional & Adaptive",
    description: "Mengutamakan profesionalisme, fleksibilitas, dan solusi yang sesuai kebutuhan klien."
    },
    {
    title: "Strategic Collaboration",
    description: "Siap menjadi mitra strategis bagi pemerintah, swasta, komunitas, dan organisasi."
    },
    {
    title: "Creative & Execution Oriented",
    description: "Tidak hanya menghadirkan ide, tetapi juga eksekusi nyata yang terukur."
    }
  ],

  portfolioItems: [
    "Event komunitas",
    "Program kepemudaan",
    "Sports event",
    "Aktivasi kreatif",
    "Dukungan operasional kegiatan",
    "Kolaborasi komunitas"
  ],

  targetItems: [
    "Pemerintah & Instansi Publik",
    "BUMN / BUMD",
    "Perusahaan Swasta",
    "Organisasi & Lembaga",
    "Komunitas",
    "Institusi Pendidikan",
    "Sektor Olahraga",
    "Mitra Proyek & Kontraktor"
  ],
};

export default AboutPage;
