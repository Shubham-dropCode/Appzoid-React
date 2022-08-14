import React from "react";
import PageLayout from "../Compenents/PageLayout";
import Slider, { ImageSlide } from "../Compenents/Slider";

export default function NewHome() {
  return (
    <PageLayout isHomePage={true}>
      <Slider>
        <ImageSlide title="Image Slide 1" />
      </Slider>
    </PageLayout>
  );
}
