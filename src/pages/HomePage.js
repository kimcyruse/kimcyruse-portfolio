import React from "react";

import Hero from "../components/Hero";
import Carousel from "../components/Carousel";

function HomePage(props) {
  return (
    <div>
      {/* Hero component passing title, subTitle, text */}
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
      {/* Carousel component */}
      <Carousel />
    </div>
  );
}

export default HomePage;
