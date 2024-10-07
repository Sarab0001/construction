"use client";
import React, { useState, useEffect, useRef } from "react";
import Logo1 from "@/app/Assets/Logo1.png";
import {
  FaClock,
  FaPhoneAlt,
  FaBars,
  FaFacebook,
  FaInstagram,
  FaPinterest,
} from "react-icons/fa";
import { CiMail } from "react-icons/ci";
import Link from "next/link";

const Header: React.FC = () => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const menuRef = useRef<HTMLDivElement>(null);

  // Toggle the hamburger menu
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  // Close the menu when clicking outside of it
  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (menuRef.current && !menuRef.current.contains(event.target as Node)) {
        setIsMenuOpen(false);
      }
    };

    // Attach event listener
    document.addEventListener("mousedown", handleClickOutside);

    // Cleanup the event listener on component unmount
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, [menuRef]);

  return (
    <header className="sticky top-0 z-50 w-full bg-white shadow">
      {/* Top contact bar */}
      <div className="bg-white-100 py-2">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Contact Info */}
          <div className="flex flex-col md:flex-row items-start md:items-center space-y-2 md:space-y-0 md:space-x-4 text-sm sm:text-md text-black-600 font-semibold">
            {/* Phone */}
            <span className="flex items-center gap-2">
              <FaPhoneAlt />
              (222) 400-630
            </span>
            {/* Email */}
            <span className="flex items-center gap-2">
              <CiMail />
              contact@globalacces.com
            </span>
            {/* Timing */}
            <span className="flex items-center gap-2">
              <FaClock />
              Mon - Fri: 8:00 - 22:00
            </span>
          </div>

          {/* Social Links */}
          <div className="flex space-x-3">
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              <FaFacebook className="w-5 h-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              <FaInstagram className="h-5 w-5" />
            </Link>
            <Link href="#" className="text-gray-600 hover:text-gray-800">
              <FaPinterest className="w-5 h-5" />
            </Link>
          </div>
        </div>
      </div>
      <hr className="border-gray-300" />

      {/* Navigation Bar */}
      <nav className="bg-white py-4">
        <div className="max-w-7xl mx-auto px-4 flex justify-between items-center">
          {/* Logo */}
          <div>
            <img src={Logo1.src} alt="Logo" className="h-14 w-auto" />
          </div>

          {/* Hamburger Menu (For Mobile and Tablet only) */}
          <div className="lg:hidden">
            <button
              onClick={toggleMenu}
              className="text-gray-700 hover:text-blue-600 focus:outline-none"
            >
              <FaBars className="text-xl" />
            </button>
          </div>

          {/* Desktop Menu (hidden for tablet and mobile) */}
          <div className={`hidden lg:flex text-lg font-bold space-x-8`}>
            <Link href="/home" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600">
              Project
            </Link>
            <Link
              href="/certificate"
              className="text-gray-700 hover:text-blue-600"
            >
              Certificate
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600">
              Blog
            </Link>
          </div>

          {/* Contact Button (hidden for mobile and tablet) */}
          <div className="hidden lg:block">
            <Link
              href="/contact"
              className="px-10 py-4 text-white bg-blue-900 hover:bg-blue-900"
            >
              Contact us
            </Link>
          </div>
        </div>

        {/* Mobile and Tablet Menu (hidden on larger screens) */}
        {isMenuOpen && (
          <div
            ref={menuRef}
            className="lg:hidden flex flex-col space-y-2 mt-4 px-4"
          >
            <Link href="/home" className="text-gray-700 hover:text-blue-600">
              Home
            </Link>
            <Link href="/about" className="text-gray-700 hover:text-blue-600">
              About Us
            </Link>
            <Link
              href="/services"
              className="text-gray-700 hover:text-blue-600"
            >
              Services
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600">
              Project
            </Link>
            <Link
              href="/certificate"
              className="text-gray-700 hover:text-blue-600"
            >
              Certificate
            </Link>
            <Link href="#" className="text-gray-700 hover:text-blue-600">
              Blog
            </Link>
            <Link href="/contact" className="text-gray-700 hover:text-blue-600">
              Contact Us
            </Link>
          </div>
        )}
      </nav>
    </header>
  );
};

export default Header;
