

import React, { useState } from "react";
import { useNavigate } from "react-router-dom";

const slides = [
  {
    src: "/src/assets/vid0.mp4",
    label: "First slide label",
    desc: "Some representative placeholder content for the first slide.",
  },
  {
    src: "/src/assets/vid1.mp4",
    label: "Second slide label",
    desc: "Some representative placeholder content for the second slide.",
  },
  {
    src: "/src/assets/vid2.mp4",
    label: "Third slide label",
    desc: "Some representative placeholder content for the third slide.",
  },
  {
    src: "/src/assets/vid3.mp4",
    label: "Fourth slide label",
    desc: "Some representative placeholder content for the fourth slide.",
  },
  {
    src: "/src/assets/vid4.mp4",
    label: "Fifth slide label",
    desc: "Some representative placeholder content for the fifth slide.",
  },
  {
    src: "/src/assets/vid5.mp4",
    label: "Sixth slide label",
    desc: "Some representative placeholder content for the sixth slide.",
  },
];

const Crousel = () => {
  const navigate = useNavigate();
  const [current, setCurrent] = useState(0);

  const handleDiscoverClick = () => {
    navigate("/packages");
  };

  const nextSlide = () => {
    setCurrent((prev) => (prev + 1) % slides.length);
  };

  const prevSlide = () => {
    setCurrent((prev) => (prev - 1 + slides.length) % slides.length);
  };

  return (
    <>
      <div className="relative w-full h-screen overflow-hidden">
        {/* Slides */}
        <div className="w-full h-full relative">
          {slides.map((slide, index) => (
            <div
              key={index}
              className={`absolute top-0 left-0 w-full h-full transition-opacity duration-700 ease-in-out ${
                index === current ? "opacity-100 z-10" : "opacity-0 z-0"
              }`}
            >
              <video
                className="w-full h-full object-cover"
                autoPlay
                loop
                muted
                playsInline
              >
                <source src={slide.src} type="video/mp4" />
              </video>

              {/* Slide Content */}
              <div className="absolute inset-x-[5%] sm:inset-x-[10%] md:inset-x-[15%] top-[60%] sm:top-[75%] md:top-[47%] text-center text-white">
                <h5 className="text-lg sm:text-xl md:text-2xl font-semibold">{slide.label}</h5>
                <p className="text-sm sm:text-base md:text-lg">{slide.desc}</p>
                <div className="p-1">
                  <button
                    onClick={handleDiscoverClick}
                    className="bg-red-500 text-white font-semibold px-6 py-2 sm:px-8 sm:py-2.5 md:px-10 md:py-3 text-sm sm:text-base md:text-lg hover:border-2 hover:border-red-500 hover:bg-transparent transition"
                  >
                    Available Packages
                  </button>
                </div>
              </div>
            </div>
          ))}
        </div>

        {/* Indicators */}
        <div className="absolute bottom-[12rem] sm:bottom-[6rem] md:bottom-[21rem] left-1/2 transform -translate-x-1/2 flex gap-2 z-20">
          {slides.map((_, i) => (
            <button
              key={i}
              className={`h-[10px] w-[15px] sm:h-[12px] sm:w-[18px] md:h-[15px] md:w-[20px] rounded-lg ${
                i === current ? "bg-red-500" : "bg-white opacity-50"
              } transition-opacity duration-300`}
              onClick={() => setCurrent(i)}
            />
          ))}
        </div>

        {/* Prev Button */}
        <button
          onClick={prevSlide}
          className="absolute left-0 top-0 bottom-0 flex items-center justify-center w-[20%] sm:w-[15%] text-white hover:opacity-90 z-20"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M15.75 19.5L8.25 12l7.5-7.5"
            />
          </svg>
        </button>

        {/* Next Button */}
        <button
          onClick={nextSlide}
          className="absolute right-0 top-0 bottom-0 flex items-center justify-center w-[20%] sm:w-[15%] text-white hover:opacity-90 z-20"
        >
          <svg
            className="w-6 h-6 sm:w-8 sm:h-8"
            fill="none"
            stroke="currentColor"
            strokeWidth={1.5}
            viewBox="0 0 24 24"
          >
            <path
              strokeLinecap="round"
              strokeLinejoin="round"
              d="M8.25 4.5l7.5 7.5-7.5 7.5"
            />
          </svg>
        </button>
      </div>
    </>
  );
};

export default Crousel;
