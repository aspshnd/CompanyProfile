import { Menu } from "@/types/menu";

const menuData: Menu[] = [
  {
    id: 1,
    title: "Beranda",
    path: "/",
    newTab: false,
  },
  {
    id: 2,
    title: "Tentang Kami",
    path: "/about",
    newTab: false,
  },
  {
    id: 33,
    title: "Layanan & Produk",
    path: "/blog",
    newTab: false,
  },
    {
    id: 3,
    title: "Informasi & Legalitas Perusahaan",
    path: "/information",
    newTab: false,
  },
  {
    id: 4,
    title: "Pusat Bantuan",
    path: "/contact",
    newTab: false,
  },
  // {
  //   id: 4,
  //   title: "Pages",
  //   newTab: false,
  //   submenu: [
  //     // {
  //     //   id: 41,
  //     //   title: "About Page",
  //     //   path: "/about",
  //     //   newTab: false,
  //     // },
  //     {
  //       id: 42,
  //       title: "Kontak",
  //       path: "/contact",
  //       newTab: false,
  //     },
      // {
      //   id: 43,
      //   title: "Blog Grid Page",
      //   path: "/blog",
      //   newTab: false,
      // },
      // {
      //   id: 44,
      //   title: "Blog Sidebar Page",
      //   path: "/blog-sidebar",
      //   newTab: false,
      // },
      // {
      //   id: 45,
      //   title: "Blog Details Page",
      //   path: "/blog-details",
      //   newTab: false,
      // },
  //   ],
  // },
];
export default menuData;
