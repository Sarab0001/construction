"use client";
import React from "react";
import S1 from "@/app/Assets/ServicePage/image copy.png";
import S2 from "@/app/Assets/ServicePage/image.png";

const BusinessComponent: React.FC = () => {
  return (
    <div className="grid grid-cols-1 md:grid-cols-2 gap-8 max-w-6xl mx-auto py-16 px-4">
      {/* Left Section with Image */}
      <div className="flex items-center">
        <img
          src={S2.src} // Update with your image path
          alt="People working on a laptop"
          className="w-full h-auto rounded-lg"
        />
      </div>

      {/* Right Section with Text */}
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Website building made easy, simple & fast. Build a startup with a
          small team.
        </h2>
        <p className="text-gray-600 mb-4">
          Surrounded by smart, passionate people and with the best tools and
          approaches at your disposal, you’ll take giant leaps toward creating a
          business.
        </p>
        <p className="text-gray-600">
          Surrounded by smart, passionate people and with the best tools and
          approaches at your disposal, you’ll take giant leaps toward creating a
          business.
        </p>
      </div>

      {/* Text Section on Left */}
      <div className="flex flex-col justify-center">
        <h2 className="text-2xl font-bold text-gray-800 mb-4">
          Everything you need to grow your business. Order our services today!
        </h2>
        <p className="text-gray-600 mb-4">
          Surrounded by smart, passionate people and with the best tools and
          approaches at your disposal, you’ll take giant leaps toward creating a
          business.
        </p>
        <p className="text-gray-600">
          Surrounded by smart, passionate people and with the best tools and
          approaches at your disposal, you’ll take giant leaps toward creating a
          business.
        </p>
      </div>

      {/* Image Section on Right */}
      <div className="flex items-center">
        <img
          src={S1.src} // Update with your image path
          alt="Team discussing business ideas"
          className="w-full h-auto rounded-lg"
        />
      </div>
    </div>
  );
};

export default BusinessComponent;
