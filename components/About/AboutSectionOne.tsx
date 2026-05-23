import { getImagePath } from "@/lib/utils";
import SectionTitle from "../Common/SectionTitle";
import { IoCheckmark } from "react-icons/io5";

interface AboutContentProps {
  content: {
    introduction: string;
    vision: string;
    mission: string[];
    advantages: { title: string; description: string }[];
  };
}

const portfolioItems = [
  "Event komunitas",
  "Program kepemudaan",
  "Sports event",
  "Aktivasi kreatif",
  "Dukungan operasional kegiatan",
  "Kolaborasi komunitas",
];

const targetItems = [
  "Event komunitas",
  "Program kepemudaan",
  "Sports event",
  "Aktivasi kreatif",
  "Dukungan operasional kegiatan",
  "Kolaborasi komunitas",
];

const checkIcon = (
  <svg width="16" height="13" viewBox="0 0 16 13" className="fill-current">
    <path d="M5.8535 12.6631C5.65824 12.8584 5.34166 12.8584 5.1464 12.6631L0.678505 8.1952C0.483242 7.99994 0.483242 7.68336 0.678505 7.4881L2.32921 5.83739C2.52467 5.64193 2.84166 5.64216 3.03684 5.83791L5.14622 7.95354C5.34147 8.14936 5.65859 8.14952 5.85403 7.95388L13.3797 0.420561C13.575 0.22513 13.8917 0.225051 14.087 0.420383L15.7381 2.07143C15.9333 2.26669 15.9333 2.58327 15.7381 2.77854L5.8535 12.6631Z" />
  </svg>
);

const List = ({ text }: { text: string }) => (
  <p className="mb-5 flex items-center text-lg font-medium text-body-color">
    <span className="mr-4 flex h-[30px] w-[30px] items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary">
      {checkIcon}
    </span>
    {text}
  </p>
);

const AboutSectionOne = ({ content }: AboutContentProps) => {
  return (
    <section id="about" className="pt-2 md:pt-2 lg:pt-4">
      <div className="container">

          {/* VISI & MISI */}
          <div className="w-full px-2 max-w-3xl text-justify mb-12">
            <h3 className="text-xl font-bold text-primary mb-2">Visi</h3>
            <p className="text-body-color mb-6">{content.vision}</p>

            <h3 className="text-xl font-bold text-primary mb-2">Misi</h3>
            {content.mission.map((item, idx) => (
              <List key={idx} text={item} />
            ))}
          </div>

         {/* Kelebihan Perusahaan */}
          <div className="w-full px-2 max-w-3xl text-justify mb-12">
            <h3 className="text-xl font-bold text-primary mb-6">Kelebihan Perusahaan</h3>
            
            <div className="space-y-6">
              {content.advantages.map((item, idx) => (
                <div key={idx} className="flex items-start">
                  
                  <span className="mr-4 flex h-[30px] w-[30px] flex-shrink-0 items-center justify-center rounded-md bg-primary bg-opacity-10 text-primary mt-[2px]">
                    {checkIcon}
                  </span>
                  
                  {/* Blok Teks Utama (Judul atas & Deskripsi bawah) */}
                  <div className="flex-1">
                    <h4 className="text-lg font-medium text-body-color dark:text-body-color-dark mt-1.5 leading-relaxed">
                      {item.title}
                    </h4>
                    <p className="text-lg font-medium text-body-color dark:text-body-color-dark mt-1.5 leading-relaxed">
                      {item.description}
                    </p>
                  </div>

                </div>
              ))}
            </div>
          </div>

          {/* Portofolio & Pengalamaan */}
          <div className="w-full px-2 max-w-3xl text-justify mb-12">
            <h3 className="text-xl font-bold text-primary mb-3">Portofolio & Pengalaman</h3>

            <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark mb-5 text-justify">
              <b>PT Acer Pro Multi Kreasi</b> memiliki pengalaman matang dalam mendukung berbagai kegiatan
              komunitas, <i>event</i> skala kecil hingga besar, program kreatif, serta pengembangan aktivitas
              sosial maupun olahraga di wilayah operasional kami.
            </p>

              {portfolioItems.map((item, idx) => (
            <List key={idx} text={item} />
          ))}
          </div>

          {/* Target Market*/}
          <div className="w-full px-2 max-w-3xl text-justify mb-12">
            <h3 className="text-xl font-bold text-primary mb-3">Target Market</h3>
            <p className="text-base font-medium leading-relaxed text-body-color dark:text-body-color-dark mb-5 text-justify">
              Kami melayani berbagai segmen pasar yang luas dan bervariasi, meliputi:
            </p>
              {targetItems.map((item, idx) => (
            <List key={idx} text={item} />
          ))}
          </div>
      </div>
    </section>
  );
};

export default AboutSectionOne;
