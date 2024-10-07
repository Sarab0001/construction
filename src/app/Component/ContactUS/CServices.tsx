"use client";
import React from "react";
import CMessage from "@/app/Assets/Services/image copy.png";
import CPhone from "@/app/Assets/Services/image copy 2.png";
import CCircle from "@/app/Assets/Services/image copy 3.png";
import Image from "next/image";

const SupportCards: React.FC = () => {
  const supportOptions = [
    {
      title: "Chat with us",
      icon: CMessage,
    },
    {
      title: "Call Us",
      icon: CPhone,
    },
    {
      title: "Help topics",
      icon: CMessage,
    },
    {
      title: "We're social",
      icon: CCircle,
    },
  ];

  return (
    <section className="py-16 bg-gray-50">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-6">
          {supportOptions.map((option, index) => (
            <div
              key={index}
              className="bg-indigo-50 p-6 rounded-lg shadow-md text-center hover:shadow-lg transition-shadow"
            >
              <Image
                alt={"test"}
                src={option.icon}
                className="h-20 w-20 flex justify-center mb-4"
              ></Image>
              <p className="text-lg text-left font-semibold">{option.title}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default SupportCards;
