"use client";
import React, { useEffect, useState } from "react";
import dynamic from "next/dynamic";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import { treatment } from "@/services/treatment";
import Link from "next/link";
import Image from "next/image";

// Disable SSR for Slider
const Slider = dynamic(() => import("react-slick"), { ssr: false });

// Custom Arrows
const CustomNextArrow = ({ onClick }) => (
  <button
    className="absolute top-1/2 cursor-pointer right-2 md:right-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 z-10"
    onClick={onClick}
    aria-label="next"
  >
    <GrNext size={20} />
  </button>
);

const CustomPrevArrow = ({ onClick }) => (
  <button
    className="absolute cursor-pointer top-1/2 left-2 md:left-4 transform -translate-y-1/2 bg-gray-800 text-white p-2 rounded-full shadow-md hover:bg-gray-600 z-10"
    onClick={onClick}
    aria-label="previous"
  >
    <GrPrevious size={20} />
  </button>
);

const Services = () => {
  const settings = {
    dots: false,
    infinite: true,
    slidesToShow: 3,
    slidesToScroll: 1,
    autoplay: true,
    autoplaySpeed: 3000,
    nextArrow: <CustomNextArrow />,
    prevArrow: <CustomPrevArrow />,
    responsive: [
      { breakpoint: 1024, settings: { slidesToShow: 2, slidesToScroll: 1 } },
      { breakpoint: 768, settings: { slidesToShow: 1, slidesToScroll: 1, swipeToSlide: true } },
    ],
  };

  const [treatments, setTreatments] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getResult() {
      try {
        const result = await treatment();
        setTreatments(result || []);
      } catch (error) {
        console.error("Error fetching type:", error);
        setTreatments([]);
      } finally {
        setLoading(false);
      }
    }
    getResult();
  }, []);

  if (loading) return <p className="text-center text-black">Loading types...</p>;

  return (
    <section className="bg-white">
      <div className="max-w-7xl mx-auto px-4 py-8">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-800">
            Our <span className="text-teal-500">Treatments</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-3"></div>
        </div>

        {treatments.length === 0 ? (
          <p className="text-center text-black">No treatments available.</p>
        ) : (
          <div className="equal-height-slider">
            <Slider {...settings}>
              {treatments.map((tr) => (
                <div key={tr.id || tr.title} className="px-2 h-full flex pb-5 pt-5">
                  <div className="bg-white rounded-lg shadow-lg overflow-hidden transition-all duration-300 hover:scale-105 flex flex-col h-full w-full card">
                    <div className="h-1 bg-teal-400" />

                    {/* Image */}
                    <div className="relative h-48 w-full">
                      {tr.image ? (
                        <Image
                          src={`/services/${tr.image}`}
                          alt={tr.title || "treatment image"}
                          fill
                          className="object-cover"
                          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
                        />
                      ) : (
                        <div className="bg-gray-200 h-full w-full flex items-center justify-center">
                          <span className="text-gray-500">No Image</span>
                        </div>
                      )}
                    </div>

                    {/* Content */}
                    <div className="p-6 flex flex-col flex-1 justify-between">
                      <div>
                        <h3
                          className="text-lg font-bold text-blue-600 text-center mb-3 leading-tight line-clamp-2 min-h-[3.5rem]"
                        >
                          {tr.title || "Untitled"}
                        </h3>

                        <p
                          className="text-gray-600 text-center text-sm leading-relaxed mb-6 line-clamp-3 min-h-[56px]"
                        >
                          {tr.short_content || "No description available."}
                        </p>
                      </div>

                      {tr.url && (
                        <div className="text-center mt-auto">
                          <Link href={`/treatments/${tr.url}`}>
                            <button className="border-2 border-teal-400 text-gray-700 px-8 py-2 rounded-full font-medium hover:bg-teal-400 hover:text-white transition-colors duration-300">
                              READ MORE
                            </button>
                          </Link>
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              ))}
            </Slider>
          </div>
        )}
      </div>

      {/* Global CSS for equal height + no peeking cards */}
      <style jsx global>{`
        /* Remove extra offset on sides */
        .equal-height-slider .slick-list {
          margin-left: 0 !important;
          margin-right: 0 !important;
          padding-left: 0 !important;
          padding-right: 0 !important;
        }
        /* Stretch all slides equally */
        .equal-height-slider .slick-track {
          display: flex !important;
          align-items: stretch !important;
        }
        .equal-height-slider .slick-slide {
          display: flex !important;
          height: auto !important;
        }
        .equal-height-slider .slick-slide > div {
          display: flex;
          flex-direction: column;
          width: 100%;
        }
        .equal-height-slider .card {
          display: flex;
          flex-direction: column;
          height: 100%;
        }
      `}</style>
    </section>
  );
};

export default Services;
