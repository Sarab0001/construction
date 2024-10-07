"use client";
import React from "react";
import BackPhoto from "@/app/Assets/ServicePage/SP.png";

const ExperienceComponent: React.FC = () => {
  return (
    <div
      className="relative text-white py-40 px-8"
      style={{ backgroundImage: `url(${BackPhoto.src})` }}
    >
      <div className="grid grid-cols-1 gap-8 max-w-7xl mx-auto">
        <div className="flex flex-col justify-center space-y-6">
          <h2 className="text-4xl font-bold leading-snug">
            We listen and work together to create a truly unique and
            unforgettable experience.
          </h2>
          <p className="text-lg text-gray-300">
            Surrounded by smart, passionate people and with the best tools and
            approaches at your disposal, you’ll take giant leaps toward creating
            a business.
          </p>
          <button className="bg-red-500 hover:bg-red-600 text-white py-3 px-8 rounded-full font-semibold w-fit">
            Contact Us
          </button>
        </div>

        <div className="grid grid-cols-1 gap-6">
          <div className="border border-white-700 p-10 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Innovation</h3>
            <p className="text-gray-400">
              Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat.
            </p>
          </div>

          <div className="border border-white-700 p-10 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Branding</h3>
            <p className="text-gray-400">
              Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo.
            </p>
          </div>

          <div className="border border-white-700 p-10 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Integrity</h3>
            <p className="text-gray-400">
              Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat.
            </p>
          </div>

          <div className="border border-white-700 p-10 rounded-lg">
            <h3 className="text-xl font-semibold mb-3">Planning</h3>
            <p className="text-gray-400">
              Exerci tation ullamcorper suscipit lobortis nisl ut aliquip ex ea
              commodo consequat.
            </p>
          </div>
        </div>
      </div>
    </div>
  );
};

export default ExperienceComponent;
