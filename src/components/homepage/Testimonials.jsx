"use client";
import React, { useRef, useEffect } from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import { GrPrevious, GrNext } from "react-icons/gr";
import YouTube from "react-youtube";

const videos = [
    "1pUsXQXHr_A",
    "TLF_i-SXpEg",
    "jtQUP4NpMb4",
    "gbwxdtbH6-E",
];

const CustomPrevArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="p-3 bg-teal-500 text-white rounded-full shadow hover:bg-teal-600 transition cursor-pointer"
    >
        <GrPrevious size={20} />
    </button>
);
const CustomNextArrow = ({ onClick }) => (
    <button
        onClick={onClick}
        className="p-3 bg-teal-500 text-white rounded-full shadow hover:bg-teal-600 transition cursor-pointer"
    >
        <GrNext size={20} />
    </button>
);

const Testimonials = () => {
    const sliderRef = useRef(null);
    const playersRef = useRef([]);
    const DEBUG = false;

    useEffect(() => {
        return () => {
            playersRef.current = [];
        };
    }, []);

    const registerPlayer = (player) => {
        if (!playersRef.current.includes(player)) {
            playersRef.current.push(player);
        }
    };

    const pauseAllExcept = (exceptPlayer) => {
        playersRef.current.forEach((p) => {
            if (p && p !== exceptPlayer && typeof p.pauseVideo === "function") {
                try {
                    p.pauseVideo();
                } catch { }
            }
        });
    };

    const someoneIsPlaying = () => {
        try {
            return playersRef.current.some((p) => {
                if (!p || typeof p.getPlayerState !== "function") return false;
                return p.getPlayerState() === 1;
            });
        } catch {
            return false;
        }
    };

    const handleReady = (event) => {
        registerPlayer(event.target);
    };

    const handleStateChange = (event) => {
        const player = event.target;
        const state = event.data;

        if (state === 1) {
            sliderRef.current?.slickPause();
            pauseAllExcept(player);
            setTimeout(() => pauseAllExcept(player), 120);
        } else if (state === 2 || state === 0) {
            setTimeout(() => {
                if (!someoneIsPlaying()) {
                    sliderRef.current?.slickPlay();
                }
            }, 150);
        }
    };

    const settings = {
        dots: false,
        infinite: true,
        centerMode: true,
        centerPadding: "0px",
        slidesToShow: 3,
        slidesToScroll: 1,
        autoplay: true,
        autoplaySpeed: 4000,
        arrows: false,
        responsive: [
            { breakpoint: 1024, settings: { slidesToShow: 2, centerMode: true } },
            { breakpoint: 768, settings: { slidesToShow: 1, centerMode: false } },
        ],
    };

    return (
        <section className="bg-white">
            <div className="py-10">
                <h2
                    className="text-3xl md:text-4xl font-bold text-center text-black mb-5"
                    style={{ fontFamily: "Roboto Slab, serif" }}
                >
                    Clients <span className="text-teal-500">Testimonials</span>
                </h2>

                <div className="relative px-4 max-w-7xl mx-auto">
                    <Slider ref={sliderRef} {...settings}>
                        {videos.map((id, index) => (
                            <div key={`slide-${id}-${index}`} className="px-3">
                                <div className="rounded-xl overflow-hidden shadow-md bg-white">
                                    <YouTube
                                        key={`yt-${id}-${index}`}
                                        videoId={id}
                                        opts={{
                                            width: "100%",
                                            height: "300",
                                            playerVars: { rel: 0, modestbranding: 1 },
                                        }}
                                        onReady={handleReady}
                                        onStateChange={handleStateChange}
                                    />
                                </div>
                            </div>
                        ))}
                    </Slider>

                    <div className="flex justify-center gap-4 mt-6">
                        <CustomPrevArrow onClick={() => sliderRef.current?.slickPrev()} />
                        <CustomNextArrow onClick={() => sliderRef.current?.slickNext()} />
                    </div>
                </div>
            </div>
        </section>
    );
};

export default Testimonials;
