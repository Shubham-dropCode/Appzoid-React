import React from "react";
import ComingSoon from "../Compenents/ComingSoon";
import Feature from "../Compenents/Feature";
import Hero from "../Compenents/Hero";
import LatestBlog from "../Compenents/LatestBlog";
import NumberCounter from "../Compenents/NumberCounter";
import PartnersBrands from "../Compenents/PartnersBrands";
import QuickService from "../Compenents/QuickService";
import Testimonial from "../Compenents/Testimonial";
import WhoAreWe from "../Compenents/WhoAreWe";
import NavBar from "../Compenents/NavBar";
import Footer from "../Compenents/Footer";

const Main = () => {
  return (
    <>
      <NavBar />
      <Hero />
      {/* <Slider /> */}
      <Feature />
      <QuickService />
      <WhoAreWe
        heading="Who We Are"
        description="Telangana based Appzoid Resolutions is locked in changing the after deals benefit encounter. We esteem constancy, deftness,
         adeptness development, agility, supportability and specialised in Mobile Repairs and Services, We repair out of warranty mobile and 
         smart gadgets."
        imgSrc="../images/AboutUs02.jpg"
      />
      <ComingSoon />
      <NumberCounter
        heading1="Happy Costomer"
        heading2="Smart Devices REPAIRED"
        heading3="Mobile REPAIRED"
        heading4="OS Installed"
        imgSrc="../images/cta04.png"
      />
      <Testimonial />
      <LatestBlog />
      <PartnersBrands />
      <Footer />
    </>
  );
};

export default Main;
