"use client";
import React from "react";

const Footer: React.FC = () => {
  return (
    <footer className="bg-black text-white py-8">
      <div className="container mx-auto grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8 px-4">
        <div>
          <h3 className="font-semibold text-xl mb-4">About Us</h3>
          <p className="text-lg text-gray-300 leading-relaxed">
            Making a positive first impression is essential to developing a
            strong customer relationship. Global Access is powerful enough to
            assist any small businesses.
          </p>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Additional links</h3>
          <ul className="text-lg space-y-2">
            <li>
              <a href="#" className=" text-gray-300 hover:underline">
                Home
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-300 hover:underline">
                About us
              </a>
            </li>
            <li>
              <a href="#" className="text-gray-300 hover:underline">
                Projects
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-300 hover:underline">
                News
              </a>
            </li>
            <li>
              <a href="#" className=" text-gray-300 hover:underline">
                Contact us
              </a>
            </li>
          </ul>
        </div>

        {/* Services */}
        <div>
          <h3 className="font-semibold text-xl mb-4">Services</h3>
          <ul className="text-lg space-y-2">
            <li className=" text-gray-300">Mechanical Construction</li>
            <li className=" text-gray-300">Civil Construction</li>
            <li className=" text-gray-300">Electrical & Instrument</li>
            <li className=" text-gray-300">IT & Telecommunication</li>
            <li className=" text-gray-300">Engineering and Design</li>
            <li className=" text-gray-300">
              Civil, Elect. & Inst. Maintenance
            </li>
          </ul>
        </div>

        <div>
          <h3 className="font-semibold text-xl mb-4">Contact Us</h3>
          <p className="text-lg text-gray-300">
            Address: C-71 Second Floor, C Block, Sector 2, Noida, Uttar Pradesh
            201301
          </p>
          <p className=" text-gray-300 mt-2">Phone: +91 1234567890</p>
          <p className=" text-gray-300 mt-2">Mail: global@example.com</p>
        </div>
      </div>

      <hr className="my-8 border-gray-700" />

      <div className="text-center text-lg">
        © 2024 Global Access. All rights reserved.
      </div>
    </footer>
  );
};

export default Footer;
