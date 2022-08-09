import React from "react";
import ComingSoon from "./ComingSoon";
import Feature from "./Feature";
import Hero from "./Hero";
import LatestBlog from "./LatestBlog";
import NumberCounter from "./NumberCounter";
import QuickService from "./QuickService";

import Slider from "./Slider";
import Testimonial from "./Testimonial";
import WhoAreWe from "./WhoAreWe";

const Main = () => {
  return (
    <>
      <Hero />
      {/* <Slider /> */}
      <Feature />
      <QuickService />
      <WhoAreWe />
      <NumberCounter />
      <ComingSoon />
      <Testimonial />
      <LatestBlog />
    </>
  );
};

export default Main;
