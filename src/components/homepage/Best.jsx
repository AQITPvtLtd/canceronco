"use client";
import Image from "next/image";

export default function Best() {
  return (
    <section className="relative w-full min-h-[400px] md:min-h-[500px] lg:min-h-[600px] flex items-center justify-center text-center text-white py-12 md:py-16">
      {/* Background Image with overlay */}
      <div className="absolute inset-0">
        <Image
          src="/best/06.webp" // 👉 apna image path
          alt="Cancer Treatment"
          fill
          priority
          className="object-cover"
        />
        <div className="absolute inset-0 bg-black/60"></div>
      </div>

      {/* Content */}
      <div className="relative max-w-4xl mx-auto px-4 sm:px-6">
        <h2 className="text-2xl sm:text-3xl md:text-4xl font-extrabold uppercase leading-snug"style={{ fontFamily: "Roboto Slab, serif" }}>
          BEST CANCER TREATMENTS{" "}
          <span className="text-teal-400">IN DELHI</span>
        </h2>
        <div className="w-16 h-1 bg-teal-400 mx-auto my-4"></div>

        <p className="text-sm sm:text-base md:text-lg leading-relaxed text-gray-100">
          <strong>Best Medical oncologist in Delhi Dr Sajjan Rajpurohit</strong>{" "}
          can remove the tumour and any surrounding tissues if a biopsy finds
          cancer cells. <strong>Radiation oncologists</strong> are medical
          professionals that treat cancer patients with radiation, both
          externally and inside. In order to shrink tumours and destroy cancer
          cells, external radiation treatment employs high-energy photon beams.
          Intravenous radiation therapy (IVRT) is one such method. Iodine-131 is
          one such radioactive substance. In Delhi, India has a good experienced{" "}
          <strong>oncologist in Delhi</strong> for the{" "}
          <strong>treatment of cancer.</strong> Medicine’s approach to treating
          cancer may be categorized as either medical, surgical, or radiation.
          They are different types of oncologists who can do their different
          types of treatment.
        </p>
      </div>
    </section>
  );
}
