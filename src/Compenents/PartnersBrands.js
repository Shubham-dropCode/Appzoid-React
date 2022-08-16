import React from "react";
import Slider from "react-slick";
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";

const PartnersBrands = ({ brandImg = [] }) => {
  const setting = {
    dots: false,
    infinite: true,
    slidesToShow: 4,
    slidesToScroll: 1,
    initialSlide: 0,
    adaptiveHeight: true,
    autoplay: true,
    speed: 2000,
    autoplaySpeed: 1000,
    cssEase: "linear",
  };
  return (
    <React.Fragment>
      <section className="pt-4 pb-5">
        <div className="container">
          <div className="row justify-content-center ">
            <Slider {...setting}>
              {brandImg.map((img) => {
                return (
                  <div className="col-lg-2 col-md-2 col-6 text-center">
                    <img
                      src={img.imgSrc}
                      className="img-fluid"
                      alt=""
                    />
                  </div>
                )
              })}





              {/* <div className="col-lg-2 col-md-2 col-6 text-center">
                <img
                  src="../images/brands/Apple.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-2 col-6 text-center">
                <img
                  src="../images/brands/bajaj-alli.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-2 col-6 text-center">
                <img
                  src="../images/brands/Bajaj-Finserv.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-2 col-6 text-center">
                <img
                  src="../images/brands/lg2.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-2 col-6 text-center">
                <img
                  src="../images/brands/MI.png"
                  className="img-fluid"
                  alt=""
                />
              </div>

              <div className="col-lg-2 col-md-2 col-6 text-center">
                <img
                  src="../images/brands/micromax.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-2 col-6 text-center">
                <img
                  src="../images/brands/OnePlus.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-2 col-6 text-center">
                <img
                  src="../images/brands/samsung.png"
                  className="img-fluid"
                  alt=""
                />
              </div>
              <div className="col-lg-2 col-md-2 col-6 text-center">
                <img
                  src="../images/brands/vivo_173728.png"
                  className="img-fluid"
                  alt=""
                />
              </div> */}
            </Slider>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PartnersBrands;
