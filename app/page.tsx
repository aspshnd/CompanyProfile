import AboutSectionOne from "@/components/About/AboutSectionOne";
import AboutSectionTwo from "@/components/About/AboutSectionTwo";
import Blog from "@/components/Blog";
import ScrollUp from "@/components/Common/ScrollUp";
import Contact from "@/components/Contact";
import Features from "@/components/Features";
import Hero from "@/components/Hero";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "PT Acer Pro Multi Kreasi – Layanan Kreatif, Event Management & Solusi Multi-Sektor",
  description:
    "PT Acer Pro Multi Kreasi menghadirkan solusi profesional terpadu di Papua Barat melalui Acer Pro Event Management, layanan dokumentasi visual Bintuneo Media, business support services, hingga konstruksi.",
  keywords: [
    "PT Acer Pro Multi Kreasi",
    "Acer Pro",
    "Acerpro Event Management",
    "Bintuneo Media",
    "Event Organizer Bintuni",
    "EO Papua Barat",
    "Jasa EO Bintuni",
    "Fotografer Bintuni",
    "Videografer Bintuni",
    "Jasa Foto Bintuni",
    "Dokumentasi Event Papua Barat",
    "Business Support Services Papua",
    "Kontraktor Teluk Bintuni",
    "Jasa Konstruksi Bintuni",
    "Pengembangan Komunitas Papua",
    "Teluk Bintuni",
    "Papua Barat"
  ],

  openGraph: {
    title:
      "PT Acer Pro Multi Kreasi – Solusi Kreatif & Event Management Profesional",
    description:
      "Mitra strategis Anda untuk event management terstruktur, layanan dokumentasi visual kreatif, dukungan operasional bisnis, dan solusi multi-sektor di tanah Papua.",
    url: "https://acerpro08.com",
    type: "website",
    locale: "id_ID",
    images: [
      {
        url: "/images/acerpro-logo.png",
        width: 1200,
        height: 630,
        alt: "PT Acer Pro Multi Kreasi",
      },
    ],
  },

  icons: { icon: "/images/acerpro-logo.png" },

  robots: { index: true, follow: true },

  other: {
    "script:ld+json": JSON.stringify({
      "@context": "https://schema.org",
      "@type": "Organization",
      "@id": "https://acerpro08.com/#organization",
      "name": "PT Acer Pro Multi Kreasi",
      "alternateName": "Acer Pro Event Management & Bintuneo Media",
      "url": "https://acerpro08.com",
      "logo": "https://acerpro08.com/images/logo/acerpro-logo.png",
      "description":
        "Perusahaan multi-sektor di Papua Barat yang berfokus pada layanan kreatif, event management, business support services, konstruksi, dan pengembangan olahraga.",
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

export default function Home() {
  return (
    <>
      <ScrollUp />
      <Hero />
      <Features />
      <Blog />
    </>
  );
}