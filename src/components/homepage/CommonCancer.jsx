"use client";
import Image from "next/image";

export default function CommonCancer() {
  const cancers = [
    {
      title: "BREAST CANCER",
      image: "/common/breast-cancer.jpg", // replace with your image path
    },
    {
      title: "CERVICAL CANCER",
      image: "/common/Cervical-cancer.png", // replace with your image path
    },
    {
      title: "ORAL CANCER",
      image: "/common/mouth-cancer.jpeg", // replace with your image path
    },
  ];

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto text-center px-4">
        <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black">
          THREE MOST <span className="text-teal-500">COMMON CANCER</span> IN WORLD
        </h2>
        <p className="text-gray-700 mb-10">Best Medical Oncologist in Delhi</p>

        <div className="grid md:grid-cols-3 gap-6">
          {cancers.map((cancer, idx) => (
            <div
              key={idx}
              className="bg-white border rounded-md shadow hover:shadow-lg transition"
            >
              <div className="relative w-full h-56">
                <Image
                  src={cancer.image}
                  alt={cancer.title}
                  fill
                  className="object-cover rounded-t-md"
                />
              </div>
              <div className="p-4">
                <h3 className="text-lg font-semibold text-blue-800 tracking-wide">
                  {cancer.title}
                </h3>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
}
