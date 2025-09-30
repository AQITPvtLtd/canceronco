"use client";
import { useEffect, useState } from "react";
import { FaUserMd, FaAward } from "react-icons/fa";
import { MdMenuBook } from "react-icons/md";
import { PiUsersThreeFill } from "react-icons/pi";

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

export default function Stats() {
  const stats = [
    {
      id: 1,
      icon: <PiUsersThreeFill className="text-teal-500 text-5xl mb-4" />,
      number: 100000,
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
      number: 8,
      label: "NATIONAL AWARDS",
    },
  ];

  return (
    <section
      className="relative bg-cover bg-center py-16"
      style={{ backgroundImage: "url('/best/06.webp')" }}
    >
      {/* Overlay */}
      <div className="absolute inset-0 bg-black/40"></div>

      {/* Content */}
      <div className="relative max-w-6xl mx-auto px-4 grid grid-cols-1 md:grid-cols-4 gap-8">
        {stats.map((stat) => {
          const count = useCounter(stat.number, 2000); // 2s animation
          return (
            <div
              key={stat.id}
              className="bg-white rounded-lg shadow-lg p-8 flex flex-col items-center justify-center text-center transition-transform hover:scale-105"
            >
              {/* ✅ Icon Centered */}
              {stat.icon}
              <h3 className="text-3xl font-extrabold text-gray-800">
                {count}+
              </h3>
              <p className="mt-2 text-gray-600 font-medium uppercase">
                {stat.label}
              </p>
            </div>
          );
        })}
      </div>
    </section>
  );
}
