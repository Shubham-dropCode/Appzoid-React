import React from "react";
import { Link } from "react-router-dom";

const AboutCompany = (props) => {
  return (
    <React.Fragment>
      <section className="section pt-0">
        <div className="container-fluid">
          <div className="row justify-content-center">
            <div className="col-12">
              <div className="section-title text-center mb-4 pb-2">
                <h1 className="display-5 pb-2">
                  <span className="underline">{props.title}</span>
                </h1>
                <p className="para-desc text-muted mx-auto mb-0">
                  {props.description}
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className="container ">
          <div className="row justify-content-center">

            {props.AboutCompanyCard.map((element) => {
              return (
                <div className="col-lg-4 col-md-6 mt-4 pt-2">
                  <div className="card blog blog-image blog-primary shadow rounded overflow-hidden mx-2">
                    <div className="card-img">
                      <img
                        src={element.imgSrc}
                        className="img-fluid"
                        alt=""
                      />
                      <div className="card-overlay"></div>
                    </div>
                    <div className="content px-4">
                      <Link
                        to={element.linkTo}
                        className="h5 title d-block mb-0 text-white title-dark"
                      >
                        {element.title}
                      </Link>

                      <div className="d-flex author align-items-center mt-2">
                        <div>
                          <small className="text-white-50 user d-block">
                            {element.description}
                          </small>
                        </div>
                      </div>
                    </div>
                  </div>
                </div>
              )
            })}
            {/* <div className="col-lg-4 col-md-6 mt-4 pt-2">
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
            </div> */}
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default AboutCompany;
