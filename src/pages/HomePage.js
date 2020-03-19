import React from "react";

import Hero from "../components/Hero";

function HomePage(props) {
  return (
    <div>
      {/* Hero component passing title, subTitle, text */}
      <Hero title={props.title} subTitle={props.subTitle} text={props.text} />
    </div>
  );
}

export default HomePage;
