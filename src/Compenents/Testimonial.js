import React from "react";
import Slider from "react-slick";

const Testimonial = () => {
  const setting = {
    dots: true,
    infinite: true,
    slidesToShow: 2,
    slidesToScroll: 1,
    autoplay: true,
    speed: 3000,
    autoplaySpeed: 1000,
  };
  return (
    <React.Fragment>
      <section className="section pb-4">
        <div className="container mt-60 pt-0">
          <div className="row justify-content-center mb-4">
            <div className="col-12">
              <div className="section-title mb-4 pb-2 text-center">
                <h4 className="title mb-3">Testimonials</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Here are testimonials from clients that we have worked with
                  and are happy to share their opinion about the process and the
                  results.
                </p>
              </div>
            </div>
          </div>

          <div className="row">
            <div className="col-12">
              <div className="tiny-three-item">
                <Slider {...setting}>
                  <div className="tiny-slide">
                    <div className="card border-0 text-center">
                      <div className="card-body">
                        {/* <img
                          src="images/client/01.jpg"
                          className="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                          alt=""
                        /> */}
                        <p className="text-muted mt-4">
                          " You guys rock! Thank you for making it painless,
                          pleasant and most of all hassle free! I wish I would
                          have thought of it first. I am really satisfied with
                          my first Smart phone service. "
                        </p>
                        <h6 className="text-primary">- Akash Singh</h6>
                      </div>
                    </div>
                  </div>

                  <div className="tiny-slide">
                    <div className="card border-0 text-center">
                      <div className="card-body">
                        {/* <img
                          src="images/client/02.jpg"
                          className="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                          alt=""
                        /> */}
                        <p className="text-muted mt-4">
                          " Appzoid did great job with fixing my mobile for a
                          good price. I recommend any body with mobile problems,
                          they will give you excellent service to all his
                          customers. "
                        </p>
                        <h6 className="text-primary">- Prashant Aher</h6>
                      </div>
                    </div>
                  </div>

                  <div className="tiny-slide">
                    <div className="card border-0 text-center">
                      <div className="card-body">
                        {/* <img
                          src="images/client/03.jpg"
                          className="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                          alt=""
                        /> */}
                        <p className="text-muted mt-4">
                          "I was amazed at the quality of service. I like
                          Appzoid more and more each day because it makes my
                          life a lot easier. Thanks guys, keep up the good work!
                          I recommend Appzoid to everyone."
                        </p>
                        <h6 className="text-primary">- Jai Patil</h6>
                      </div>
                    </div>
                  </div>

                  <div className="tiny-slide">
                    <div className="card border-0 text-center">
                      <div className="card-body">
                        {/* <img
                          src="images/client/04.jpg"
                          className="img-fluid avatar avatar-small rounded-circle mx-auto shadow"
                          alt=""
                        /> */}
                        <p className="text-muted mt-4">
                          " Keep up the excellent work. Thank you so much for
                          your help. This is simply unbelievable! "
                        </p>
                        <h6 className="text-primary">- Om Mishra</h6>
                      </div>
                    </div>
                  </div>
                </Slider>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Testimonial;
