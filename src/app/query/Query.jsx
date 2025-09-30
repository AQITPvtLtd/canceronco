"use client";
import { useRouter } from "next/navigation";
import { query } from "@/services/query";
import React, { useState } from 'react';
import Swal from 'sweetalert2';
import { ClipLoader } from "react-spinners";

const Query = () => {
    const router = useRouter();
    const [loading, setLoading] = useState(false);
    const [queryData, setqueryData] = useState({
        fullname: "",
        email: "",
        phone: ""
    });
    const handlechange = (e) => {
        const { name, value } = e.target;
        setqueryData({ ...queryData, [name]: value });
    };

    const handleSubmit = async (e) => {
        e.preventDefault();
        setLoading(true);

        const queryDataToSend = new FormData();
        queryDataToSend.append("fullname", queryData.fullname);
        queryDataToSend.append("phone", queryData.phone);
        queryDataToSend.append("email", queryData.email);

        try {
            const response = await query(queryDataToSend);
            if (response.success) {
                Swal.fire({
                    title: "Form Submitted Successfully!",
                    text: "We have received your information.",
                    icon: "success",
                });
                setqueryData({
                    fullname: "",
                    phone: "",
                    email: "",
                });
                // ❌ remove this so page doesn't change
                // router.push("/");
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
        <div className="bg-white shadow-md border rounded-md p-5">
            <h2 className="text-lg font-bold mb-4 text-center">Raise Query</h2>
            <form className="space-y-3" onSubmit={handleSubmit}>
                <input
                    type="text"
                    placeholder="Name"
                    id="fullname"
                    name="fullname"
                    value={queryData.fullname}   // ✅ add this
                    onChange={handlechange}
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="email"
                    placeholder="Email"
                    id="email"
                    name="email"
                    value={queryData.email}      // ✅ add this
                    onChange={handlechange}
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <input
                    type="text"
                    placeholder="Mobile No."
                    id="phone"
                    name="phone"
                    value={queryData.phone}      // ✅ add this
                    onChange={handlechange}
                    className="w-full border p-2 rounded focus:outline-none focus:ring-2 focus:ring-blue-500"
                />

                <button
                    type="submit"
                    className="w-full bg-blue-600 text-white font-semibold py-2 rounded hover:bg-blue-700 transition"
                >
                    SUBMIT
                </button>
            </form>
        </div>
    )
}

export default Query