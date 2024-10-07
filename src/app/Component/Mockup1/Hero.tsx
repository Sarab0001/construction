"use client";
import React, { useState, useEffect } from "react";
import HeroImg from "@/app/Assets/Hero/Hero.png";
import H2 from "@/app/Assets/Logo2.png";
import H3 from "@/app/Assets/Logo3.png";
import { FaArrowLeft, FaArrowRight } from "react-icons/fa";

const images = [HeroImg.src, H2.src, H3.src];

const HeroSection: React.FC = () => {


  const [currentIndex, setCurrentIndex] = useState(0);

  const nextSlide = () => {
    setCurrentIndex((prevIndex) => (prevIndex + 1) % images.length);
  };

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? images.length - 1 : prevIndex - 1
    );
  };

  useEffect(() => {
    const interval = setInterval(() => {
      nextSlide();
    }, 5000);

    return () => clearInterval(interval);
  }, []);

  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${images[currentIndex]})` }}
    >
      <div className="relative flex flex-col items-start justify-center h-full px-6 sm:px-10 md:ml-20 lg:ml-40 text-white text-left">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-lg">
          Preparing for a new global economy
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-md">
          We work with you to transform your organization, driving bold ideas
          and pragmatic solutions.
        </p>
        <button className="mt-6 bg-red-600 hover:bg-red-700 text-white py-2 px-4 sm:py-3 sm:px-6 rounded-lg">
          Learn More
        </button>
      </div>

      <div className="absolute left-4 top-1/2 transform -translate-y-1/2 hidden md:block">
        <button
          className="p-3 sm:p-4 text-white border-white border-2 bg-opacity-50 hover:bg-opacity-75"
          onClick={prevSlide}
        >
          <FaArrowLeft />
        </button>
      </div>

      <div className="absolute right-4 top-1/2 transform -translate-y-1/2 hidden md:block">
        <button
          className="p-3 sm:p-4 text-white border-white border-2 bg-opacity-50 hover:bg-opacity-75"
          onClick={nextSlide}
        >
          <FaArrowRight />
        </button>
      </div>
      <div className="absolute bottom-8 w-full flex justify-center">
        <div className="flex space-x-2">
          {images.map((_, index) => (
            <span
              key={index}
              className={`h-2 w-2 sm:h-3 sm:w-3 ${
                index === currentIndex ? "bg-white" : "bg-white bg-opacity-50"
              } rounded-full`}
            ></span>
          ))}
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
