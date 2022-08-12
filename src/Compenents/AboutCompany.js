import React from "react";

const AboutCompany = () => {
  return (
    <React.Fragment>
      <section
        class="section"
        // style="background: url('images/cta06.png') no-repeat right bottom;"
      >
        <div class="container-fluid">
          <div class="row justify-content-center">
            <div class="col-12">
              <div class="section-title text-center mb-4 pb-2">
                <h4 class="title fw-semibold mb-3 mt-2">About Our Company</h4>
                <p class="para-desc text-muted mx-auto mb-0">
                  Appzoid accepts in keen innovation is the foremost consistent
                  aftersales benefit stage that integrates multiple driving
                  companies to supply palatable repair benefit.
                </p>
              </div>
            </div>
          </div>
        </div>

        <div class="container ">
          <div class="row justify-content-center">
            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="card blog blog-image blog-primary shadow rounded overflow-hidden mx-2">
                <div class="card-img">
                  <img src="../images/Aboutus-4.jpg" class="img-fluid" alt="" />
                  <div class="card-overlay"></div>
                </div>
                <div class="content px-4">
                  <a
                    href="blog-detail-one.html"
                    class="h5 title d-block mb-0 text-white title-dark"
                  >
                    Our History
                  </a>

                  <div class="d-flex author align-items-center mt-2">
                    <div>
                      <small class="text-white-50 user d-block">
                        Leading Mobile Service Company
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="card blog blog-image blog-primary shadow rounded overflow-hidden mx-2">
                <div class="card-img">
                  <img src="../images/Aboutus-5.jpg" class="img-fluid" alt="" />
                  <div class="card-overlay"></div>
                </div>
                <div class="content px-4">
                  <a
                    href="blog-detail-one.html"
                    class="h5 title d-block mb-0 text-white title-dark"
                  >
                    Our Mission
                  </a>

                  <div class="d-flex author align-items-center mt-2">
                    <div>
                      <small class="text-white-50 user d-block">
                        We are Expert in this Field, Fast and Reliable Service.
                      </small>
                    </div>
                  </div>
                </div>
              </div>
            </div>

            <div class="col-lg-4 col-md-6 mt-4 pt-2">
              <div class="card blog blog-image blog-primary shadow rounded overflow-hidden mx-2">
                <div class="card-img">
                  <img src="../images/Aboutus-6.jpg" class="img-fluid" alt="" />
                  <div class="card-overlay"></div>
                </div>
                <div class="content px-4">
                  <a
                    href="blog-detail-one.html"
                    class="h5 title d-block mb-0 text-white title-dark"
                  >
                    Expanding Goal
                  </a>

                  <div class="d-flex author align-items-center mt-2">
                    <div>
                      <small class="text-white-50 user d-block">
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
