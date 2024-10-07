"use client";
import React from "react";
import Image from "next/image";
import ChairmanImage from "@/app/Assets/image.png";

const Company: React.FC = () => {
  return (
    <section className="bg-gray-100 py-16 px-4">
      <div className="max-w-7xl mx-auto grid grid-cols-1 md:grid-cols-2 gap-8 items-center">
        <div className="w-full">
          <Image
            src={ChairmanImage}
            alt="Chairman Falih Soud Al-Dossary"
            width={500}
            height={500}
            className="object-cover rounded-lg"
          />
        </div>

        <div className="text-left">
          <h3 className="text-3xl font-bold mb-8 ">
            We at Global Access General Trading & Contracting Company W.L.L
          </h3>
          <p className="text-gray-600 mb-4">
            We are pleased to submit our proposal for your kind evaluation. We
            would be glad to fulfill any of your project resources & services
            requirements. We wish to be part of your team and would like to
            assure you of every effort and participation to execute the projects
            and works successfully.
          </p>
          <p className="text-gray-600 mb-4">
            We wish to be part of your team and would like to assure you of
            every effort and participation to execute the projects and works
            successfully.
          </p>
          <p className="text-gray-600 font-semibold  mt-4">Chairman</p>
          <h1 className="text-2xl font-bold mb-8">Falih Soud Al-Dossary</h1>
          <a
            href="#"
            className="inline-block bg-red-600 text-white px-10 py-2 rounded-md font-semibold hover:bg-red-700"
          >
            Learn More
          </a>
        </div>
      </div>
    </section>
  );
};

export default Company;
