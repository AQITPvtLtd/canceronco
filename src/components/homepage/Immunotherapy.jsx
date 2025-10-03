"use client";
import React from "react";

export default function Immunotherapy() {
  return (
    <section className="py-16 bg-white">
      <div className="max-w-6xl mx-auto grid md:grid-cols-2 gap-10 px-6 items-center">
        {/* Left Content */}
        <div>
          <h2 className="text-2xl md:text-3xl font-bold mb-4 text-black"style={{ fontFamily: "Roboto Slab, serif" }}>
            WHAT IS <span className="text-teal-500">IMMUNOTHERAPY?</span>
          </h2>
          <div className="h-1 w-12 bg-teal-500 mb-6"></div>

          <p className="text-gray-700 mb-4">
            Immunotherapy is a type of cancer treatment that enhances the body's
            natural immunity to fight cancer and which can kill cancer cells.
          </p>
          <p className="text-gray-700 mb-4">
            The resistance power in our body is due to the muscles called
            T-cell. These cells fight germs or viruses in our bodies.
          </p>
          <p className="text-gray-700 mb-4">
            But when there is cancer or the cancer cells start growing very fast
            and when they interact with T-cells, then their t-cells become
            inactive and do not recognize these cancer cells and they do not
            kill them because of that. Due to this, the immune system of our
            body is unable to work against cancer.
          </p>
          <p className="text-gray-700">
            To understand this, the scientists developed such therapy such that
            this therapy can be given through saline and which can modify or
            stop the conversation between T-cells and cancer cells. Due to this,
            the T-cells are able to recognize the cancer cells and kill them.
          </p>
        </div>

        {/* Right Video */}
        <div className="relative w-full aspect-video">
          <iframe
            className="w-full h-full rounded-md shadow-lg"
            src="https://www.youtube.com/embed/M0Mk4vyC3-E?si=A6glPBNKBcy2QYFb"
            title="YouTube video player"
            frameBorder="0"
            allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
            referrerPolicy="strict-origin-when-cross-origin"
            allowFullScreen
          ></iframe>
        </div>
      </div>
    </section>
  );
}
