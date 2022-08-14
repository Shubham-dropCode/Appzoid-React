import React from "react";
import FeatureSection from "../Compenents/FeatureSection";
import PageLayout from "../Compenents/PageLayout";
import Slider, { ImageSlide } from "../Compenents/Slider";
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
      <FeatureSection title={data.HomePage.featuresTitle} features={data.HomePage.features} />
    </PageLayout>
  );
}