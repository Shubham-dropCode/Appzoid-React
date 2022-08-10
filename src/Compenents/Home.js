import React from "react";
import ComingSoon from "./ComingSoon";
import Feature from "./Feature";
import Hero from "./Hero";
import LatestBlog from "./LatestBlog";
import NumberCounter from "./NumberCounter";
import PartnersBrands from "./PartnersBrands";
import QuickService from "./QuickService";
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
      <ComingSoon />
      <NumberCounter />
      <Testimonial />
      <LatestBlog />
      <PartnersBrands />
    </>
  );
};

export default Main;
