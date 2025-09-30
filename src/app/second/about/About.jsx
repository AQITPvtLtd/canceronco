"use client";
import { useState } from "react";
import Image from "next/image";
import { FaDownload } from "react-icons/fa";

export default function Aboutsecond() {
  const [activeTab, setActiveTab] = useState("experience");

  const tabs = [
    { id: "experience", label: "Experience" },
    { id: "education", label: "Education" },
    { id: "awards", label: "Awards" },
    { id: "profile", label: "Profile" },
  ];

  const content = {
    experience: [
      "Senior Director & HOD (Medical Oncology) BLK Super Speciality Hospital, Rajendra Place",
      "Director - Best Medical Oncologist in Delhi, India, Max Super Speciality Centre, Shalimar Bagh",
      "Consultant and Unit Head (Medical Oncology) - Rajiv Gandhi Cancer Institute, New Delhi",
      "Editor in Chief - Clinical Oncology, Textbook of Oncology, Theme publication, Germany",
      "Managing Editor - Asian Journal of Oncology (2015)",
      "Consultant - Rajiv Gandhi Cancer Institute & Research Centre (RGCI & RC), New Delhi (2011)",
      "National Faculty for Post Graduate teaching - Dr. Bhatia Institute for MD/MS (2008 - 2009)",
      "Medical Director - Mansaram Hospital (2007)",
    ],
    education: [
      "DNB (Best Medical Oncologist in Delhi, India) - Rajiv Gandhi Cancer Institute & Research Centre (RGCI & RC), New Delhi (2011)",
      "MD (Medicine) - Maulana Azad Medical College(MAMC), New Delhi (2007)",
      "MBBS - Maulana Azad Medical College (MAMC),New Delhi (2002)",
      "ESMO Immuno Oncology Perceptorship, Geneva(2013)",
      "ESMO Neuroendocrine Tumor Preceptorship, Singapore (2013)",
      "Immuno-oncology training from MD Anderson Cancer Centre, Houston- USA (2012)",
      "European Certified Best Medical Oncologist, ESMO, Geneva (2011)",
    ],
    awards: [
      "Best Medical Oncologist in Delhi, India, India Today Group (2017)",
      "Best Oncologist of the Year, ELETS Annual Meet(2016)",
      "Young Scientist Award",
      "Dr. Satya Gupta Memorial Award for Best Thesis by Indian Academy of Pediatrics (IAP)",
      "More than 50 National & International publications",
    ],
    profile: {
      name: "Dr. Sajjan Rajpurohit",
      designation: "Senior Director - Medical Oncology",
      hospital1: "BLK-Max Cancer Center",
      hospital2: "BLK-Max Super Speciality Hospital, New Delhi",
      downloadLink: "/profile/Dr.-Sajjan-Rajpurohit.pdf", // put PDF file in /public folder
    },
  };

  return (
    <section className="py-12 bg-white">
      <div className="max-w-6xl mx-auto grid lg:grid-cols-2 gap-12 px-4 sm:px-6 items-start">
        {/* Doctor Image */}
        <div className="flex justify-center lg:justify-start">
          <div className="relative w-[280px] h-[360px] sm:w-[320px] sm:h-[420px] md:w-[380px] md:h-[480px] lg:w-[420px] lg:h-[520px]">
            <Image
              src="/about/doctor2.png"
              alt="Dr. Sajjan Rajpurohit"
              fill
              className="rounded-md shadow object-cover"
            />
          </div>
        </div>

        {/* Doctor Info */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-2 text-black text-center lg:text-left">
            DR. SAJJAN <span className="text-teal-500">RAJPUROHIT</span>
          </h2>
          <div className="h-1 w-12 bg-teal-500 mb-6 mx-auto lg:mx-0"></div>

          {/* Tabs */}
          <div className="flex flex-wrap gap-3 border-b pb-2 mb-6 justify-center lg:justify-start">
            {tabs.map((tab) => (
              <button
                key={tab.id}
                onClick={() => setActiveTab(tab.id)}
                className={`px-4 py-1 rounded font-medium transition ${
                  activeTab === tab.id
                    ? "text-white bg-blue-600"
                    : "text-gray-700 hover:text-blue-600"
                }`}
              >
                {tab.label}
              </button>
            ))}
          </div>

          {/* Content */}
          <div className="min-h-[240px] text-center lg:text-left">
            {activeTab !== "profile" ? (
              <ul className="list-disc pl-5 space-y-2 text-gray-700 text-sm sm:text-base text-left">
                {content[activeTab].map((item, index) => (
                  <li key={index}>{item}</li>
                ))}
              </ul>
            ) : (
              <div className="space-y-2">
                <h3 className="text-lg sm:text-xl font-bold text-black">{content.profile.name}</h3>
                <p className="text-gray-700">{content.profile.designation}</p>
                <p className="text-gray-700">{content.profile.hospital1}</p>
                <p className="text-gray-700">{content.profile.hospital2}</p>

                <a
                  href={content.profile.downloadLink}
                  download
                  className="inline-flex items-center bg-teal-500 text-white px-4 py-2 rounded mt-4 hover:bg-teal-600 transition"
                >
                  <FaDownload className="mr-2" /> Download Profile
                </a>
              </div>
            )}
          </div>
        </div>
      </div>
    </section>
  );
}
