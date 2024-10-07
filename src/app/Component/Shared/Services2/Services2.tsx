"use client";
import React from "react";
import Image from "next/image";
import service1 from "@/app/Assets/Services2/image.png";
import service2 from "@/app/Assets/Services2/image copy.png";
import service3 from "@/app/Assets/Services2/image copy 2.png";
import service4 from "@/app/Assets/Services2/image copy 3.png";
import service5 from "@/app/Assets/Services2/image copy 4.png";
import service6 from "@/app/Assets/Services2/image copy 5.png";

const services2 = [
  {
    image: service1,
    title: "Mechanical Construction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: service2,
    title: "Civil Construction",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: service3,
    title: "Electrical & Instrument",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: service4,
    title: "IT & Telecommunication",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: service5,
    title: "Engineering and Design",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
  {
    image: service6,
    title: "Civil, Elect. & Inst. Maintenance",
    description:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elitLorem ipsum dolor sit amet, consectetur adipiscing elit.",
  },
];

const Services2: React.FC = () => {
  return (
    <section className="mx-auto px-4 py-16 bg-gray-100 text-center">
      <h2 className="text-3xl font-bold mb-8">We Are Serve You On Services</h2>
      <p className="text-gray-600 max-w-2xl mx-auto mb-8">
        Aliquam malesuada bibendum arcu vitae elementum curabitur vitae ven.
        Pellentesque pulvinar elementum habitant morbi tristique.
      </p>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 max-w-7xl mx-auto">
        {services2.map((service, index) => (
          <div
            key={index}
            className="text-left bg-white shadow-lg rounded-lg p-6"
          >
            <Image
              src={service.image}
              alt={service.title}
              width={500}
              height={300}
              className="object-cover rounded-lg mb-4"
            />
            <h3 className="text-xl font-semibold mb-2">{service.title}</h3>
            <p className="text-gray-600 mb-4">{service.description}</p>
            <a
              href="#"
              className="inline-block bg-blue-900 text-white px-6 py-2 rounded-3xl font-semibold hover:bg-purple-700"
            >
              Read More
            </a>
          </div>
        ))}
      </div>
    </section>
  );
};

export default Services2;
