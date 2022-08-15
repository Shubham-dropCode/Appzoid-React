import React from "react";
import ComingSoon from "../Compenents/ComingSoon";
import FeatureSection from "../Compenents/FeatureSection";
import LatestBlog from "../Compenents/LatestBlog";
import NumberCounter from "../Compenents/NumberCounter";
import PageLayout from "../Compenents/PageLayout";
// import QuickService from "../Compenents/OldQuickService";
import QuickServiceSection from "../Compenents/QuickServiceSection";
import Slider, { ImageSlide } from "../Compenents/Slider";
import Testimonial from "../Compenents/Testimonial";
import WhoAreWe from "../Compenents/WhoAreWe";
import data from "../Data/Content.json";

export default function NewHome() {
  return (
    <PageLayout isHomePage={true}>
      <Slider
        sliderProps={{
          navigation: true,
          pagination: {
            clickable: true,
          },
          grabCursor: true,
          autoPlay: {
            delay: 2500,
            disableOnInteraction: false,
          },
        }}
      >
        {data.HomePage.slides.map((slide, index) => {
          return <ImageSlide key={index} title={slide.title} cta={slide.cta} />;
        })}
      </Slider>
      <FeatureSection
        title={data.HomePage.featuresTitle}
        features={data.HomePage.features}
      />
      <QuickServiceSection
        title={data.HomePage.QuickServiceTitle}
        subTitle={data.HomePage.QuickServiceSubTitle}
        QuickServices={data.HomePage.QuickServices}
      />
      <WhoAreWe {...data.HomePage.WhoWeAre} />
      <ComingSoon title={data.HomePage.ComingSoonTitle}
        subTitle={data.HomePage.ComingSoonSubTitle}
        ComingSoon={data.HomePage.ComingSoon} />
      {/* <NumberCounter /> */}
      <Testimonial title={data.HomePage.testimonialTitle}
        subTitle={data.HomePage.testimonialSubTitle}
        feedbacks={data.HomePage.feedbacks} />
      <LatestBlog />
    </PageLayout>
  );
}
