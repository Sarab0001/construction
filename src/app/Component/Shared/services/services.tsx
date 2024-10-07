"use client";
import React from "react";
import S from "@/app/Assets/Services/S.png";
import Transport from "@/app/Assets/Services/Transport.png";
import Eqipment from "@/app/Assets/Services/Equipment.png";
import Security from "@/app/Assets/Services/Security.png";
import Camp from "@/app/Assets/Services/Camp.png";
import Supply from "@/app/Assets/Services/Supply.png";
import Image from "next/image";

const services = [
  {
    image: S,
    title: "Manpower Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    link: "#",
  },
  {
    image: Camp,
    title: "Camp Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet.",
    link: "#",
  },
  {
    image: Security,
    title: "Security Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    link: "#",
  },
  {
    image: Transport,
    title: "Transport Services",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    link: "#",
  },
  {
    image: Eqipment,
    title: "Equipment Supply",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    link: "#",
  },
  {
    image: Supply,
    title: "Supply of PPE",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum dolor sit amet.",
    link: "#",
  },
];

const Services: React.FC = () => {
  return (
    <section className="mx-auto  bg-gray-50 py-16 px-4">
      <div className="max-w-7xl mx-auto text-center mb-8">
        <h2 className="text-3xl font-bold mb-4">
          We can further serve you on the supplies of
        </h2>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services.map((service, index) => (
          <div
            key={index}
            className="bg-white shadow-lg rounded-lg p-4 text-left transition transform hover:scale-105 duration-300 min-h-[400px]"
          >
            <Image
              src={service.image}
              alt={service.title}
              className="mb-4 h-20 w-20 bg-rose-200 rounded-full"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-8">{service.description}</p>
            <a
              href={service.link}
              className="inline-block bg-white-600 text-red-600 border-4 border-red-600  px-6 py-2 rounded-3xl font-semibold "
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services;
