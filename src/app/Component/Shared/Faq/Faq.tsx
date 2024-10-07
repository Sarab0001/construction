"use client";
import React, { useState } from "react";

const Faq = () => {
  const [email, setEmail] = useState("");

  const handleSubscription = async (e: React.FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    console.log("Subscribing with:", email);
    setEmail("");
  };

  return (
    <div className="translate-x-60  translate-y-20 w-[70%] h-[80%] p-16 bg-purple-500 rounded-2xl shadow-md z-5">
      <h2 className="mt-10 text-2xl text-white font-semibold mb-2 text-center">
        Subscribe To Our Newsletter & Get The Coupon Code.
      </h2>
      <p className="text-white text-lg mb-4 text-center">
        All your information is completely confidential
      </p>
      <form
        className="flex flex-col sm:flex-row gap-3 justify-center w-full max-w-md mx-auto"
        onSubmit={handleSubscription}
      >
        <input
          type="email"
          placeholder="Type your email"
          className="flex-1 px-4 py-4 border border-transparent rounded-md focus:outline-none focus:ring-2 focus:ring-purple-600 focus:border-transparent"
          value={email}
          onChange={(e) => setEmail(e.target.value)}
          required
        />
        <button
          type="submit"
          className="bg-orange-500 hover:bg-orange-600 text-white font-bold py-2 px-4 rounded-md transition-colors"
        >
          Subscribe
        </button>
      </form>
    </div>
  );
};

export default Faq;
