"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes, FaPlus } from "react-icons/fa";
import Image from "next/image";

// Gallery Data
export const galleryData = [
    { id: 1, path: "press.jpg" },
    { id: 2, path: "press1.jpg" },
    { id: 3, path: "press2.jpg" },
];

const Press = () => {
    const [selectedIndex, setSelectedIndex] = useState(null);

    const handleNext = () => {
        setSelectedIndex((prev) => {
            const nextIndex = (prev + 1) % galleryData.length;
            return nextIndex;
        });
    };

    const handlePrev = () => {
        setSelectedIndex((prev) => {
            const prevIndex = (prev - 1 + galleryData.length) % galleryData.length;
            return prevIndex;
        });
    };

    const closeModal = () => setSelectedIndex(null);

    return (
        <div className="bg-white min-h-screen mt-[150px]">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-800">
                    PRESS <span className="text-teal-500">RELEASE</span>
                </h2>
                <div className="w-16 h-1 bg-teal-400 mx-auto mt-3"></div>
            </div>

            {/* Gallery */}
            <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {galleryData.map((photo, index) => (
                    <div
                        key={photo.id}
                        className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-white"
                        onClick={() => setSelectedIndex(index)}
                    >
                        <Image
                            src={`/media/press/${photo.path}`}
                            alt={`media/press ${photo.id}`}
                            width={500}
                            height={500}
                            className="w-full h-80 object-contain transition-transform duration-300 group-hover:scale-105"
                        />
                        <div className="absolute inset-0 bg-black/30 opacity-0 group-hover:opacity-100 transition duration-300 flex items-center justify-center">
                            <div className="w-12 h-12 rounded-full bg-white flex items-center justify-center">
                                <FaPlus className="text-[#00b894] text-2xl" />
                            </div>
                        </div>
                    </div>
                ))}

            </div>

            {/* Modal */}
            {selectedIndex !== null && (
                <div className="fixed inset-0 bg-black bg-opacity-90 z-[9999] flex items-center justify-center px-4">
                    {/* Close Button - Top Right */}
                    <div className="absolute top-4 right-4 z-50">
                        <button
                            onClick={closeModal}
                            className="text-white cursor-pointer text-3xl bg-black/60 hover:bg-black px-4 py-2 rounded-full"
                            aria-label="Close Modal"
                        >
                            <FaTimes />
                        </button>
                    </div>

                    {/* Prev Arrow */}
                    <button
                        onClick={handlePrev}
                        className="absolute left-4 cursor-pointer text-white bg-black/50 hover:bg-black p-2 rounded-full text-xl z-50"
                    >
                        <FaChevronLeft />
                    </button>

                    {/* Image Preview */}
                    <div className="bg-white rounded-lg shadow-2xl border border-gray-200 max-w-[90vw] max-h-[85vh] overflow-hidden">
                        <img
                            src={`/media/press/${galleryData[selectedIndex].path}`}
                            alt="Selected"
                            className="object-contain max-w-full max-h-[85vh]"
                        />
                    </div>

                    {/* Next Arrow */}
                    <button
                        onClick={handleNext}
                        className="absolute right-4 cursor-pointer text-white bg-black/50 hover:bg-black p-2 rounded-full text-xl z-50"
                    >
                        <FaChevronRight />
                    </button>
                </div>
            )}
        </div>
    );
};

export default Press;
