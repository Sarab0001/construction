"use client";
import React from "react";

const TopSection: React.FC = () => {
  return (
    <div className="bg-gray-100 h-auto text-center py-12">
      <div className="mt-10 py-8">
        <h2 className="text-3xl sm:text-4xl font-bold mb-6">
          Ready to get started? Contact us!
        </h2>
        <div className="flex justify-center">
          <div className="w-11/12 sm:w-9/12 md:w-8/12 lg:w-6/12">
            <p className="text-lg font-normal text-gray-600">
              Ekko is a fully packed practical tool of premium built and design.
              Let your creativity loose and start building your website now.
            </p>
          </div>
        </div>
      </div>
      <div className="space-x-4 mt-6">
        <button className="bg-indigo-900 text-white py-3 px-8 rounded-full  ">
          Get Started
        </button>
        <button className="border border-indigo-900 text-indigo-900 py-3 px-8 rounded-full hover:bg-indigo-900 hover:text-white">
          Contact Us
        </button>
      </div>
    </div>
  );
};

export default TopSection;
