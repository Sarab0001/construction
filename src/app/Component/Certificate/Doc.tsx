"use client";
import React, { useState } from "react";
import Image from "next/image";
import Cert1 from "@/app/Assets/Certificates/image.png";
import Cert2 from "@/app/Assets/Certificates/image copy.png";
import Cert3 from "@/app/Assets/Certificates/image copy 2.png";
import Cert4 from "@/app/Assets/Certificates/image copy 3.png";
import Cert5 from "@/app/Assets/Certificates/image copy 4.png";
import Cert6 from "@/app/Assets/Certificates/image copy 5.png";

const certifications = [
  { src: Cert1, alt: "Certification 1" },
  { src: Cert2, alt: "Certification 2" },
  { src: Cert3, alt: "Certification 3" },
  { src: Cert4, alt: "Certification 4" },
  { src: Cert5, alt: "Certification 5" },
  { src: Cert6, alt: "Certification 6" },
  { src: Cert6, alt: "Certification 6" },
];

const Certifications: React.FC = () => {
  const [visibleCerts, setVisibleCerts] = useState(6);

  const handleLoadMore = () => {
    setVisibleCerts((prev) => prev + 3);
  };

  return (
    <section className="py-16 bg-white text-center">
      <h2 className="text-3xl font-bold mb-8">Our Certifications</h2>

      <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 px-6 max-w-7xl mx-auto">
        {certifications.slice(0, visibleCerts).map((cert, index) => (
          <div
            key={index}
            className="border border-gray-200 p-4 rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <Image
              src={cert.src}
              alt={cert.alt}
              className="rounded-md"
              width={300}
              height={400}
              objectFit="contain"
            />
          </div>
        ))}
      </div>

      {/* {visibleCerts < certifications.length && ( */}
      <button
        onClick={handleLoadMore}
        className="mt-8 px-12 py-4 bg-indigo-900 text-white  hover:bg-indigo-700 transition-colors"
      >
        Load More
      </button>
      {/* )} */}
    </section>
  );
};

export default Certifications;
