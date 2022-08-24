import React from "react";
import Slider from "react-slick";

const Testimonial = ({ title = "", subTitle = "", feedbacks = [] }) => {
  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
  };
  return (
    <section className="section pb-4">
      <div className="container">
        <div className="row justify-content-center mb-4">
          <div className="col-12">
            <div className="section-title mb-4 pb-2 text-center">
              <h1 className="display-5 pb-2">
                <span className="underline">{title}</span>
              </h1>
              <p className="text-muted para-desc mx-auto mb-0">{subTitle}</p>
            </div>
          </div>
        </div>

        <div className="row">
          <div className="col-12">
            <Slider {...setting}>
              {feedbacks.map((feedback, idx) => {
                return (
                  <div className="tiny-slide">
                    <div className="card border-0 text-center">
                      <div className="card-body">
                        <p className="text-muted mt-4" key={idx}>
                          " {feedback.comment} "
                        </p>
                        <h6 className="text-primary">- {feedback.name}</h6>
                      </div>
                    </div>
                  </div>
                );
              })}
            </Slider>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Testimonial;
