"use client";
import React from "react";
import HeroImg from "@/app/Assets/Hero/CHero.png";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImg.src})` }}
    >
      <div className="relative flex flex-col items-center justify-center h-full text-white px-4 sm:px-6 md:px-8">
        <h1 className="mt-40 text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold text-center max-w-lg">
          Contact Us
        </h1>

        <div className="flex justify-center">
          <p className="mt-4 text-center text-sm sm:text-base md:text-lg lg:text-xl max-w-md">
            We work with you to transform your organization, driving bold ideas
            and pragmatic solutions.
          </p>
        </div>
      </div>
    </div>
  );
};

export default HeroSection;
