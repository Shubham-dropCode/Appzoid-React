import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import "swiper/css";

export function ImageSlide({
  bgImage = "",
  title = "",
  subTitle = "",
  ctaLink = "",
}) {
  return (
    <div className="bg-home zoom-image d-flex align-items-center">
      <img
        className="bg-overlay image-wrap"
        src={"../images/bg/" + bgImage}
        alt=""
      />
      <div className="bg-overlay bg-linear-gradient"></div>
      <div className="container">
        <div className="row justify-content-center mt-5">
          <div className="col-12">
            <div className="title-heading text-center">
              <h4
                className="display-2 fw-bold text-white title-dark"
                dangerouslySetInnerHTML={{ __html: title }}
              ></h4>
              <p
                className="para-desc mx-auto text-white-50"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              ></p>
              <div className="mt-4 pt-2">
                <Link to={ctaLink} className="btn btn-primary m-1">
                  REQUEST FOR SERVICE
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Slider({ children, props = {} }) {
  return (
    <Swiper
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      {...props}
    >
      {children !== undefined ? (
        children.map((child, index) => {
          return <SwiperSlide key={index}>{child}</SwiperSlide>;
        })
      ) : (
        <>
          <SwiperSlide>Slide 1</SwiperSlide>
          <SwiperSlide>Slide 2</SwiperSlide>
          <SwiperSlide>Slide 3</SwiperSlide>
          <SwiperSlide>Slide 4</SwiperSlide>
        </>
      )}
    </Swiper>
  );
}
