import Breadcrumb from "@/components/Common/Breadcrumb";
import Contact from "@/components/Contact";

import { Metadata } from "next";

export const metadata: Metadata = {

  title: "Hubungi Kami – PT Acer Pro Multi Kreasi | Kontak & Layanan Kemitraan",
  description:
    "Hubungi PT Acer Pro Multi Kreasi untuk konsultasi, pemesanan layanan, dan kemitraan strategis di Papua Barat. Respons cepat untuk Event Management, Creative Media, Business Support, Jasa Konstruksi, dan Sports Development.",
  keywords: [
    "Hubungi PT Acer Pro Multi Kreasi",
    "Kontak Acer Pro Bintuni",
    "Alamat PT Acer Pro Multi Kreasi",
    "WhatsApp Acer Pro Bintuni",
    "Email Resmi Acer Pro",
    "Kontak Event Organizer Bintuni",
    "Jasa Dokumentasi Papua Barat",
    "Bintuneo Media Kontak",
    "Kemitraan Bisnis Teluk Bintuni",
    "Kontraktor Bintuni Kontak",
    "Layanan Korporat Papua Barat"
  ],
  openGraph: {
    title: "Hubungi Kami – PT Acer Pro Multi Kreasi | Kontak & Layanan Kemitraan",
    description:
      "Terhubung dengan tim profesional PT Acer Pro Multi Kreasi untuk solusi multi-sektor dan manajemen event di tanah Papua. Respons cepat melalui kontak resmi kami.",
    url: "https://www.acerpro08.com/contact", // Domain disesuaikan ke website utama
    type: "website",
    images: [
      {
        url: "/images/acerpro-logo.png",
        width: 1200,
        height: 630,
        alt: "Hubungi PT Acer Pro Multi Kreasi",
      },
    ],
    locale: "id_ID",
  },
  robots: { index: true, follow: true },
  icons: { icon: "/images/acerpro-logo.png" },
  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://www.acerpro08.com/#organization",
      "name": "PT Acer Pro Multi Kreasi",
      "alternateName": "Acer Pro Event Management & Bintuneo Media",
      "url": "https://www.acerpro08.com",
      "logo": "https://www.acerpro08.com/images/acerpro-logo.png",
      "description":
        "Hubungi kami untuk kolaborasi dan penyediaan jasa profesional di bidang event management, layanan kreatif, business support, konstruksi, dan pengembangan olahraga di Papua Barat.",
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
        "https://www.instagram.com/acerpro.id"
      ]
    })
  }
};

const ContactPage = () => {
  return (
    <>
      <Breadcrumb
        pageName="Hubungi Kami"
        description="Kami terbuka untuk menerima kritik, saran, maupun peluang kerja sama dalam pengembangan layanan dan kolaborasi bisnis. Silakan hubungi kami melalui formulir atau WhatsApp. Masukan Anda sangat berarti bagi perkembangan kami dan produk lokal Bintuni."
      />
      <Contact />
    </>
  );
};

export default ContactPage;
