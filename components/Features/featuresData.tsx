import { Feature } from "@/types/feature";
import { IoCalendarOutline, IoShieldCheckmarkOutline, IoBriefcaseOutline, IoCreateOutline, IoConstructOutline, IoTrophyOutline } from "react-icons/io5";
import { FaCarrot, FaLemon, FaTint } from "react-icons/fa";
import { GiCorn, GiWheat, GiGrain, GiFarmTractor } from "react-icons/gi";


const featuresData: Feature[] = [

  // --- KARTU 1: EVENT MANAGEMENT ---
  {
    id: 1,
    icon: (
      <IoCalendarOutline size={40} className="fill-current" />
    ),
    title: "Event Management & Special Event Organizer",
    paragraph:
      "PT Acer Pro Multi Kreasi menyediakan layanan perencanaan, pengelolaan, dan pelaksanaan event secara profesional.",
    listItems: [
      "Event Pemerintahan",
      "Festival",
      "Product Launching",
      "Seminar & Workshop",
      "Tournament",
      "Activation Progam",
      "Corporate Event",
      "Community Event",
      "Private Event",
      "Gethering",
      "Sport Event",
      "Entertainment Event",
    ],
  },
  {
    id: 2,
    icon: (
      <IoCreateOutline size={40} className="fill-current" />
    ),
    title: "Creative & Media Services",
    paragraph:
      "Layanan kreatif untuk kebutuhan branding dan komunikasi.",
    listItems: [
      "Graphic Design",
      "Social Media Management",
      "Photography & Videography",
      "Creative Campaign",
      "Branding & Identity",
      "Content Creation",
      "Digital Promotion",
    ],
  },
  {
    id: 3,
    icon: (
      <IoBriefcaseOutline size={40} className="fill-current" />
    ),
    title: "Business Support Services",
    paragraph:
      "Layanan penunjang kebutuhan operasional bisnis.",
    listItems: [
      "Administrative Support",
      "Project Support",
      "Photography & Videography",
      "Business Assistance",
      "Operational Support",
      "Manpower Support",
    ],
  },
  {
    id: 4,
    icon: (
      <IoShieldCheckmarkOutline size={40} className="fill-current" />
    ),
    title: "Facility Support Services",
    paragraph:
      "Layanan penunjang fasilitas perusahaan/institusi.",
    listItems: [
      "Cleaning Services",
      "Facility Support",
      "General Maintenance",
      "Utility Support",
    ],
  },
  {
    id: 5,
    icon: (
      <IoConstructOutline size={40} className="fill-current" />
    ),
    title: "Construction Services",
    paragraph:
      "Layanan konstruksi dan dukungan infrastruktur.",
    listItems: [
      "Konstruksi Bangunan Sipil Jalan",
      "Pemeliharaan Infrastruktur",
      "Project Support Construction",
    ],
  },
  {
    id: 6,
    icon: (
      <IoTrophyOutline size={40} className="fill-current" />
    ),
    title: "Sports Development",
    paragraph:
      "Layanan pengembangan olahraga dan kegiatan kepemudaan.",
    listItems: [
      "Tournament Organizer",
      "Club Management",
      "Football Development",
      "Sports Activation",
      "Youth Development Program",
    ],
  },
];
export default featuresData;
