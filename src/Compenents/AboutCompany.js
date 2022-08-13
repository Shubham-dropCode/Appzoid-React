import React from "react";

const AboutCompany = () => {
  return (
    <React.Fragment>
      <section
        className="section"
        // style="background: url('images/cta06.png') no-repeat right bottom;"
      >
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h4 className="title fw-semibold mb-3 mt-2">
                  About Our Company
                </h4>
                <p className="para-desc text-muted mx-auto mb-0">
                  Appzoid accepts in keen innovation is the foremost consistent
                  aftersales benefit stage that integrates multiple driving
                  companies to supply palatable repair benefit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row justify-content-center">
            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card blog blog-image blog-primary shadow rounded overflow-hidden mx-2">
                <div className="card-img">
                  <img
                    src="../images/Aboutus-4.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="card-overlay"></div>
                </div>
                <div className="content px-4">
                  <a
                    href="blog-detail-one.html"
                    className="h5 title d-block mb-0 text-white title-dark"
                  >
                    Our History
                  </a>

                  <div className="d-flex author align-items-center mt-2">
                    <div>
                      <small className="text-white-50 user d-block">
                        Leading Mobile Service Company
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card blog blog-image blog-primary shadow rounded overflow-hidden mx-2">
                <div className="card-img">
                  <img
                    src="../images/Aboutus-5.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="card-overlay"></div>
                </div>
                <div className="content px-4">
                  <a
                    href="blog-detail-one.html"
                    className="h5 title d-block mb-0 text-white title-dark"
                  >
                    Our Mission
                  </a>

                  <div className="d-flex author align-items-center mt-2">
                    <div>
                      <small className="text-white-50 user d-block">
                        We are Expert in this Field, Fast and Reliable Service.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div className="col-lg-4 col-md-6 mt-4 pt-2">
              <div className="card blog blog-image blog-primary shadow rounded overflow-hidden mx-2">
                <div className="card-img">
                  <img
                    src="../images/Aboutus-6.jpg"
                    className="img-fluid"
                    alt=""
                  />
                  <div className="card-overlay"></div>
                </div>
                <div className="content px-4">
                  <a
                    href="blog-detail-one.html"
                    className="h5 title d-block mb-0 text-white title-dark"
                  >
                    Expanding Goal
                  </a>

                  <div className="d-flex author align-items-center mt-2">
                    <div>
                      <small className="text-white-50 user d-block">
                        Our Expert have been Featured in press numerous times.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutCompany;
