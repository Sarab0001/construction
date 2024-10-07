import Fire from "@/app/Assets/fire.png";
import Customer from "@/app/Assets/Customer.png";
import Download from "@/app/Assets/Download.png";
import Users from "@/app/Assets/Users.png";
import Image from "next/image";
import React from "react";

const SuccessStory: React.FC = () => {
  return (
    <div className=" bg-gradient-to-r from-purple-50 to-indigo-50 flex items-center justify-center">
      <div className="relative w-full max-w-6xl flex items-center justify-between bg-white rounded-lg shadow-xl p-8">
        {/* Left Side - Trophy and Text */}
        <div className="flex items-start space-x-4 w-full md:w-1/2">
          {/* Trophy Icon */}
          <div className="w-16 h-16">
            <Image src={Customer} alt="Trophy Icon" width={64} height={64} />
          </div>

          {/* Text Content */}
          <div className="space-y-2">
            <h2 className="text-3xl font-bold text-gray-900">
              See Our Success Stories
            </h2>
            <p className="text-gray-600 max-w-sm">
              Frontegg dramatically sped our go-to-market by cutting our
              up-front development time
            </p>
            <div className="mt-4">
              <p className="text-gray-800 font-semibold">Jhon Kelaven</p>
              <p className="text-gray-500">Creative Designer</p>
            </div>
          </div>
        </div>

        {/* Right Side - Avatars */}
        <div className="relative flex items-center justify-center w-full md:w-1/2">
          {/* Main Large Avatar */}
          <div className="w-40 h-40 rounded-full overflow-hidden">
            <Image
              src={Fire}
              alt="Main Avatar"
              width={160}
              height={160}
              className="rounded-full"
            />
          </div>

          {/* Smaller Floating Avatars */}
          <div className="absolute -top-8 left-0">
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
              <Image src={Fire} alt="Small Avatar 1" width={48} height={48} />
            </div>
          </div>
          <div className="absolute -bottom-8 right-0">
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
              <Image
                src={Download}
                alt="Small Avatar 2"
                width={48}
                height={48}
              />
            </div>
          </div>
          <div className="absolute -bottom-8 left-10">
            <div className="w-12 h-12 rounded-full border-2 border-white overflow-hidden">
              <Image src={Users} alt="Small Avatar 3" width={48} height={48} />
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

export default SuccessStory;
