"use client";
import { FaPlus, FaClock } from "react-icons/fa";
import { LuStethoscope } from "react-icons/lu";

export default function Features() {
  const features = [
    {
      id: 1,
      icon: <FaPlus className="text-black text-3xl" />,
      title: "ADVANCE TECHNOLOGY",
      desc: "Our medical oncologists use the latest medical technologies for cancer treatment in Delhi, India.",
    },
    {
      id: 2,
      icon: <FaClock className="text-black text-3xl" />,
      title: "24/7 AVAILABILITY",
      desc: "Medical services are provided from pre-check-up health information to post-treatment to patients.",
    },
    {
      id: 3,
      icon: <LuStethoscope className="text-black text-3xl" />,
      title: "CANCER SOLUTION",
      desc: "Our mission is to provide organized cancer treatment for individuals so that we can eradicate cancer around the world.",
    },
  ];

  return (
    <section className="py-12 bg-gray-50">
      <div className="max-w-6xl mx-auto px-6 grid md:grid-cols-3 gap-8">
        {features.map((feature) => (
          <div
            key={feature.id}
            className="bg-white shadow-md rounded-md text-center p-6 border-t-4 border-teal-500"
          >
            <div className="flex justify-center">
              <div className="bg-white shadow-md rounded-full p-6 -mt-12">
                {feature.icon}
              </div>
            </div>
            <h3 className="mt-6 text-lg font-bold text-black">{feature.title}</h3>
            <p className="mt-3 text-gray-600 text-sm leading-relaxed">
              {feature.desc}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}
