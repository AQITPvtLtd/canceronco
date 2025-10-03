"use client";

export default function Videos() {
  const videos = [
    {
      id: 1,
      title: "Ovarian Cancer",
      embedUrl: "https://www.youtube.com/embed/4MSrHGMyMts?si=mTngEDJbynRjHp-e",
    },
    {
      id: 2,
      title: "Chemotherapy",
      embedUrl: "https://www.youtube.com/embed/192D8o9G4nk?si=8POXov-GsSw2jBn_",
    },
    {
      id: 3,
      title: "Immunotherapy",
      embedUrl: "https://www.youtube.com/embed/M0Mk4vyC3-E?si=E9OBG7JjKXk9C8wf",
    },
  ];

  return (
    <section className="py-16 bg-white">
      {/* Heading */}
      <h2 className="text-2xl md:text-3xl font-bold text-center text-teal-600 mb-10"style={{ fontFamily: "Roboto Slab, serif" }}>
        VIDEOS
      </h2>

      {/* Video Grid */}
      <div className="max-w-6xl mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-8 px-4">
        {videos.map((video) => (
          <div
            key={video.id}
            className="bg-white rounded-lg shadow-md overflow-hidden"
          >
            {/* Responsive Video */}
            <div className="relative w-full pb-[56.25%] h-0">
              <iframe
                src={video.embedUrl}
                title={video.title}
                className="absolute top-0 left-0 w-full h-full rounded-t-lg"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture"
                allowFullScreen
              ></iframe>
            </div>

            {/* Title */}
            <div className="p-4 text-center">
              <h3 className="text-lg font-semibold text-gray-800">
                {video.title}
              </h3>
            </div>
          </div>
        ))}
      </div>
    </section>
  );
}
