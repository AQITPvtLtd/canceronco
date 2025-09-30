"use client";

export default function Banner() {
  return (
    <section className="w-full relative overflow-hidden lg:mt-35 mt-15">
      {/* Responsive Aspect Ratio Wrapper */}
      <div className="relative w-full aspect-video">
        <iframe
          className="absolute top-0 left-0 w-full h-full"
          src="https://www.youtube.com/embed/d2Sd5YbTVNY?controls=1&rel=0&modestbranding=1"
          title="YouTube video player"
          frameBorder="0"
          allow="accelerometer; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
          referrerPolicy="strict-origin-when-cross-origin"
          allowFullScreen
        />
      </div>
    </section>
  );
}
