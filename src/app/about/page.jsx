"use client";

import React from "react";
import ProductReviews from "@/components/ProductReviews";
import { useState } from "react";

const About = () => {
  const [windowOpen, setWindowOpen] = useState(false);

  const handleButtonClick = () => {
    setWindowOpen(true);
  };

  const handleCloseWindow = () => {
    setWindowOpen(false);
  };

  return (
    <div>
      <button onClick={handleButtonClick}>Open Window</button>
      {windowOpen && <ProductReviews onClose={handleCloseWindow} reviews={testReviews}/>}
    </div>
  );
};

export default About;
