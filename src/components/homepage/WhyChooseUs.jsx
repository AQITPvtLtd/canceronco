"use client";
import { FaHeadset, FaFlask, FaUserMd, FaClock } from "react-icons/fa";
import Link from "next/link";

export default function WhyChooseUs() {
  const features = [
    {
      id: 1,
      icon: <FaHeadset className="text-white text-4xl" />,
      title: "GET THE BEST SECOND OPINION",
      desc: "Accurate consultation and evidence based medicine to making decisions about the care of individual patients.",
    },
    {
      id: 2,
      icon: <FaFlask className="text-white text-4xl" />,
      title: "GET CANCER TESTS DONE",
      desc: "We help you find the most trusted and affordable cancer diagnostics tests and services.",
    },
    {
      id: 3,
      icon: <FaUserMd className="text-white text-4xl" />,
      title: "AFFORDABLE TREATMENT",
      desc: "We have dedicated team of medical experts to provide the best latest and affordable cancer treatment.",
    },
    {
      id: 4,
      icon: <FaClock className="text-white text-4xl" />,
      title: "TIME & ACCURATE PROCESS",
      desc: "Watch the full video to know how to avail our services.",
    },
  ];

  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <div className="text-center max-w-3xl mx-auto mb-12 px-4">
        <h2 className="text-2xl md:text-3xl font-bold text-gray-800"style={{ fontFamily: "Roboto Slab, serif" }}>
          WHY <span className="text-teal-600">CHOOSE US?</span>
        </h2>
        <p className="mt-4 text-gray-600">
          <strong>CancerOnco</strong> is an online platform that provides
          patients with comprehensive cancer care. The team at CancerOnco shares
          the goal of making world-class cancer therapy available to everyone.
          CancerOnco offers{" "}
          <Link href="#" className="text-teal-600">
            teleconsultation services
          </Link>{" "}
          for cancer patients to clear up any confusion about the sort of cancer
          they have and the treatment they require.
        </p>
      </div>

      {/* Features Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-8 px-4">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white shadow-md rounded-lg p-8 text-center border-t-4 border-teal-500 hover:shadow-lg transition"
          >
            {/* Icon Circle */}
            <div className="w-20 h-20 mx-auto flex items-center justify-center bg-teal-500 rounded-full mb-6">
              {feature.icon}
            </div>
            {/* Title */}
            <h3 className="text-lg font-bold text-gray-800 mb-4 uppercase">
              {feature.title}
            </h3>
            {/* Description */}
            <p className="text-gray-600">{feature.desc}</p>
          </div>
        ))}
      </div>
    </section>
  );
}
