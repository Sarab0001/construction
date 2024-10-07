"use client";
import React from "react";
import Mockup1 from "../Component/Mockup1/Mockup1";
import Script from "next/script";

const page = () => {
  return (
    <div>
      <Mockup1 />
      <Script src="/script.js" strategy="lazyOnload" />
      <Script src="/dat.gui.min.js" strategy="lazyOnload" />
    </div>
  );
};

export default page;
