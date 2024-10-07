'use client'

import React, { useState } from "react"
import Image from "next/image"
import { FaArrowLeft, FaArrowRight, FaStar } from "react-icons/fa"
import T1 from "@/app/Assets/T1.jpg"
import T2 from "@/app/Assets/T2.jpg"
import T3 from "@/app/Assets/T3.jpg"

const reviews = [
  {
    name: "Luke Jacobs",
    location: "San Antonio, Texas",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
    image: T1,
  },
  {
    name: "Claire Olson",
    location: "Seattle, Washington",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
    image: T2,
  },
  {
    name: "Phillip Hunt",
    location: "Detroit, Michigan",
    review:
      "Lorem ipsum dolor sit amet, consectetur adipiscing elit, sed do eiusmod tempor incididunt ut labore et dolore magna aliqua.",
    rating: 5,
    image: T3,
  },
  {
    name: "Sophia Green",
    location: "New York, New York",
    review:
      "Duis aute irure dolor in reprehenderit in voluptate velit esse cillum dolore eu fugiat nulla pariatur.",
    rating: 4,
    image: T2,
  },
  {
    name: "John Doe",
    location: "Los Angeles, California",
    review:
      "Excepteur sint occaecat cupidatat non proident, sunt in culpa qui officia deserunt mollit anim id est laborum.",
    rating: 5,
    image: T3,
  },
  {
    name: "Jane Smith",
    location: "Houston, Texas",
    review:
      "Ut enim ad minim veniam, quis nostrud exercitation ullamco laboris nisi ut aliquip ex ea commodo consequat.",
    rating: 4,
    image: T1,
  },
]

const ITEMS_PER_PAGE = 3

export default function ClientReviews() {
  const [currentIndex, setCurrentIndex] = useState(0)

  const prevSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex === 0 ? Math.max(reviews.length - ITEMS_PER_PAGE, 0) : prevIndex - ITEMS_PER_PAGE
    )
  }

  const nextSlide = () => {
    setCurrentIndex((prevIndex) =>
      prevIndex + ITEMS_PER_PAGE >= reviews.length ? 0 : prevIndex + ITEMS_PER_PAGE
    )
  }

  return (
    <div className="mx-8 relative">
      <section className="bg-white lg:py-44 sm:py-28 md:py-32">
        <h2 className="text-center text-3xl md:text-4xl font-bold mb-4">
          Client reviews
        </h2>
        <p className="text-center text-gray-600 mb-8 font-normal text-base md:text-lg">
          Aliquam malesuada bibendum arcu vitae elementum curabitur vitae ven.
        </p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-8 px-4 max-w-7xl mx-auto">
          {reviews.slice(currentIndex, currentIndex + ITEMS_PER_PAGE).map((review, index) => (
            <div key={index} className="bg-white-100 p-6 md:p-14 rounded-lg shadow-lg">
              <div className="flex justify-start">
                <Image
                  src={review.image}
                  alt={review.name}
                  className="w-12 h-12 md:w-16 md:h-16 rounded-full mr-3 mb-4"
                  width={64}
                  height={64}
                />
                <div>
                  <h3 className="text-left text-md md:text-lg font-semibold mb-1">{review.name}</h3>
                  <p className="text-gray-400 text-left text-sm md:text-lg font-semibold mb-4">
                    {review.location}
                  </p>
                </div>
              </div>
              <p className="text-black text-sm text-left md:text-lg mb-4">{review.review}</p>
              <div className="flex mb-4">
                {Array(review.rating)
                  .fill("")
                  .map((_, i) => (
                    <span key={i} className="text-lg md:text-xl font-bold text-yellow-500">
                      <FaStar />
                    </span>
                  ))}
              </div>
            </div>
          ))}
        </div>
        <div className="absolute left-4 top-2/4 transform -translate-y-1/2 hidden md:block">
          <button
            className="p-3 sm:p-4 border-2 rounded-full bg-opacity-50 hover:bg-opacity-75"
            onClick={prevSlide}
          >
            <FaArrowLeft />
          </button>
        </div>
        <div className="absolute right-4 top-2/4 transform -translate-y-1/2 hidden md:block">
          <button
            className="p-3 sm:p-4 border-2 rounded-full bg-opacity-50 hover:bg-opacity-75"
            onClick={nextSlide}
          >
            <FaArrowRight />
          </button>
        </div>
      </section>
    </div>
  )
}