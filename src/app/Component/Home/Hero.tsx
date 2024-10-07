import React from "react";
import Fire from "@/app/Assets/fire.png";
import Customer from "@/app/Assets/Customer.png";
import Download from "@/app/Assets/Download.png";
import Users from "@/app/Assets/Users.png";
import FlowerStats from "@/app/Assets/FlowerStats.png";

const HeroSection = () => {
  return (
    <section className="relative py-16 bg-white overflow-hidden">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="lg:grid lg:grid-cols-2 lg:gap-8">
          {/* Left Side: Text and CTA */}
          <div className="lg:col-span-1">
            <div className="flex items-center space-x-4">
              <div className=" rounded-full p-2">
                {/* Example of an icon here */}
                <span className="text-white">
                  <img src={Fire.src} />
                </span>
              </div>
              <h2 className="text-xl font-extrabold tracking-tight text-gray-900 sm:text-5xl">
                Committed To People <br />
                Committed To <span className="text-purple-500">The Future</span>
              </h2>
            </div>
            <p className="mt-4 text-lg text-gray-500">
              An enim nullam tempor sapien gravida donec enim ipsum porta justo
              congue magna at.
            </p>
            <div className="mt-6">
              <button className="px-8 py-3 bg-purple-600 text-white rounded-lg text-lg shadow-lg hover:bg-purple-700 transition">
                Get Started Now
              </button>
            </div>
          </div>

          {/* Right Side: Stats and Cards */}
          <div className="relative mt-12 lg:mt-0 lg:col-span-1">
            {/* Stats and Cards */}
            <div className="grid grid-cols-2 gap-4">
              {/* Card 1: Followers Stats */}
              <div className="bg-white shadow rounded-lg p-4">
                {/* <h4 className="text-sm font-medium text-gray-500">
                  Followers Stats
                </h4> */}
                <img src={FlowerStats.src} />
                {/* <div className="mt-4">
                  <div className="bg-gray-200 h-32 rounded-lg"></div>
                </div> */}
              </div>

              {/* Card 2: Likes */}
              <div className="bg-white shadow rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-500">Likes</h4>
                <p className="mt-2 text-xl font-bold text-gray-900">15.9k</p>
                <p className="text-sm text-green-500 mt-1">
                  ↑ 2.1% vs last 7 days
                </p>
              </div>

              {/* Card 3: Followers Gained */}
              <div className="bg-white shadow rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-500">
                  Followers gained
                </h4>
                <p className="mt-2 text-xl font-bold text-gray-900">2,938</p>
                <p className="text-sm text-gray-500 mt-1">after this post</p>
              </div>

              {/* Card 4: Reach */}
              <div className="bg-white shadow rounded-lg p-4">
                <h4 className="text-sm font-medium text-gray-500">Reach</h4>
                <p className="mt-2 text-xl font-bold text-gray-900">256.18k</p>
                <p className="text-sm text-green-500 mt-1">
                  ↑ 2.1% vs last 7 days
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="mt-16 grid grid-cols-1 sm:grid-cols-3 gap-8 text-center">
          <div className="flex">
            <img src={Users.src} className="h-20 w-30" />
            <div>
              <p className="text-3xl font-bold text-gray-900">15k+</p>
              <p className="mt-2 text-sm text-gray-500">Active User</p>
            </div>
          </div>
          <div className="flex">
            <img src={Download.src} className="h-20" />
            <div>
              <p className="text-3xl font-bold text-gray-900">30k</p>
              <p className="mt-2 text-sm text-gray-500">Total Download</p>
            </div>
          </div>
          <div className="flex">
            <img src={Customer.src} className="h-20" />
            <div>
              <p className="text-3xl font-bold text-gray-900">10k</p>
              <p className="mt-2 text-sm text-gray-500">Customer</p>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default HeroSection;
