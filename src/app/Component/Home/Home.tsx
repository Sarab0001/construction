import React from "react";
import HeroSection from "./Hero";
import SuccessStory from "../Shared/SuccessStories";
import NewsletterSubscription from "../Shared/SuccessStories";
import Faq from "../Shared/Faq/Faq";
import LatestInsights from "../Shared/Insight/Insight";
import ClientReviews from "../Shared/Testimonial/Testimonial";

const Home = () => {
  return (
    <div>
      <LatestInsights />
      <ClientReviews />
    </div>
  );
};

export default Home;
