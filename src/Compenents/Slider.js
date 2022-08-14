import React from "react";
import { Link } from "react-router-dom";
import { Swiper, SwiperSlide } from "swiper/react";
import { Navigation, Pagination, Scrollbar, A11y, Autoplay } from "swiper";
import "swiper/css";
import "swiper/css";
import "swiper/css/navigation";
import "swiper/css/pagination";
import "swiper/css/scrollbar";
import "swiper/css/autoplay";

export function ImageSlide({
  icon = "pe-7s-display1",
  bgImage = "slide-1-1.jpg",
  title = "Welcome to Appzoid & Resolution Pvt Ltd",
  subTitle = "Specialized in all brand Smart device Service",
  cta = {},
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
            <div className="text-center text-white">
              <h1 className="display-3 pt-5"><i className={icon}></i></h1>
              <p
                className="display-2"
                dangerouslySetInnerHTML={{ __html: title }}
              ></p>
              <p
                className="lead"
                dangerouslySetInnerHTML={{ __html: subTitle }}
              ></p>
              <div className="mt-4 pt-2">
                <Link
                  to={cta.linkTo}
                  className="btn btn-primary m-1 text-uppercase"
                >
                  {cta.title}
                </Link>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default function Slider({ children, sliderProps = {} }) {
  return (
    <Swiper
      modules={[Navigation, Pagination, Scrollbar, A11y, Autoplay]}
      onSlideChange={() => console.log("slide change")}
      onSwiper={(swiper) => console.log(swiper)}
      {...sliderProps}
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
