"use client";
import { FaMapMarkedAlt, FaPhoneAlt, FaEnvelope } from "react-icons/fa";
import Form from "./form/Form";

export default function Contact() {
  return (
    <section className="w-full bg-white">
      <div className="text-center mb-12">
        <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-800"style={{ fontFamily: "Roboto Slab, serif" }}>
          CONTACT <span className="text-teal-500">US</span>
        </h2>
        <div className="w-16 h-1 bg-teal-400 mx-auto mt-3"></div>
      </div>
      <div className="max-w-6xl mx-auto grid grid-cols-1 md:grid-cols-3">
        {/* LOCATION */}
        <div className="p-10 flex flex-col items-center text-center">
          {/* fixed header area — keeps icons/headings aligned across columns */}
          <div className="min-h-[96px] md:min-h-[120px] flex items-center justify-center gap-3">
            <FaMapMarkedAlt className="text-teal-500 text-4xl" />
            <h3 className="font-extrabold text-lg text-black">LOCATION</h3>
          </div>

          <div className="w-12 h-[2px] bg-teal-500 my-4"></div>

          <p className="text-gray-600 text-sm leading-relaxed max-w-md">
            Noida Branch :- F Block, Sector 50, Near Sector 50 metro station,
            Noida, UP 201303
            <br />
            <br />
            Delhi Branch:--- E – 18, Block E, Defence Colony, New Delhi, Delhi
            110024
          </p>
        </div>

        {/* EMERGENCY CASE */}
        <div className="p-10 flex flex-col items-center text-center bg-teal-500 text-white">
          <div className="min-h-[96px] md:min-h-[120px] flex items-center justify-center gap-3">
            <FaPhoneAlt className="text-4xl" />
            <h3 className="font-extrabold text-lg">EMERGENCY CASE</h3>
          </div>

          <div className="w-12 h-[2px] bg-white my-4"></div>

          <p className="text-xl font-bold mt-2">+91-9871280511</p>
        </div>

        {/* EMAIL */}
        <div className="p-10 flex flex-col items-center text-center">
          <div className="min-h-[96px] md:min-h-[120px] flex items-center justify-center gap-3">
            <FaEnvelope className="text-teal-500 text-4xl" />
            <h3 className="font-extrabold text-lg text-black">EMAIL</h3>
          </div>

          <div className="w-12 h-[2px] bg-teal-500 my-4"></div>

          <p className="text-gray-700 font-medium">CANCERONCO.COM@GMAIL.COM</p>
        </div>
      </div>
      <Form />
      <div className="py-6">
        <div className="w-full max-w-6xl mx-auto px-4">
          <div className="container rounded-xl overflow-hidden">
            <iframe
              src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.5413112469373!2d77.1796998!3d28.643506400000007!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d03e420323c3f%3A0xc4bb2e1849c4909c!2sDr%20Sajjan%20Rajpurohit%20-%20Best%20Medical%20Oncologist%20in%20Delhi%20%7C%20cancer%20doctor%20in%20Delhi%20%7C!5e0!3m2!1sen!2sin!4v1759122367212!5m2!1sen!2sin"
              width="100%"
              height="450"
              style={{ border: 0 }}
              loading="lazy"
              referrerPolicy="no-referrer-when-downgrade"
            ></iframe>
          </div>
        </div>
      </div>
    </section>

  );
}
