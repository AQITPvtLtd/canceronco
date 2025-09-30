"use client";
import { useState } from "react";
import Link from "next/link";
import Image from "next/image";
import { Menu, X } from "lucide-react";
import navItems from "@/data/navData";

export default function Navbar({ top = "3.5rem" }) {
  const [mobileOpen, setMobileOpen] = useState(false);

  return (
    <div
      style={{ top }}
      className="fixed left-0 right-0 z-40 transition-all duration-300"
    >
      <nav className="flex justify-between items-center px-4 sm:px-6 md:px-12 lg:px-20 py-3 bg-white shadow">
        {/* Logo */}
        <Link href="/" className="flex items-center gap-2">
          <Image
            src="/logo/logo.png"
            alt="Cancer Onco Logo"
            width={160}
            height={50}
            priority
            className="w-28 sm:w-32 md:w-40 lg:w-48 h-auto"
          />
        </Link>

        {/* Desktop Nav */}
        <ul className="hidden md:flex gap-8 lg:gap-12 text-sm font-semibold text-gray-800">
          {navItems.map((item, i) =>
            item.dropdown ? (
              <li key={i} className="relative group">
                <button className="hover:text-teal-600">{item.name} ▾</button>
                <ul className="absolute left-0 hidden group-hover:block bg-white border rounded shadow-lg w-40">
                  {item.dropdown.map((sub, j) => (
                    <li key={j}>
                      <Link
                        href={sub.href}
                        className="block px-4 py-2 hover:bg-gray-100"
                      >
                        {sub.name}
                      </Link>
                    </li>
                  ))}
                </ul>
              </li>
            ) : (
              <li key={i}>
                <Link href={item.href} className="hover:text-teal-600">
                  {item.name}
                </Link>
              </li>
            )
          )}
        </ul>

        {/* Mobile Toggle */}
        <button
          className="md:hidden"
          onClick={() => setMobileOpen(!mobileOpen)}
        >
          {mobileOpen ? (
            <X className="w-7 h-7 text-gray-800" />
          ) : (
            <Menu className="w-7 h-7 text-gray-800" />
          )}
        </button>
      </nav>

      {/* Mobile Menu */}
      {mobileOpen && (
        <div className="md:hidden bg-white border-t shadow-lg px-6 py-4">
          <ul className="flex flex-col gap-4 text-sm font-semibold text-gray-800">
            {navItems.map((item, i) =>
              item.dropdown ? (
                <li key={i} className="group">
                  <details>
                    <summary className="cursor-pointer hover:text-teal-600">
                      {item.name}
                    </summary>
                    <ul className="ml-4 flex flex-col gap-2">
                      {item.dropdown.map((sub, j) => (
                        <li key={j}>
                          <Link
                            href={sub.href}
                            className="block hover:text-teal-600"
                            onClick={() => setMobileOpen(false)}
                          >
                            {sub.name}
                          </Link>
                        </li>
                      ))}
                    </ul>
                  </details>
                </li>
              ) : (
                <li key={i}>
                  <Link
                    href={item.href}
                    className="hover:text-teal-600"
                    onClick={() => setMobileOpen(false)}
                  >
                    {item.name}
                  </Link>
                </li>
              )
            )}
          </ul>
        </div>
      )}
    </div>
  );
}
