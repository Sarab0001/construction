"use client";
import React from "react";
import HeroImg from "@/app/Assets/Hero/AHero.png";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImg.src})` }}
    >
      {/* Overlay to darken the image for better text visibility */}
      <div className="absolute inset-0 bg-black opacity-40"></div>

      <div className="relative z-10 flex flex-col items-center justify-center h-full text-white text-center px-4">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl">
          Telecommunication Services
        </h1>
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg">
          We work with you to transform your organization, driving bold ideas
          and pragmatic solutions.
        </p>
      </div>
    </div>
  );
};

export default HeroSection;
