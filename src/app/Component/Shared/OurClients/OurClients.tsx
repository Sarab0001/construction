"use client";
import React, { useState, useEffect } from "react";
import Image from "next/image";
import C1 from "@/app/Assets/Clients/C1.png";
import C2 from "@/app/Assets/Clients/C2.png";
import C3 from "@/app/Assets/Clients/C3.png";
import C4 from "@/app/Assets/Clients/C4.png";
import C5 from "@/app/Assets/Clients/C5.png";
import "./OurClients.css";

const clients = [
  { src: C1, alt: "Client 1" },
  { src: C2, alt: "Client 2" },
  { src: C3, alt: "Client 3" },
  { src: C4, alt: "Client 4" },
  { src: C5, alt: "Client 5" },
  { src: C3, alt: "Client 5" },
  { src: C5, alt: "Client 5" },
];

const OurClients: React.FC = () => {
  const [currentPage, setCurrentPage] = useState(0);
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const handleResize = () => {
      setIsMobile(window.innerWidth < 640);
    };

    handleResize();
    window.addEventListener("resize", handleResize);

    return () => {
      window.removeEventListener("resize", handleResize);
    };
  }, []);

  const clientsPerPage = 5; 
  const totalPages = Math.ceil(clients.length / clientsPerPage);

  useEffect(() => {
    if (isMobile) {
      const intervalId = setInterval(() => {
        setCurrentPage((prevPage) => (prevPage + 1) % totalPages);
      }, 10000);

      return () => clearInterval(intervalId);
    }
  }, [isMobile, totalPages]);

  const handlePageChange = (pageIndex: number) => {
    setCurrentPage(pageIndex);
  };

  const startIndex = currentPage * clientsPerPage;
  const selectedClients = clients.slice(startIndex, startIndex + clientsPerPage);

  return (
    <section className="py-16 bg-gray-50 text-center">
      <h2 className="text-4xl font-bold mb-8">Our Clients</h2>
      <div className="mx-auto px-2 relative w-full">
        <div className=" flex justify-center items-center overflow-x-auto scroll-smooth custom-scrollbar">
          {selectedClients.map((client, index) => (
            <div
              key={index}
              className="w-[203px] h-[116px] top-[3122px] left-[160.66px] flex flex-col justify-center items-center snap-center flex-shrink-0 p-4 border border-black mx-2"
            >
              <Image
                src={client.src}
                alt={client.alt}
                className="w-[70px] h-[90px]"
              />
            </div>
          ))}
        </div>
      </div>

      {!isMobile && (
        <div className="flex justify-center space-x-2 mt-6">
          {Array.from({ length: totalPages }).map((_, pageIndex) => (
            <button
              key={pageIndex}
              onClick={() => handlePageChange(pageIndex)}
              className={`w-3 h-3 rounded-full ${
                pageIndex === currentPage ? "bg-black" : "bg-gray-400"
              }`}
            />
          ))}
        </div>
      )}
    </section>
  );
};

export default OurClients;
