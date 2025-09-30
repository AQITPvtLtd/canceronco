// components/VideoSection.jsx
"use client";

import { useEffect, useRef } from "react";

export default function Videos() {
  const videos = [
    "RuuHCj1G52o",
    "EuRl3N6M-es",
    "7Qw7QgCV0vE",
    "MRfonFA36I0",
  ];

  const playersRef = useRef([]);

  useEffect(() => {
    // ✅ Load YouTube API script
    const tag = document.createElement("script");
    tag.src = "https://www.youtube.com/iframe_api";
    document.body.appendChild(tag);

    // ✅ Create players after API load
    window.onYouTubeIframeAPIReady = () => {
      playersRef.current = videos.map((videoId, index) => {
        return new window.YT.Player(`player-${index}`, {
          videoId,
          events: {
            onStateChange: (event) => handlePlay(event, index),
          },
        });
      });
    };
  }, []);

  const handlePlay = (event, currentIndex) => {
    if (event.data === window.YT.PlayerState.PLAYING) {
      playersRef.current.forEach((player, idx) => {
        if (idx !== currentIndex) {
          player.pauseVideo(); // ✅ Pause other videos
        }
      });
    }
  };

  return (
    <section className="bg-white">
      <section className="max-w-7xl mx-auto px-6 py-12">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-extrabold uppercase text-gray-800">
            Our <span className="text-teal-500">Videos</span>
          </h2>
          <div className="w-16 h-1 bg-teal-400 mx-auto mt-3"></div>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-2 gap-8">
          {videos.map((videoId, idx) => (
            <div
              key={idx}
              className="relative w-full overflow-hidden rounded-2xl shadow-lg group"
            >
              <div
                id={`player-${idx}`}
                className="w-full h-64 md:h-72 lg:h-80"
              ></div>
            </div>
          ))}
        </div>
      </section>
    </section>
  );
}
