"use client";
import React from "react";
import HeroImg from "@/app/Assets/Certificates/Hero.png";

const HeroSection: React.FC = () => {
  return (
    <div
      className="relative h-screen bg-cover bg-center"
      style={{ backgroundImage: `url(${HeroImg.src})` }}
    >
      <div className=" relative z-10 flex flex-col items-center justify-center h-full  text-white text-center px-4  ">
        <h1 className="text-3xl sm:text-4xl md:text-5xl lg:text-6xl font-bold max-w-2xl">
          Certificate
        </h1>
        {/* <div className="flex item-center"> */}
        <p className="mt-4 text-sm sm:text-base md:text-lg lg:text-xl max-w-lg">
          We work with you to transform your organization, driving bold ideas
          and pragmatic solutions.
        </p>
        {/* </div> */}
      </div>
    </div>
  );
};

export default HeroSection;
