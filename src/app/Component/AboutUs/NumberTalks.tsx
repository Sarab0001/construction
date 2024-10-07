import React from "react";
import CountUp from "react-countup";
// Dynamic data for the stats section
const statsData = [
  { number: <CountUp end={341} />, label: "Completed Projects" },
  { number: <CountUp end={302} />, label: "Happy Clients" },
  { number: <CountUp end={152} />, label: "Qualified Engineers" },
  { number: <CountUp end={32} />, label: "Years Experience" },
];

const NumberTalks = () => {
  return (
    <section className="bg-white py-12 sm:py-16">
      <div className="max-w-7xl mx-auto px-4 flex flex-col lg:flex-row justify-between items-center">
        <div className="lg:w-1/2 mb-10 lg:mb-0 text-center lg:text-left">
          <h3 className="text-sm text-gray-500 uppercase mb-3">Number Talks</h3>
          <h2 className="text-3xl sm:text-4xl font-semibold text-gray-800 mb-4">
            We listen and work together to create a unique experience.
          </h2>
          <p className="text-md text-gray-600 mb-8">
            Lorem ipsum dolor sit amet, consectetur adipiscing elit. Lorem ipsum
            dolor sit amet, consectetur adipiscing elit.
          </p>
          <button className="bg-blue-800 text-white px-6 py-3 rounded-md hover:bg-blue-700 transition">
            Contact Now
          </button>
        </div>

        <div className=" grid grid-cols-1 sm:grid-cols-2 gap-x-4 gap-y-2 text-center lg:text-left">
          {statsData.map((stat, index) => (
            <div
              key={index}
              className="w-[257.5px]  h-[164.59px] top-[
15px] left-[15px]  bg-white p-6 shadow-2xl rounded-lg"
            >
              <h3 className="text-5xl font-bold w-[82px] h-[49px] top-[34px] left-[30px] font-inter  text-indigo-900">
                {stat.number}+
              </h3>
              <p className="w-[141px] h-[24px] top-[98px] left-[31.5px] text-xl font-semibold text-gray-600 mt-2 ">{stat.label}</p>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default NumberTalks;
