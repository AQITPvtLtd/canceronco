"use client";
import React, { useState } from "react";
import { FaChevronLeft, FaChevronRight, FaTimes, FaPlus } from "react-icons/fa";
import Image from "next/image";

// Gallery Data
export const galleryData = [
    { id: 1, path: "img.jpg" },
    { id: 2, path: "img1.jpg" },
    { id: 3, path: "img2.webp" },
    { id: 4, path: "img3.webp" },
    { id: 5, path: "img4.webp" },
    { id: 6, path: "img5.webp" },
    { id: 7, path: "img6.jpeg" },
    { id: 8, path: "img7.jpeg" },
    { id: 9, path: "img8.jpeg" },
    { id: 10, path: "img9.jpeg" },
    { id: 11, path: "img10.jpeg" },
    { id: 12, path: "img11.jpeg" },
    { id: 13, path: "img12.jpeg" },
    { id: 14, path: "img13.jpeg" },
    { id: 15, path: "img14.jpeg" },
    { id: 16, path: "img15.jpeg" },
    { id: 17, path: "img16.jpeg" },
    { id: 18, path: "img17.jpeg" },
    { id: 19, path: "img18.jpeg" },
    { id: 20, path: "img19.jpeg" },
    { id: 21, path: "img20.jpeg" },
    { id: 22, path: "img21.jpeg" },
    { id: 23, path: "img22.jpeg" },
    { id: 24, path: "img24.jpeg" },
    { id: 25, path: "img25.jpeg" },
    { id: 26, path: "img26.jpeg" },
    { id: 27, path: "img27.jpeg" },
    { id: 28, path: "img28.jpeg" },
    { id: 29, path: "img29.jpeg" },
    { id: 30, path: "img30.jpeg" },
    { id: 31, path: "img31.jpeg" },
    { id: 32, path: "img32.jpeg" },
    { id: 33, path: "img33.jpeg" },
    { id: 34, path: "img34.jpeg" },
];

const Gallery = () => {
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
                    OUR <span className="text-teal-500">GALLERY</span>
                </h2>
                <div className="w-16 h-1 bg-teal-400 mx-auto mt-3"></div>
            </div>

            {/* Gallery */}
            <div className="max-w-6xl mx-auto px-4 py-12 grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8">
                {galleryData.map((photo, index) => (
                    <div
                        key={photo.id}
                        className="group relative rounded-xl overflow-hidden shadow-lg cursor-pointer bg-[#f2efef]"
                        onClick={() => setSelectedIndex(index)}
                    >
                        <Image
                            src={`/gallery/${photo.path}`}
                            alt={`gallery ${photo.id}`}
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
                            src={`/gallery/${galleryData[selectedIndex].path}`}
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

export default Gallery;
