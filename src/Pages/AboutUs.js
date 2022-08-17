import React from "react";
import NavBar from "../Compenents/NavBar";
import BreadCrumb from "../Compenents/BreadCrumb";
import WhoAreWe from "../Compenents/WhoAreWe";
import Feature from "../Compenents/Feature";
import AboutCompany from "../Compenents/AboutCompany";
import NumberCounter from "../Compenents/NumberCounter";
import Footer from "../Compenents/Footer";
import FounderAndDirector from "../Compenents/FounderAndDirector";
import Testimonial from "../Compenents/Testimonial";
import PartnersBrands from "../Compenents/PartnersBrands";
import BackToTop from "../Compenents/BackToTop";
import PageLayout from "../Compenents/PageLayout";

const AboutUs = () => {
  return (
    <>
      <PageLayout>
        <BreadCrumb heading="About Us" />
        <WhoAreWe
          heading="We are Leading Company"
          description="We are coherent, consistent, and well-integrated-together with numerous leading organizations which has helps us to 
        provide excellent repair service to our customer and make then worry free about their Smart appliances, mobile devices and all 
         modern gadgets since 2018."
          imgSrc="../images/AboutUs01.jpg"
        />
        <Feature />
        <AboutCompany />
        <NumberCounter
          heading1="MOBILE REPAIRED"
          heading2="SMART DEVICES REPAIRED"
          heading3="SATISFIED CUSTOMERS"
          heading4="AWARDS WON"
          imgSrc="../images/numberCounter.jpg"
        />
        <FounderAndDirector />
        <div className="col-12">
          <Testimonial />

          <PartnersBrands />
        </div>
      </PageLayout>
    </>
  );
};

export default AboutUs;
