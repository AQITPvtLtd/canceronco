// components/Footer.jsx
"use client";
import { Phone, Mail, MapPin, ChevronRight } from "lucide-react";
import { FaXTwitter } from "react-icons/fa6";
import { FaQuora, FaFacebookF, FaYoutube, FaLinkedin, FaInstagram, FaPinterest, FaMedium } from "react-icons/fa";
import Link from "next/link";
import Image from "next/image";

export default function Footer() {
  return (
    <footer className="bg-black text-white py-12 mt-5">
      <div className="max-w-7xl mx-auto px-6 text-center">
        {/* Logo & Intro */}
        <div className="mb-8">
          <Image
            src="/logo/footer-logo.webp" // ✅ apna logo public folder me daalo
            alt="CancerOnco Logo"
            width={220}
            height={80}
            className="mx-auto"
          />
          <p className="mt-3 text-gray-300 max-w-2xl mx-auto">
            Canceronco team has a common dream of making world class cancer treatment
            available to all. We are an online platform which offers holistic cancer services
            to our patients.
          </p>
        </div>

        {/* Grid Sections */}
        <div className="grid grid-cols-1 md:grid-cols-4 gap-10 text-left">
          {/* Clinics */}
          <div>
            <h2 className="font-bold text-lg mb-4">THE CANCERONCO CLINICS</h2>
            <div className="flex flex-col space-y-2 text-gray-300">
              <Link href="https://maps.app.goo.gl/pq9MDgFzSTmq8oRo8" target="_blank" className="flex items-center gap-2 hover:text-white">
                <MapPin className="w-4 h-4 text-cyan-400" /> Central Delhi
              </Link>
              <Link href="/clinics/east" className="flex items-center gap-2 hover:text-white">
                <MapPin className="w-4 h-4 text-cyan-400" /> East Delhi
              </Link>
              <Link href="https://maps.app.goo.gl/V4JNsnkT2tJqeFHB7" target="_blank" className="flex items-center gap-2 hover:text-white">
                <MapPin className="w-4 h-4 text-cyan-400" /> West Delhi
              </Link>
              <Link href="/clinics/north" className="flex items-center gap-2 hover:text-white">
                <MapPin className="w-4 h-4 text-cyan-400" /> North Delhi
              </Link>
              <Link href="https://maps.app.goo.gl/X6kn47Rh6rEpToHR7" target="_blank" className="flex items-center gap-2 hover:text-white">
                <MapPin className="w-4 h-4 text-cyan-400" /> South Delhi
              </Link>
            </div>
          </div>

          {/* Quick Links */}
          <div>
            <h2 className="font-bold text-lg mb-4">QUICK LINKS</h2>
            <div className="flex flex-col space-y-2 text-gray-300">
              <Link href="/" className="flex items-center gap-2 hover:text-white">
                <ChevronRight className="w-4 h-4 text-cyan-400" /> Home
              </Link>
              <Link href="/about" className="flex items-center gap-2 hover:text-white">
                <ChevronRight className="w-4 h-4 text-cyan-400" /> About Us
              </Link>
              <Link href="/treatments" className="flex items-center gap-2 hover:text-white">
                <ChevronRight className="w-4 h-4 text-cyan-400" /> Treatments
              </Link>
              <Link href="/typeofcancer" className="flex items-center gap-2 hover:text-white">
                <ChevronRight className="w-4 h-4 text-cyan-400" /> Types Of Cancer
              </Link>
              <Link href="/blogs" className="flex items-center gap-2 hover:text-white">
                <ChevronRight className="w-4 h-4 text-cyan-400" /> Recent Blogs
              </Link>
              <Link href="/contact" className="flex items-center gap-2 hover:text-white">
                <ChevronRight className="w-4 h-4 text-cyan-400" /> Contact Us
              </Link>
            </div>
          </div>

          {/* Treatments */}
          <div>
            <h2 className="font-bold text-lg mb-4">TREATMENTS</h2>
            <div className="flex flex-col space-y-2 text-gray-300">
              <Link href="/treatments/immunotherapy" className="flex items-center gap-2 hover:text-white">
                <ChevronRight className="w-4 h-4 text-cyan-400" /> Immunotherapy
              </Link>
              <Link href="/treatments/chemotherapy" className="flex items-center gap-2 hover:text-white">
                <ChevronRight className="w-4 h-4 text-cyan-400" /> Chemotherapy
              </Link>
              <Link href="/treatments/radiation-therapy" className="flex items-center gap-2 hover:text-white">
                <ChevronRight className="w-4 h-4 text-cyan-400" /> Radiation Therapy
              </Link>
              <Link href="/treatments/targeted-therapy" className="flex items-center gap-2 hover:text-white">
                <ChevronRight className="w-4 h-4 text-cyan-400" /> Targeted Therapy
              </Link>
              <Link href="/treatments/robotic-surgery" className="flex items-center gap-2 hover:text-white">
                <ChevronRight className="w-4 h-4 text-cyan-400" /> Robotic Surgery
              </Link>
              <Link href="/treatments/car-t-cell-therapy" className="flex items-center gap-2 hover:text-white">
                <ChevronRight className="w-4 h-4 text-cyan-400" /> CAR-T Cell Therapy
              </Link>
            </div>
          </div>

          {/* Contact */}
          <div>
            <h2 className="font-bold text-lg mb-4">CONTACT</h2>
            <div className="flex space-x-3 mb-4">
              <Link href="https://www.facebook.com/Canceronco5" target="_blank"><FaFacebookF className="w-6 h-6 text-blue-500 transition-transform duration-500 hover:scale-125" /></Link>
              <Link href="twitter.com/sajjan80" target="_blank"><FaXTwitter className="w-6 h-6 text-sky-400 transition-transform duration-500 hover:scale-125" /></Link>
              <Link href="https://www.youtube.com/channel/UCQZ2VTJX1TFL2-BbJpurz8Q" target="_blank"><FaYoutube className="w-6 h-6 text-red-600 transition-transform duration-500 hover:scale-125" /></Link>
              <Link href="https://www.linkedin.com/company/canceronco" target="_blank"><FaLinkedin className="w-6 h-6 text-blue-700 transition-transform duration-500 hover:scale-125" /></Link>
              <Link href="https://www.instagram.com/dr.sajjanrajpurohit/" target="_blank"><FaInstagram className="w-6 h-6 text-pink-500 transition-transform duration-500 hover:scale-125" /></Link>
              <Link href="https://www.quora.com/profile/Dr-Sajjan-Rajpurohit-1?q=sajjan%20raj" target="_blank"><FaQuora className="w-6 h-6 text-red-600 transition-transform duration-500 hover:scale-125" /></Link>
              <Link href="https://canceronco.medium.com/" target="_blank"><FaMedium className="w-6 h-6 text-green-500 transition-transform duration-500 hover:scale-125" /></Link>
              <Link href="https://in.pinterest.com/canceronco/" target="_blank"><FaPinterest className="w-6 h-6 text-red-500 transition-transform duration-500 hover:scale-125" /></Link>
            </div>

            <div className="mb-4">
              <p className="flex items-center gap-2">
                <Phone className="w-5 h-5" /> <Link href="tel:+919871280511">+91-9871280511</Link>
              </p>
            </div>
            <div>
              <p className="flex items-center gap-2">
                <Mail className="w-5 h-5" /> <Link href="mailto:canceronco.com@gmail.com">canceronco.com@gmail.com</Link>
              </p>
            </div>
          </div>
        </div>
      </div>
    </footer>
  );
}
