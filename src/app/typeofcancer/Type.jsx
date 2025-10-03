"use client";
import React, { useEffect, useState } from "react";
import { typeofcancer } from "@/services/typeofcancer";
import Link from "next/link";
import Image from "next/image";

const Type = () => {
  const [type, setType] = useState([]);
  const [loading, setLoading] = useState(true);

  useEffect(() => {
    async function getResult() {
      try {
        const result = await typeofcancer();
        setType(result);
      } catch (error) {
        console.error("Error fetching type:", error.message);
        setType([]);
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
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-800"style={{ fontFamily: "Roboto Slab, serif" }}>
            TYPES OF <span className="text-teal-500">CANCER</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-3"></div>
        </div>
        {type.length === 0 ? (
          <p className="text-center text-black">No types available.</p>
        ) : (
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6 items-stretch">
            {type.map((t) => (
              <div
                key={t.id || t.title}
                className="bg-white rounded-lg shadow-lg overflow-hidden flex flex-col h-full"
              >
                <div className="h-1 bg-teal-400" />

                <div className="relative h-48 w-full">
                  {t.image ? (
                    <Image
                      src={`/type/${t.image}`}
                      alt={t.title || "type image"}
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

                <div className="p-6 flex flex-col flex-1">
                  {/* Title: clamp to 2 lines and give fixed minHeight so every card's title area is same */}
                  <h3
                    className="text-lg font-bold text-blue-600 text-center mb-3 leading-tight"
                    style={{
                      display: "-webkit-box",
                      WebkitLineClamp: 2,
                      WebkitBoxOrient: "vertical",
                      overflow: "hidden",
                      minHeight: "3.5rem" // adjust if you want more/less space for title
                    }}
                  >
                    {t.title || "Untitled"}
                  </h3>

                  {/* Description: reserve a minimum height so descriptions start from same Y */}
                  <p
                    className="text-gray-600 text-center text-sm leading-relaxed mb-6"
                    style={{ minHeight: "56px" /* adjust as needed */ }}
                  >
                    {t.short_content || "No description available."}
                  </p>

                  {/* Button always pinned to bottom of card content */}
                  {t.url && (
                    <div className="text-center mt-auto">
                      <Link href={`/typeofcancer/${t.url}`}>
                        <button className="border-2 border-teal-400 text-gray-700 px-8 py-2 rounded-full font-medium hover:bg-teal-400 hover:text-white transition-colors duration-300">
                          READ MORE
                        </button>
                      </Link>
                    </div>
                  )}
                </div>
              </div>
            ))}
          </div>
        )}
      </div>
    </section>
  );
};

export default Type;
