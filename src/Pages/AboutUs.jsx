import React from "react";
import BreadCrumb from "../Compenents/BreadCrumb";
import AboutCompany from "../Compenents/AboutCompany";
import NumberCounter from "../Compenents/NumberCounter";
import FounderAndDirector from "../Compenents/FounderAndDirector";
import Testimonial from "../Compenents/Testimonial";
import PartnersBrands from "../Compenents/PartnersBrands";
import PageLayout from "../Compenents/PageLayout";
import data from "../Data/Content.json"
import WhoAreWe from "../Compenents/WhoAreWe"
import FeatureSection from "../Compenents/FeatureSection";

const AboutUs = () => {
  return (
    <>
      <PageLayout>
        <BreadCrumb heading={data.AboutUs.AboutUsBreadCrumbTitle} />
        <WhoAreWe {...data.AboutUs.WhoWeAre} />
        <FeatureSection title={data.AboutUs.featuresTitle}
          features={data.AboutUs.features} />
        <AboutCompany title={data.AboutUs.AboutCompanyTitle} description={data.AboutUs.AboutCompanyDescription} AboutCompanyCard={data.AboutUs.AboutCompanyCard} />
        <NumberCounter CounterNumber={data.AboutUs.CounterNumber} />
        <FounderAndDirector />
        <div className="col-12">
          <Testimonial title={data.AboutUs.testimonialTitle}
            subTitle={data.AboutUs.testimonialSubTitle}
            feedbacks={data.AboutUs.feedbacks} />

          <PartnersBrands brandImg={data.AboutUs.brandImg} />
        </div>
      </PageLayout>
    </>
  );
};

export default AboutUs;
