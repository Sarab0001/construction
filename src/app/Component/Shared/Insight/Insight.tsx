'use client'

import React from "react"
import Image from "next/image"
import Sanghai from "@/app/Assets/Sanghai.png"
import Difference from "@/app/Assets/Difference.png"
import Stand from "@/app/Assets/Stand.png"
import InsightBackground from "@/app/Assets/InsightBackground.png"

const articles = [
  {
    title: "Shanghai is a mythical, magical metropolis of beauty and wealth",
    link: "#",
    image: Sanghai,
  },
  {
    title: "The clear difference between cold brew and iced coffee",
    link: "#",
    image: Difference,
  },
  {
    title: "Perched high atop the bluff overlooking the Pacific",
    link: "#",
    image: Stand,
  },
]

export default function LatestInsights() {
  return (
    <div className="relative py-20 text-center">
      <section
        className="h-auto md:h-96"
        style={{
          backgroundImage: `url(${InsightBackground.src})`,
          backgroundPosition: "center",
          backgroundRepeat: "no-repeat",
          backgroundSize: "cover",
        }}
      >
        <div className="relative z-10 px-4 md:px-0">
          <div className="pt-6 md:pt-2 lg:mt-2">
            <h2 className="mb-4 text-3xl font-bold text-white">
              Get the latest insights
            </h2>
            <p className="text-gray-200 font-normal text-lg mx-auto max-w-2xl mb-8">
              Stay updated with the latest trends and digital news by reading
              our articles written by specialists in their industry.
            </p>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 px-4 max-w-7xl mx-auto mt-12">
            {articles.map((article, index) => (
              <div key={index} className="bg-white shadow-lg overflow-hidden">
                <div className="flex justify-center items-center">
                  <Image
                    src={article.image}
                    alt={article.title}
                    className="mx-4 my-4 w-full h-56 object-cover"
                    width={500}
                    height={300}
                  />
                </div>
                <div className="p-6 text-left">
                  <h3 className="text-lg text-left font-semibold mb-4">
                    {article.title}
                  </h3>
                  <a className="text-black-600 font-bold text-left hover:underline">
                    Read more →
                  </a>
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>
    </div>
  )
}