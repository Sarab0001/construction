import React from "react";
import Link from "next/link";
import { FaInstagram, FaYoutube, FaFacebook } from "react-icons/fa";
import Logo from "@/app/Assets/Logo.png";
const Footer = () => {
  return (
    <>
      <footer className="bg-gray-100 h-90 py-10">
        <div className="container mt-40  mx-auto grid grid-cols-1 md:grid-cols-4 gap-8 px-4">
          {/* Logo and Description */}
          <div>
            <h2 className="text-2xl font-semibold text-purple-900 flex items-center">
              {/* <span className=" rounded-full h-10 mr-2"> */}
              <img src={Logo.src} className="h-10 mr-4" />
              {/* </span> */}
              SaaSto
            </h2>
            <p className="mt-4 text-gray-600">
              Lorem Ipsum is simply dummy text of the printing and typesetting
              industry. Lorem Ipsum has been the industry's standard.
            </p>
            <div className="flex space-x-4 mt-4">
              <FaInstagram className="text-purple-500 cursor-pointer" />
              <FaFacebook className="text-purple-500 cursor-pointer" />
              <FaYoutube className="text-purple-500 cursor-pointer" />
            </div>
          </div>

          {/* Our Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">Our Links</h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link href="/" className="text-gray-600 hover:text-purple-600">
                  Home
                </Link>
              </li>
              <li>
                <Link
                  href="/about"
                  className="text-gray-600 hover:text-purple-600"
                >
                  About us
                </Link>
              </li>
              <li>
                <Link
                  href="/services"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Services
                </Link>
              </li>
              <li>
                <Link
                  href="/team"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Team
                </Link>
              </li>
              <li>
                <Link
                  href="/blog"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Blog
                </Link>
              </li>
            </ul>
          </div>

          {/* Our Services */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Our Services
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/strategy-research"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Strategy & Research
                </Link>
              </li>
              <li>
                <Link
                  href="/web-development"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Web Development
                </Link>
              </li>
              <li>
                <Link
                  href="/web-solution"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Web Solution
                </Link>
              </li>
              <li>
                <Link
                  href="/digital-marketing"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Digital Marketing
                </Link>
              </li>
              <li>
                <Link
                  href="/app-design"
                  className="text-gray-600 hover:text-purple-600"
                >
                  App Design
                </Link>
              </li>
            </ul>
          </div>

          {/* Other Links */}
          <div>
            <h3 className="text-lg font-semibold text-gray-800">
              Others Links
            </h3>
            <ul className="mt-4 space-y-2">
              <li>
                <Link
                  href="/faq"
                  className="text-gray-600 hover:text-purple-600"
                >
                  FAQ
                </Link>
              </li>
              <li>
                <Link
                  href="/portfolio"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Portfolio
                </Link>
              </li>
              <li>
                <Link
                  href="/privacy-policy"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Privacy Policy
                </Link>
              </li>
              <li>
                <Link
                  href="/terms-conditions"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Terms & Condition
                </Link>
              </li>
              <li>
                <Link
                  href="/support"
                  className="text-gray-600 hover:text-purple-600"
                >
                  Support
                </Link>
              </li>
            </ul>
          </div>
        </div>
        <div className="container mx-auto flex mt-5 justify-between items-center px-4 py-4">
          <p className="text-center text-gray-600 text-sm">
            Terms & condition{" "}
          </p>
          <p className="text-center text-gray-600 text-sm">
            All Right Reserved @ plowv.com
          </p>
        </div>
      </footer>
    </>
  );
};

export default Footer;
