// components/DoctorBio.jsx
"use client";
import Image from "next/image";
import Link from "next/link";
import { useEffect, useState } from "react";
import { FaUserMd, FaAward } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";
import Gallery from "../media/gallery/Gallery";

// 🔹 Counter Hook
function useCounter(end, duration = 2000) {
    const [count, setCount] = useState(0);

    useEffect(() => {
        let start = 0;
        const increment = Math.ceil(end / (duration / 16));
        // 16ms ≈ 60fps

        const timer = setInterval(() => {
            start += increment;
            if (start >= end) {
                setCount(end); // ✅ exact stop
                clearInterval(timer);
            } else {
                setCount(start);
            }
        }, 16);

        return () => clearInterval(timer);
    }, [end, duration]);

    return count;
}

export default function About() {
    const stats = [
        {
            id: 1,
            icon: <PiUsersThreeFill className="text-teal-500 text-5xl mb-4" />,
            number: 94521,
            label: "HAPPY PATIENTS",
        },
        {
            id: 2,
            icon: <FaUserMd className="text-teal-500 text-5xl mb-4" />,
            number: 22,
            label: "TOTAL EXPERIENCE",
        },
        {
            id: 3,
            icon: <MdMenuBook className="text-teal-500 text-5xl mb-4" />,
            number: 85,
            label: "RESEARCH & PUBLICATION",
        },
        {
            id: 4,
            icon: <FaAward className="text-teal-500 text-5xl mb-4" />,
            number: 6,
            label: "NATIONAL AWARDS",
        },
    ];
    return (
        <section className="bg-white">
            <div className="text-center mb-12">
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-800" style={{ fontFamily: "Roboto Slab, serif" }}>
                    ABOUT <span className="text-teal-500">US</span>
                </h2>
                <div className="w-16 h-1 bg-teal-400 mx-auto mt-3"></div>
            </div>
            <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left: Doctor Image */}
                <div className="flex justify-center">
                    <Image
                        src="/about/doctor.png" // ✅ apni image "public" folder me doctor.png ke naam se daal dena
                        alt="Dr. Sajjan Rajpurohit"
                        width={500}
                        height={600}
                        className="rounded-lg shadow-md"
                    />
                </div>

                {/* Right: Text Content */}
                <div>
                    <h1 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                        DR. SAJJAN RAJPUROHIT
                    </h1>

                    <p className="text-black mb-4">
                        <span className="font-bold">Cancer Specialist in Delhi, India</span>{" "}
                        <span className="font-bold">Dr. Sajjan Rajpurohit</span> is acknowledged
                        as a versatile veteran in treating various{" "}
                        <Link href="/typeofcancer" className="text-blue-700 font-semibold">
                            types of cancers
                        </Link>
                        , A qualified MBBS with MD in Medicine and DNB in Medical Oncology,
                        Dr. Sajjan Rajpurohit&apos;s training and exposure to global medical practices
                        are extensive and enviable. His keen interest in alleviating the trauma
                        of cancer patients inspired him to specialize in ESMO Immuno Oncology
                        Preceptorship. ESMO Neuroendocrine Tumor Preceptorship, and trained in
                        Immuno-oncology from premier institutions in Geneva, Singapore, and the US.
                        He is also a European Certified as{" "}
                        <Link href="/" className="text-blue-700 font-semibold">
                            Best Oncologist in Delhi, India
                        </Link>
                        , ESMO, Geneva.
                    </p>

                    <p className="text-black">
                        Dr. Sajjan Rajpurohit, who is committed to helping people suffering from
                        cancer live better and healthier lives built CancerOnco to provide the{" "}
                        <span className="font-bold">best cancer treatment in Delhi, India.</span>{" "}
                        The medical oncologists at CancerOnco.com use the latest medical
                        technologies to treat cancer patients. Moreover, medical services are
                        provided round-the-clock from pre-check-up health information to
                        post-treatment to patients. In fact, CancerOnco aims to provide organized
                        cancer treatment for patients so that cancer can be eradicated globally.
                    </p>
                </div>
            </section>

            <section
                className="relative bg-cover bg-center py-16"
                style={{ backgroundImage: "url('/about/aboutbg.jpg')" }}
            >
                {/* Overlay */}
                <div className="absolute inset-0 bg-black/40"></div>

                {/* Content */}
                <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6 md:gap-8">
                    {stats.map((stat) => {
                        const count = useCounter(stat.number, 2000); // 2s animation
                        return (
                            <div
                                key={stat.id}
                                className="bg-white rounded-2xl shadow-lg p-6 md:p-8 flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
                            >
                                {/* ✅ Icon Centered */}
                                <div className="mb-3">{stat.icon}</div>
                                <h3 className="text-2xl md:text-3xl font-extrabold text-gray-800">
                                    {count}+
                                </h3>
                                <p className="mt-2 text-gray-600 font-medium uppercase text-sm md:text-base">
                                    {stat.label}
                                </p>
                            </div>
                        );
                    })}
                </div>
            </section>


            <section className="max-w-7xl mx-auto px-6 py-12 grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                {/* Left Side - Text */}
                <div>
                    <h2 className="text-2xl md:text-3xl font-extrabold text-gray-900 mb-4">
                        CANCER SPECIALIST IN DELHI, INDIA
                    </h2>
                    <p className="text-black mb-4">
                        <span className="font-bold">Best Cancer Specialist</span> in Delhi, India Dr.
                        Sajjan Rajpurohit, is acknowledged as a versatile veteran in treating various
                        types of cancers, A qualified MBBS with MD in Medicine and DNB in Medical
                        Oncology. Cancer specialist Dr. Sajjan Rajpurohit provides the best cancer
                        treatment in Delhi, India, for cancer patients.
                    </p>
                    <p className="text-black mb-4">
                        Our medical oncologists team treat cancer patients with the most advanced
                        medical technologies. Medical services are also provided around the clock,
                        from pre-screening health information to post-treatment to patients. In fact,
                        Dr. Sajjan aims to provide organized cancer treatment in Delhi for patients
                        so that cancer can be eradicated globally.
                    </p>
                </div>

                {/* Right Side - Image */}
                <div className="flex justify-center">
                    <Image
                        src="/about/doctor1.jpg" // ✅ apni image public folder me doctor-consult.png ke naam se daalna
                        alt="Cancer Specialist"
                        width={500}
                        height={400}
                        className="rounded-lg shadow-md"
                    />
                </div>
            </section>
            <Gallery />
        </section>
    );
}
