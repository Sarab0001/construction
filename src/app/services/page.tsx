"use client";
import React from "react";
import HeroSection from "../Component/Services/SHero";
import Company from "../Component/Shared/Company/Company";
import NumberTalks from "../Component/AboutUs/NumberTalks";
import OurClients from "../Component/Shared/OurClients/OurClients";
import Services2 from "../Component/Shared/Services2/Services2";
import BusinessComponent from "../Component/Services/DataServices";
import ExperienceComponent from "../Component/Services/Experience";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Company />
      <Services2 />
      <BusinessComponent />
      <ExperienceComponent />
      <NumberTalks />
      <OurClients />
    </div>
  );
};

export default page;
