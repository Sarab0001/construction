"use client";
import React from "react";
import Rocket from "@/app/Assets/Vision/image copy 3.png";
import Vision from "@/app/Assets/Vision/image copy 2.png";
import Val from "@/app/Assets/Vision/image copy.png";
import Image from "next/image";

const values = [
  {
    image: Rocket,
    title: "Our Mission",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout be distracted by the readable .",
    highlighted: false,
  },
  {
    image: Vision,
    title: "Our Vision",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    highlighted: true,
  },
  {
    image: Val,
    title: "Our Values",
    description:
      "It is a long established fact that a reader will be distracted by the readable content of a page when looking at its layout.",
    highlighted: false,
  },
];

const VisionMissionValues: React.FC = () => {
  return (
    <section className="mx-auto px-4 py-16 bg-gray-50 text-center">
      <div className="flex flex-col md:flex-row justify-center items-center gap-8  ">
        {values.map((value, index) => (
          <div
            key={index}
            className="p-6 w-full sm:w-80 bg-white rounded-lg shadow-lg 
              border-b-2 hover:border-y-slate-950 transition duration-300 ease-in-out"
          >
            <div className="flex justify-center mb-4">
              <Image
                src={value.image}
                alt={value.title}
                className="mb-4"
                width={60}
                height={60}
              />
            </div>
            <h3 className="text-lg sm:text-xl font-bold mb-2">{value.title}</h3>
            <p className="text-sm sm:text-base text-gray-600">
              {value.description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
};

export default VisionMissionValues;
