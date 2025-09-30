import { useRouter } from "next/navigation";
import { second } from "@/services/second";
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ClipLoader } from "react-spinners";

const Callback = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [secondData, setsecondData] = useState({
        fullname: "",
        phone: "",
        email: "",
        MedicalReport: null,
        message: "",
    });
    const handlechange = (e) => {
        const { name, value } = e.target;
        setsecondData({ ...secondData, [name]: value });
    };

    const handleFileChange = (e) => {
        const file = e.target.files[0];
        if (file && file.size > 10 * 1024 * 1024) {
            Swal.fire({
                icon: "warning",
                title: "File Too Large",
                text: "Please upload a file smaller than 10MB.",
            });
            e.target.value = "";
            return;
        }
        setsecondData({ ...secondData, MedicalReport: file });
    }

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const secondDataToSend = new FormData();
        secondDataToSend.append("fullname", secondData.fullname);
        secondDataToSend.append("phone", secondData.phone);
        secondDataToSend.append("email", secondData.email);
        secondDataToSend.append("message", secondData.message);
        if (secondData.MedicalReport) {
            secondDataToSend.append("MedicalReport", secondData.MedicalReport);
        }

        try {
            const response = await second(secondDataToSend);
            if (response.success) {
                Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "We have received your information.",
                    icon: "success",
                });
                setsecondData({
                    fullname: "",
                    phone: "",
                    email: "",
                    service: "",
                    message: "",
                });
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
        <div className="bg-teal-500 p-6 rounded-lg shadow-md">
            <h3 className="text-white font-bold text-lg text-center mb-6">
                GET A CALL BACK FROM OUR HEALTH CARE MANAGER
            </h3>

            <form className="space-y-4" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name*"
                    id="fullname"
                    name="fullname"
                    value={secondData.fullname}
                    onChange={handlechange}
                    className="w-full px-3 py-2 bg-white text-black rounded-md outline-none border focus:ring-2 focus:ring-teal-300"
                />
                <input
                    type="text"
                    placeholder="Phone*"
                    id="phone"
                    name="phone"
                    value={secondData.phone}      // ✅ add this
                    onChange={handlechange}
                    className="w-full px-3 bg-white text-black py-2 rounded-md outline-none border focus:ring-2 focus:ring-teal-300"
                />
                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={secondData.email}      // ✅ add this
                    onChange={handlechange}
                    className="w-full px-3 py-2 bg-white text-black rounded-md outline-none border focus:ring-2 focus:ring-teal-300"
                />
                <input
                    type="file"
                    id="MedicalReport"
                    name="MedicalReport"
                    onChange={handleFileChange}
                    accept=".pdf, .doc, .docx, .xls, .xlsx, .txt, .jpg, .png, .jpeg, .avif"
                    className="w-full text-gray-600 bg-white"
                />
                <textarea
                    placeholder="Write Your Query (optional)"
                    rows="3"
                    id='message'
                    name='message'
                    value={secondData.message}
                    onChange={handlechange}
                    className="w-full px-3 bg-white text-black py-2 rounded-md outline-none border focus:ring-2 focus:ring-teal-300"
                ></textarea>

                <button
                    type="submit"
                    className="w-full bg-white text-gray-900 font-semibold py-2 rounded-md shadow hover:bg-gray-100"
                >
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default Callback