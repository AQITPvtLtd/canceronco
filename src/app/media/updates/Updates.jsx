"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes, FaPlus } from "react-icons/fa";
import Image from "next/image";

// Gallery Data
export const galleryData = [
    { id: 1, path: "up.jpeg" },
    { id: 2, path: "up1.jpeg" },
    { id: 3, path: "up2.jpeg" },
    { id: 4, path: "up3.jpeg" },
    { id: 5, path: "up4.jpeg" },
    { id: 6, path: "up5.jpeg" },
    { id: 7, path: "up6.jpeg" },
    { id: 8, path: "up7.jpeg" },
    { id: 9, path: "up8.jpeg" },
    { id: 10, path: "up9.jpeg" },
    { id: 11, path: "up10.jpeg" },
    { id: 12, path: "up11.jpeg" },
    { id: 13, path: "up12.jpeg" },
    { id: 14, path: "up13.jpeg" },
    { id: 15, path: "up14.jpeg" },
    { id: 16, path: "up15.jpeg" },
    { id: 17, path: "up16.jpeg" },
    { id: 18, path: "up17.jpeg" },
    { id: 19, path: "up18.jpeg" },
    { id: 20, path: "up19.jpeg" },
    { id: 21, path: "up20.jpeg" },
    { id: 22, path: "up21.webp" },
    { id: 23, path: "up22.webp" },
    { id: 24, path: "up23.webp" },
    { id: 25, path: "up24.webp" },
    { id: 26, path: "up25.webp" },
    { id: 27, path: "up26.webp" },
    { id: 28, path: "up27.webp" },
    { id: 29, path: "up28.webp" },
    { id: 30, path: "up29.webp" },
    { id: 31, path: "up30.webp" },
    { id: 32, path: "up31.webp" },
    { id: 33, path: "up32.webp" },
];

const Updates = () => {
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
        <div className="bg-white min-h-screen">
            <div className="text-center mb-8">
                <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-800"style={{ fontFamily: "Roboto Slab, serif" }}>
                    CANCER <span className="text-teal-500">UPDATES</span>
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
                            src={`/media/updates/${photo.path}`}
                            alt={`media/updates ${photo.id}`}
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
                            src={`/media/updates/${galleryData[selectedIndex].path}`}
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

export default Updates;
