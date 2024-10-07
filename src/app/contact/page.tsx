import React from "react";
import HeroSection from "../Component/ContactUS/CHero";
import CServices from "../Component/ContactUS/CServices";
import ContactFormWithMap from "../Component/ContactUS/ContactForm";

const page = () => {
  return (
    <div>
      <HeroSection />
      <CServices />
      <ContactFormWithMap />
    </div>
  );
};

export default page;
