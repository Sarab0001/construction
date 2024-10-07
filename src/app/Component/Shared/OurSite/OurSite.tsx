"use client";
import React, { useState } from "react";
import Image from "next/image";
import S1 from "@/app/Assets/Site/S1.png";
import S2 from "@/app/Assets/Site/S2.png";
import S3 from "@/app/Assets/Site/S3.png";
import S4 from "@/app/Assets/Site/S4.png";
import S5 from "@/app/Assets/Site/S5.png";

const categories = [
  {
    name: "Mechanical Works",
    images: [S1, S2, S3, S4],
  },
  {
    name: "Civil Works",
    images: [S2, S3, S4, S5],
  },
  {
    name: "Blasting & Painting Works",
    images: [S1, S5],
  },
  {
    name: "Electrical Works",
    images: [S1, S2],
  },
  { name: "Architecture", images: [S1, S4] },
  {
    name: "Telecommunication",
    images: [S1, S3],
  },
];

const OurSitePictures: React.FC = () => {
  const [activeCategory, setActiveCategory] = useState(categories[0]);

  return (
    <section className="py-16 bg-white">
      <h2 className="text-4xl font-bold text-center mb-4">Our Site Pictures</h2>
      <p className="text-lg font-normal text-gray-600 text-center mb-8 max-w-xl mx-auto ">
        Aliquam malesuada bibendum arcu vitae elementum curabitur vitae ven.
        Pellentesque pulvinar elementum habitant morbi tristique.
      </p>

      {/* Categories Section */}
      <div className="mx-auto px-4 relative w-full mb-8">
        <div className="flex space-x-4 overflow-x-auto scrollbar-hide justify-center px-4">
          {categories.map((category) => (
            <button
              key={category.name}
              className={`font-medium text-base flex-shrink-0 px-3 py-2  whitespace-nowrap ${
                activeCategory.name === category.name
                  ? "text-blue-600 border-b-2 border-blue-600"
                  : "text-gray-600"
              }`}
              onClick={() => setActiveCategory(category)}
            >
              {category.name}
            </button>
          ))}
        </div>
      </div>

      {/* Images Grid Section */}
      <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 px-4 py-4 max-w-7xl mx-auto">
        {activeCategory.images.map((image, index) => (
          <div key={index} className="relative w-full h-48 sm:h-64">
            <Image
              src={image}
              alt={`${activeCategory.name} ${index + 1}`}
              layout="fill"
              className="object-cover rounded-lg"
            />
          </div>
        ))}
      </div>
    </section>
  );
};

export default OurSitePictures;
