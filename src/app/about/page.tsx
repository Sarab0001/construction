"use client";
import React from "react";
import ClientReviews from "../Component/Shared/Testimonial/Testimonial";
import LatestInsights from "../Component/Shared/Insight/Insight";
import OurSitePictures from "../Component/Shared/OurSite/OurSite";
import OurClients from "../Component/Shared/OurClients/OurClients";
import ChairmanLeadership from "../Component/Shared/ChairmanLeadership/ChairmanLeadership";
import VisionMissionValues from "../Component/Shared/VisionMissionValues/VisionMissionValues";
import Company from "../Component/Shared/Company/Company";
import HeroSection from "../Component/AboutUs/AboutHero";
import NumberTalks from "../Component/AboutUs/NumberTalks";

const page = () => {
  return (
    <div>
      <HeroSection />
      <Company />
      <VisionMissionValues />
      <ChairmanLeadership />
      <NumberTalks />
      <OurClients />
      <OurSitePictures />
      <div className="space-y-16 sm:space-y-24 lg:space-y-32">
      <ClientReviews />
      <LatestInsights />
    </div>
    </div>
  );
};

export default page;
