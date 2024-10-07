import React from "react";
import OurClients from "../Shared/OurClients/OurClients";
import OurSitePictures from "../Shared/OurSite/OurSite";
import LatestInsights from "../Shared/Insight/Insight";
import ClientReviews from "../Shared/Testimonial/Testimonial";
import ChairmanLeadership from "../Shared/ChairmanLeadership/ChairmanLeadership";
import Services from "../Shared/services/services";
import VisionMissionValues from "../Shared/VisionMissionValues/VisionMissionValues";
import Services2 from "../Shared/Services2/Services2";
import Company from "../Shared/Company/Company";
import HeroSection from "./Hero";

const Mockup1 = () => {
  return (
    <div>
      <HeroSection />
      <Company />
      <VisionMissionValues />
      <Services2 />
      <ChairmanLeadership />
      <Services />
      <OurClients />
      <OurSitePictures />
      <LatestInsights />
      <ClientReviews />
    </div>
  );
};

export default Mockup1;
