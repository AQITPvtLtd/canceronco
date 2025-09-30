// data/navData.js
const navItems = [
  { name: "Home", href: "/" },
  { name: "About", href: "/about" },
  { name: "Treatments", href: "/treatments" },
  { name: "Types Of Cancer", href: "/typeofcancer" },
  { name: "Blogs", href: "/blogs" },
  {
    name: "Media",
    dropdown: [
      { name: "VIDEOS", href: "/media/videos" },
      { name: "CANCER UPDATES", href: "/media/updates" },
      { name: "GALLERY", href: "/media/gallery" },
      { name: "PRESS PELEASE", href: "/media/press" },
    ],
  },
  { name: "Contact", href: "/contact" },
];

export default navItems;
