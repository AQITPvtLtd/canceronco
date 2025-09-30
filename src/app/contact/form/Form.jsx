"use client";
import { FaPaperPlane } from "react-icons/fa";
import { form } from "@/services/user";
import { useRouter } from "next/navigation";
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ClipLoader } from "react-spinners";

export default function Form() {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [formData, setFormData] = useState({
        fullname: "",
        email: "",
        phone: "",
        service: "",
        message: "",
    });
    const handlechange = (e) => {
        const { name, value } = e.target;
        setFormData({ ...formData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const formDataToSend = new FormData();
        formDataToSend.append("fullname", formData.fullname);
        formDataToSend.append("phone", formData.phone);
        formDataToSend.append("email", formData.email);
        formDataToSend.append("service", formData.service);
        formDataToSend.append("message", formData.message);

        try {
            const response = await form(formDataToSend);
            if (response.success) {
                Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "We have received your information.",
                    icon: "success",
                });
                setFormData({
                    fullname: "",
                    phone: "",
                    email: "",
                    service: "",
                    message: "",
                });
                router.push("/");
            } else {
                Swal.fire({
                    icon: "error",
                    title: "Oops...",
                    text: "Something went wrong! Please try again later.",
                });
            }
        } catch (error) {
            Swal.fire({
                icon: "error",
                title: "Error",
                text: "Failed to submit the form. Please check your network and try again.",
            });
        } finally {
            setLoading(false);
        }
    };
    return (
        <section className="bg-gray-50 py-12">
            <div className="max-w-4xl mx-auto px-4">
                <h2 className="text-center text-black text-2xl md:text-3xl font-bold mb-10">
                    Get in touch with us
                </h2>

                <form className="grid grid-cols-1 md:grid-cols-2 gap-6" onSubmit={handleSubmit}>
                    {/* Name */}
                    <input
                        type="text"
                        placeholder="Name*"
                        id='fullname'
                        name='fullname'
                        onChange={handlechange}
                        required
                        className="border border-gray-300 text-black rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    {/* Email */}
                    <input
                        type="email"
                        placeholder="Email*"
                        id='email'
                        name='email'
                        onChange={handlechange}
                        required
                        className="border border-gray-300 text-black rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    {/* Phone */}
                    <input
                        type="tel"
                        placeholder="Phone*"
                        id='phone'
                        name='phone'
                        onChange={handlechange}
                        required
                        className="border border-gray-300 text-black rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    />

                    {/* Service Select */}
                    <select id='service' name='service' onChange={handlechange} className="border border-gray-300 text-black rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500">
                        <option value="">Select Service</option>
                        <option value="consultation">Immunotherapy</option>
                        <option value="treatment">Chemotherapy</option>
                        <option value="emergency">Radiation Therapy</option>
                        <option value="emergency">Targated Therapy</option>
                        <option value="emergency">Robotic Surgery</option>
                        <option value="emergency">CAR-T Cell Therapy</option>
                    </select>

                    {/* Details */}
                    <textarea
                        placeholder="Any Details"
                        id='message'
                        name='message'
                        onChange={handlechange}
                        rows="5"
                        className="md:col-span-2 text-black border border-gray-300 rounded-md px-4 py-3 focus:outline-none focus:ring-2 focus:ring-teal-500"
                    ></textarea>

                    {/* Submit Button */}
                    <div className="md:col-span-2 flex justify-center">
                        <button
                            type="submit"
                            className="flex items-center gap-2 border-2 border-teal-500 text-black font-semibold px-8 py-3 rounded-md hover:bg-teal-500 hover:text-white transition"
                        >
                            SEND MESSAGE <FaPaperPlane />
                        </button>
                    </div>
                </form>
            </div>
        </section>
    );
}
