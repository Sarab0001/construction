"use client";

const ContactFormWithMap = () => {
  return (
    <div className="relative h-[700px]">
      <div className="">
        <div className=" absolute  top-16 h-[600px]  lg:top-20 lg:left-80   p-6 sm:p-8 lg:p-10 bg-blue-900 text-white rounded-lg z-10  max-w-xs sm:max-w-md lg:max-w-md">
          <h2 className="text-xl sm:text-2xl font-bold mb-2">
            Get a free quote
          </h2>
          <p className="mb-4 text-sm sm:text-base">
            24 hours. That is all it will take you to figure out the cost
            benefits of outsourcing.
          </p>
          <div className="">
            <form className=" space-y-4">
              <input
                type="text"
                placeholder="Name"
                className="w-full p-3 border border-gray-300 rounded-md text-black"
              />
              <input
                type="email"
                placeholder="Email"
                className="w-full p-3 border border-gray-300 rounded-md text-black"
              />
              <input
                type="tel"
                placeholder="Phone Number"
                className="w-full p-3 border border-gray-300 rounded-md text-black"
              />
              <input
                type="text"
                placeholder="Country"
                className="w-full p-3 border border-gray-300 rounded-md text-black"
              />
              <textarea
                placeholder="Message"
                className="w-full p-3 border border-gray-300 rounded-md text-black"
              />
              <button
                type="submit"
                className="w-full bg-red-600 text-white py-3 rounded-md hover:bg-red-700 transition"
              >
                Submit
              </button>
            </form>
          </div>
        </div>
      </div>
      {/* Map */}
      <div className="h-full w-full">
        <iframe
          src="https://www.google.com/maps/embed?pb=!1m18!1m12!1m3!1d3501.2932491441707!2d77.16330529999999!3d28.650936899999998!2m3!1f0!2f0!3f0!3m2!1i1024!2i768!4f13.1!3m3!1m2!1s0x390d02ee496c280f%3A0x29a4dc2cbe913072!2sD-57%2C%20Block%20D%2C%20West%20Patel%20Nagar%2C%20Patel%20Nagar%2C%20New%20Delhi%2C%20Delhi%2C%20110008!5e0!3m2!1sen!2sin!4v1732689941899!5m2!1sen!2sin"
          width="900"
          height="450"
          className="w-full h-full"
          loading="lazy"
          allowFullScreen
        ></iframe>
      </div>
    </div>
  );
};

export default ContactFormWithMap;
