import React from "react";
import { Carousel } from "react-responsive-carousel";
import "react-responsive-carousel/lib/styles/carousel.min.css";

const PartnersBrands = () => {
  const responsive = {
    desktop: {
      breakpoint: { max: 3000, min: 1024 },
      items: 3,
      slidesToSlide: 3, // optional, default to 1.
    },
    tablet: {
      breakpoint: { max: 1024, min: 464 },
      items: 2,
      slidesToSlide: 2, // optional, default to 1.
    },
    mobile: {
      breakpoint: { max: 464, min: 0 },
      items: 1,
      slidesToSlide: 1, // optional, default to 1.
    },
  };
  return (
    <React.Fragment>
      <section class="pt-4">
        <div class="container">
          <div class="row justify-content-center">
            <Carousel
              // swipeable={false}
              // draggable={false}
              // showDots={true}
              // responsive={responsive}
              // //   ssr={true} // means to render carousel on server-side.
              // infinite={true}
              // //   autoPlay={this.props.deviceType !== "mobile" ? true : false}
              // autoPlaySpeed={1000}
              // keyBoardControl={true}
              // customTransition="all .5"
              // transitionDuration={500}
              // containerClass="carousel-container"
              // //   removeArrowOnDeviceType={["tablet", "mobile"]}
              // //   deviceType={this.props.deviceType}
              // //   dotListClass="custom-dot-list-style"
              // itemClass="carousel-item-padding-40-px"
            >
              <div class="col-lg-2 col-md-2 col-6 text-center">
                <img
                  src="../images/client/logo-1.svg"
                  class="img-fluid"
                  alt=""
                />
              </div>

              <div class="col-lg-2 col-md-2 col-6 text-center">
                <img src="images/client/logo-2.svg" class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-2 col-6 text-center">
                <img src="images/client/logo-3.svg" class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-2 col-6 text-center">
                <img src="images/client/logo-4.svg" class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-2 col-6 text-center">
                <img src="images/client/logo-5.svg" class="img-fluid" alt="" />
              </div>

              <div class="col-lg-2 col-md-2 col-6 text-center">
                <img src="images/client/logo-6.svg" class="img-fluid" alt="" />
              </div>
            </Carousel>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default PartnersBrands;
