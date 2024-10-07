"use client";
import Link from "next/link";
import Logo from "@/app/Assets/Logo.png";
import { FaArrowDown, FaArrowUp } from "react-icons/fa";
import { useState } from "react";

const Header: React.FC = () => {
  const [isOpen, setIsOpen] = useState(false);

  const handleOpen = () => {
    setIsOpen(!isOpen);
  };

  return (
    <header className="container mx-auto flex justify-between items-center px-4 py-6">
      <div className="flex items-center">
        <img src={Logo.src} alt="SaaSto Logo" className="h-8 w-8" />
        <span className="ml-2 text-2xl font-bold text-indigo-600">SaaSto</span>
      </div>

      <nav className="space-x-8 hidden md:flex">
        <div className=" group relative">
          <Link href="/" className="text-gray-500 hover:text-indigo-600">
            Home
          </Link>
          {/* {isOpen ? <FaArrowDown /> : <FaArrowUp />} */}
          <div className="absolute hidden group-hover:block bg-white shadow-lg py-2 mt-2 rounded-md w-40">
            <Link
              href="/home1"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Submenu 1
            </Link>
            <Link
              href="/home2"
              className="block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100"
            >
              Submenu 2
            </Link>
          </div>
        </div>

        <Link href="/about" className="text-gray-500 hover:text-indigo-600">
          About us
        </Link>
        <Link href="/services" className="text-gray-500 hover:text-indigo-600">
          Services
        </Link>
        <Link href="/blog" className="text-gray-500 hover:text-indigo-600">
          Blog
        </Link>
        <Link href="/contact" className="text-gray-500 hover:text-indigo-600">
          Contact us
        </Link>
      </nav>

      <div className="space-x-4">
        <Link href="/login" className="text-gray-500 hover:text-indigo-600">
          Login
        </Link>
        <Link
          href="/signup"
          className="border border-indigo-600 text-indigo-600 py-3 px-8 rounded-md hover:bg-indigo-600 hover:text-white transition"
        >
          Sign up
        </Link>
      </div>
    </header>
  );
};

export default Header;
