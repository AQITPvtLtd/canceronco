"use client";
import Link from "next/link";
import { Phone } from "lucide-react";

export default function Top({ isVisible }) {
  return (
    <div
      className={`hidden md:block fixed top-0 left-0 right-0 z-50 transition-all duration-300 ease-in-out ${
        isVisible
          ? "translate-y-0 opacity-100"
          : "-translate-y-full opacity-0"
      }`}
    >
      <div className="h-14 flex items-center justify-between px-6 border-b bg-white">
        <div className="flex items-center gap-2 text-gray-700 text-sm">
          <Phone className="w-4 h-4 text-teal-500" />
          <Link href="tel:+919871280511" className="hover:text-teal-600">
            +91-9871280511
          </Link>
        </div>

        <Link
          href="/appointment"
          className="bg-teal-500 hover:bg-teal-600 text-white px-4 py-2 rounded font-semibold text-sm"
        >
          BOOK AN APPOINTMENT
        </Link>
      </div>
    </div>
  );
}
