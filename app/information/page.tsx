import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

interface CompanyInfoProps {
  name: string;
  tagline: string;
  status: string;
  nib: string;
  kbli: string[];
  address: string;
  phone: string;
  email: string;
  instagram: string;
}

export const metadata: Metadata = {
  title: "Informasi & Legalitas – PT Acer Pro Multi Kreasi",
  description:
    "Profil legalitas dan informasi resmi PT Acer Pro Multi Kreasi. Perusahaan multi-sektor di Papua Barat yang bergerak di bidang layanan kreatif, event management, business support, konstruksi, dan olahraga.",
  keywords: [
    "Legalitas PT Acer Pro Multi Kreasi",
    "NIB PT Acer Pro Multi Kreasi",
    "KBLI Acer Pro",
    "Alamat PT Acer Pro Multi Kreasi",
    "Profil Acer Pro Bintuni",
    "Perusahaan Resmi Teluk Bintuni"
  ],
  icons: {
    icon: "/images/acerpro-logo.png",
  },
  openGraph: {
    title: "Informasi & Legalitas – PT Acer Pro Multi Kreasi",
    description:
      "Akses data legalitas, NIB, kode KBLI terdaftar, dan kontak resmi PT Acer Pro Multi Kreasi di Kabupaten Teluk Bintuni.",
    url: "https://acerpro.id/information", 
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
      "@id": "https://acerpro.id/#organization",
      "name": "PT Acer Pro Multi Kreasi",
      "alternateName": "Acer Pro Event Management & Bintuneo Media",
      "url": "https://acerpro.id",
      "logo": "https://acerpro.id/images/acerpro-logo.png",
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

// Deklarasi Interface TypeScript agar tidak error saat memanggil object content
interface CompanyInfoProps {
  name: string;
  tagline: string;
  status: string;
  nib: string;
  kbli: string[];
  address: string;
  phone: string;
  email: string;
  instagram: string;
}

const InformationPage = () => {
  // Membaca data langsung dari object di bawah
  const content: CompanyInfoProps = aboutContent.companyInfo;

  return (
    <>
    <Breadcrumb
        pageName="Data Resmi & Legalitas Hukum"
        description=""
      />
      {/* Konten Utama Tabel Informasi & Legalitas */}
      <section className="pt-0 pb-16 md:pb-20 lg:pb-24">
        <div className="container mx-auto px-4"> 
          <div className="w-full max-w-3xl text-left">
            <div className="w-full overflow-hidden rounded-lg border border-stroke dark:border-strokedark mb-12">
              <table className="w-full table-auto">
                <tbody>
                  {/* 1. Nama Perusahaan */}
                  <tr className="border-b border-stroke dark:border-strokedark">
                    <td className="w-1/3 px-4 py-3.5 text-base font-bold text-black dark:text-white bg-primary bg-opacity-5">
                      Nama Perusahaan
                    </td>
                    <td className="px-4 py-3.5 text-base font-medium text-body-color dark:text-body-color-dark">
                      {content.name}
                    </td>
                  </tr>

                  {/* 2. Tagline */}
                  <tr className="border-b border-stroke dark:border-strokedark">
                    <td className="px-4 py-3.5 text-base font-bold text-black dark:text-white bg-primary bg-opacity-5">
                      Tagline
                    </td>
                    <td className="px-4 py-3.5 text-base font-medium italic text-body-color dark:text-body-color-dark">
                      {content.tagline}
                    </td>
                  </tr>

                  {/* 3. Status Perusahaan */}
                  <tr className="border-b border-stroke dark:border-strokedark">
                    <td className="px-4 py-3.5 text-base font-bold text-black dark:text-white bg-primary bg-opacity-5">
                      Status Perusahaan
                    </td>
                    <td className="px-4 py-3.5 text-base font-medium text-body-color dark:text-body-color-dark">
                      {content.status}
                    </td>
                  </tr>

                  {/* 4. NIB */}
                  <tr className="border-b border-stroke dark:border-stroke dark:border-strokedark">
                    <td className="px-4 py-3.5 text-base font-bold text-black dark:text-white bg-primary bg-opacity-5">
                      NIB
                    </td>
                    <td className="px-4 py-3.5 text-base font-mono font-semibold text-black dark:text-white">
                      <span className="bg-black bg-opacity-5 dark:bg-white dark:bg-opacity-5 px-2 py-1 rounded">
                        {content.nib}
                      </span>
                    </td>
                  </tr>

                  {/* 5. Kode KBLI Terdaftar */}
                  <tr className="border-b border-stroke dark:border-strokedark">
                    <td className="px-4 py-3.5 text-base font-bold text-black dark:text-white bg-primary bg-opacity-5 align-top">
                      Kode KBLI Terdaftar
                    </td>
                    <td className="px-4 py-3.5 text-base font-medium text-body-color dark:text-body-color-dark">
                      <div className="flex flex-col space-y-2 py-1">
                        {content.kbli.map((item, idx) => (
                          <div key={idx} className="flex items-start text-sm md:text-base">
                            <span className="mr-2 mt-[5px] flex h-4 w-4 flex-shrink-0 items-center justify-center rounded bg-primary bg-opacity-10 text-primary">
                              <svg width="10" height="8" viewBox="0 0 16 13" className="fill-current stroke-[2px]">
                                <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34167 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
                              </svg>
                            </span>
                            <span>{item}</span>
                          </div>
                        ))}
                      </div>
                    </td>
                  </tr>

                  {/* 6. Alamat */}
                  <tr className="border-b border-stroke dark:border-strokedark">
                    <td className="px-4 py-3.5 text-base font-bold text-black dark:text-white bg-primary bg-opacity-5">
                      Alamat Resmi
                    </td>
                    <td className="px-4 py-3.5 text-base font-medium text-body-color dark:text-body-color-dark leading-relaxed">
                      {content.address}
                    </td>
                  </tr>

                  {/* 7. Telepon */}
                  <tr className="border-b border-stroke dark:border-strokedark">
                    <td className="px-4 py-3.5 text-base font-bold text-black dark:text-white bg-primary bg-opacity-5">
                      Telepon / WhatsApp
                    </td>
                    <td className="px-4 py-3.5 text-base font-medium text-body-color dark:text-body-color-dark">
                      <a 
                        href={`https://wa.me/62${content.phone.replace(/[^0-9]/g, '').substring(1)}`} 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-primary hover:underline"
                      >
                        {content.phone}
                      </a>
                    </td>
                  </tr>

                  {/* 8. Email */}
                  <tr className="border-b border-stroke dark:border-strokedark">
                    <td className="px-4 py-3.5 text-base font-bold text-black dark:text-white bg-primary bg-opacity-5">
                      Email Resmi
                    </td>
                    <td className="px-4 py-3.5 text-base font-medium text-body-color dark:text-body-color-dark">
                      <a href={`mailto:${content.email.split(' ')[0]}`} className="hover:text-primary hover:underline">
                        {content.email}
                      </a>
                    </td>
                  </tr>

                  {/* 9. Media Sosial */}
                  <tr>
                    <td className="px-4 py-3.5 text-base font-bold text-black dark:text-white bg-primary bg-opacity-5">
                      Media Sosial
                    </td>
                    <td className="px-4 py-3.5 text-base font-medium text-body-color dark:text-body-color-dark">
                      <a 
                        href="https://www.instagram.com/acerpro.id" 
                        target="_blank" 
                        rel="noopener noreferrer" 
                        className="hover:text-primary hover:underline font-semibold"
                      >
                        Instagram: {content.instagram}
                      </a>
                    </td>
                  </tr>
                </tbody>
              </table>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};
// Data Konten Lengkap dengan Legalitas Resmi
const aboutContent = {
  companyInfo: {
    name: "PT Acer Pro Multi Kreasi",
    tagline: "Creating Ideas for Real Impact",
    status: "Perseroan Terbatas (PT) - Swasta Nasional",
    nib: "1305260000633",
    kbli: [
        "42101 - Konstruksi Bangunan Sipil Jalan",
        "81100 - Aktivitas Penyedia Gabungan Jasa Penunjang Fasilitas",
        "82302 - Jasa Penyelenggara Event Khusus",
        "82990 - Aktivitas Jasa Penunjang Usaha Lainnya",
        "93121 - Klub Sepak Bola"
    ],
    address: "Kampung Banjar Ausoy Jalur 10, Distrik Manimeri, Kabupaten Teluk Bintuni, Papua Barat",
    phone: "0821-9900-6464",
    email: "info@acerpromultikreasi.co.id (Official)",
    instagram: "@acerpro.id"
  }
};

export default InformationPage;