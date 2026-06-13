import SingleBlog from "@/components/Blog/SingleBlog";
import blogData from "@/components/Blog/blogData";
import Breadcrumb from "@/components/Common/Breadcrumb";
import { Metadata } from "next";

export const metadata: Metadata = {
  title:
    "Produk & Jasa – PT Acer Pro Multi Kreasi",
  description:
    "Eksplorasi solusi profesional terintegrasi kami di Papua Barat: Event Management, Creative & Media Services, Business & Facility Support, Jasa Konstruksi, hingga Sports Development.",
  keywords: [
    "Layanan PT Acer Pro Multi Kreasi",
    "Sektor Bisnis Acer Pro",
    "Acer Pro Event Management",
    "Bintuneo Media",
    "Event Organizer Bintuni",
    "EO Papua Barat",
    "Jasa Dokumentasi Papua Barat",
    "Fotografi Videografi Bintuni",
    "Business Support Services Bintuni",
    "Facility Support Services Papua",
    "Kontraktor Bangunan Bintuni",
    "Jasa Konstruksi Papua Barat",
    "Tournament Organizer Bintuni",
    "Sports Development Papua",
    "Solusi Korporat Teluk Bintuni"
  ],

  authors: [{ name: "PT Acer Pro Multi Kreasi" }],

  openGraph: {
    title:
      "Produk & Jasa – PT Acer Pro Multi Kreasi | Layanan Kreatif, Event Management & Solusi Multi-Sektor",
    description:
      "Lihat layanan profesional kami dalam fotografi, videografi, Event Organizer (EO) hingga produk komoditas unggulan Bintuni. Dokumentasi visual kreatif dan produk lokal berkualitas ada di sini.",
    url: "https://www.acerpro08.com/blog",
    type: "website",
    images: [
      {
        url: "/images/acerpro-logo.png",
        width: 1200,
        height: 630,
        alt: "AcerPro Portfolio & Produk"
      }
    ],
  },

  icons: { icon: "/images/acerpro-logo.png" },

  robots: { index: true, follow: true },
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

const Blog = () => {
  return (
    <>
      <Breadcrumb
        pageName="Layanan & Produk"
        description="Bintuneo Group: Solusi Terintegrasi Papua Barat. Kami menyediakan eksekusi acara yang presisi, layanan media visual sinematik, dan pasokan komoditas unggulan dengan jaminan mutu dan keaslian."
      />

      <section className="pb-[120px] pt-[120px]">
        <div className="container">
          <div className="-mx-4 flex flex-wrap justify-center">
            {blogData().map((blog) => (
              <div
                key={blog.id}
                className="w-full px-4 md:w-2/3 lg:w-1/2 xl:w-1/3"
              >
                <SingleBlog blog={blog} />
              </div>
            ))}
          </div>

          <div
            className="wow fadeInUp -mx-4 flex flex-wrap"
            data-wow-delay=".15s"
          >
            <div className="w-full px-4">
              <ul className="flex items-center justify-center pt-8">
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Prev
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    1
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    2
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    3
                  </a>
                </li>
                <li className="mx-1">
                  <span className="flex h-9 min-w-[36px] cursor-not-allowed items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color">
                    ...
                  </span>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    12
                  </a>
                </li>
                <li className="mx-1">
                  <a
                    href="#0"
                    className="flex h-9 min-w-[36px] items-center justify-center rounded-md bg-body-color bg-opacity-[15%] px-4 text-sm text-body-color transition hover:bg-primary hover:bg-opacity-100 hover:text-white"
                  >
                    Next
                  </a>
                </li>
              </ul>
            </div>
          </div>
        </div>
      </section>
    </>
  );
};

export default Blog;
