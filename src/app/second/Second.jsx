// components/SecondOpinion.jsx
"use client";
import { FaHandshake, FaBriefcaseMedical, FaUserAlt, FaUserMd } from "react-icons/fa";
import Callback from "../callback/Callback";
import WhyChooseUs from "../whychooseus/Whychooseus";
import Treatments from "../treatments/Treatments";
import Aboutsecond from "./about/About";

export default function Second() {
    return (
        <section className="bg-white">
            <section className="w-full py-12 px-4 md:px-16">
                <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-10 items-center">
                    {/* LEFT CONTENT */}
                    <div>
                        <h2 className="text-2xl md:text-3xl font-bold text-gray-900 leading-snug">
                            Get a Second Opinion On Cancer Treatment
                        </h2>
                        <p className="text-lg text-teal-600 font-semibold mt-2">
                            From Expert Dr. Sajjan Rajpurohit
                        </p>

                        <ul className="mt-6 space-y-5 text-gray-700">
                            <li className="flex items-center gap-3">
                                <FaHandshake className="text-teal-600 text-xl" />
                                <span>
                                    <strong>20000+ </strong>patients connected
                                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaBriefcaseMedical className="text-teal-600 text-xl" />
                                <span>
                                    Easy online process. Saves time, travel, and cost
                                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaUserAlt className="text-teal-600 text-xl" />
                                <span>
                                    Seek a Second Opinion at any stage
                                </span>
                            </li>

                            <li className="flex items-center gap-3">
                                <FaUserMd className="text-teal-600 text-xl" />
                                <span>
                                    Expert opinion with Dr Sajjan Rajpurohit
                                </span>
                            </li>
                        </ul>
                    </div>

                    {/* RIGHT FORM */}
                    <Callback />
                </div>
            </section>
            <WhyChooseUs />
            <Treatments />
            <Aboutsecond />
            <section className="w-full py-16 bg-white">
                <div className="max-w-5xl mx-auto px-6 text-center">
                    {/* Heading */}
                    <h2 className="text-2xl md:text-3xl font-bold text-gray-900" style={{ fontFamily: "Roboto Slab, serif" }}>
                        WHY GO FOR A{" "}
                        <span className="text-cyan-500">SECOND OPINION</span> ON YOUR CANCER
                        TREATMENT
                    </h2>

                    {/* Divider */}
                    <div className="w-12 h-1 bg-cyan-500 mx-auto my-4"></div>

                    {/* Paragraph */}
                    <p className="text-gray-600 leading-relaxed text-justify md:text-center">
                        A second opinion can help you better understand your treatment
                        options. This is particularly important if you have an uncommon form
                        of cancer. Even with standard treatment protocols for your specific
                        type and stage of cancer, there can be variations in treatment.
                        Different doctors may take different approaches. Treatment type,
                        treatment schedule, and supportive therapies could all be considered.
                        You should also ask about any clinical trials that are available. If
                        you get a second opinion, the doctor will first confirm your
                        diagnosis. You should also know the type of cancer, where it is, if it
                        has spread and if it affects other body parts. A second opinion is not
                        just useful for getting medical information. It can also help you
                        decide if a doctor, health care team, and treatment center are a good
                        fit for you. It is rare for successful treatment to come from just one
                        doctor&apos;s efforts. Oncologists, surgeons, nurses, and others who
                        have different perspectives and approaches must work together as part
                        of a treatment team. No matter where or how you get a second opinion,
                        newly diagnosed cancer patients should be encouraged to know that
                        there&apos;s more hope for cancer treatment today than ever before.
                    </p>
                </div>
            </section>

        </section>
    );
}
