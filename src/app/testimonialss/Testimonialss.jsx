"use client";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Autoplay } from "swiper/modules";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/autoplay";
import Image from "next/image";
import { FaQuoteLeft } from "react-icons/fa";

const testimonials = [
  {
    text: "I am so thankful that the best medical oncologist Dr.Sajjan Rajpurohit has given me the best advice and is now finally able to get back to my normal self. I remember I was suffering from brainstem glioma for such a long time. Thanks",
    name: "SUNIL SHARMA",
    img: "/testimonialss/feed.jpg",
  },
  {
    text: "He is so  pleasant to talk and always ready to answer your doubts. I consulted the best medical oncologist in delhi, India Dr. Sajjan Rajpurohit for my lung cancer treatment, and now I am feeling great because for his treatment.",
    name: "VED PRAKASH",
    img: "/testimonialss/feed1.jpg",
  },
  {
    text: "Due to my smoking habit, I was facing Lung Cancer and It was getting difficult for me to deal with them. but Dr.Sajjan Rajpurohit helped me deal with this problem. He is really the Best doctor for cancer treatment.",
    name: "ROHAN SINGH",
    img: "/testimonialss/feed2.jpg",
  },
  {
    text: "Best Oncologist in Delhi Dr. Sajjan Rajpurohit is one of the best cancer doctors I've ever had. He has always been there when I nedded him, whether helping me with my diagnosis or just giving me regular checkups. I'm vey pleased with his services and would highly recommended him to any of my friends. ",
    name: "GLYNEE RON",
    img: "/testimonialss/feed3.jpg",
  },
  {
    text: "One of my friends suggested I meet Dr. Sajjan rajpurohit for my father's cancer treatment. He is a perfet cancer specialist in Delhi, who knows his job and how to treat a patient. Huge thanks!",
    name: "ROHIT KHANNA",
    img: "/testimonialss/feed4.jpg",
  },
];

export default function Testimonials() {
  return (
    <section className="w-full bg-gray-50 py-12 mt-5">
      <div className="max-w-6xl mx-auto px-6">
        <Swiper
          modules={[Navigation, Pagination, Autoplay]}
          spaceBetween={30}
          slidesPerView={1}
          navigation
          pagination={{ clickable: true }}
          autoplay={{ delay: 3000, disableOnInteraction: false }}
          breakpoints={{
            768: { slidesPerView: 2 },
            1024: { slidesPerView: 3 },
          }}
        >
          {testimonials.map((t, index) => (
            <SwiperSlide key={index} className="flex">
              <div className="bg-white p-6 rounded-lg shadow-sm flex flex-col justify-between h-full w-full">
                <FaQuoteLeft className="text-teal-500 text-3xl mb-4" />
                <p className="text-gray-700 leading-relaxed flex-grow">
                  {t.text}
                </p>
                <hr className="my-4" />
                <div className="flex items-center gap-4">
                  <Image
                    src={t.img}
                    alt={t.name}
                    width={60}
                    height={60}
                    className="rounded-full object-cover"
                  />
                  <span className="font-semibold text-gray-800">{t.name}</span>
                </div>
              </div>
            </SwiperSlide>
          ))}
        </Swiper>
      </div>
    </section>
  );
}
