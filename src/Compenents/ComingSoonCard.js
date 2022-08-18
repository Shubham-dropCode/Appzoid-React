import React from "react";
import { Link } from "react-router-dom";

const ComingSoonCard = (props) => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          {props.OurServicesCard.map((element) => {
            return (
              <div className="col-xl-4 col-lg-4 col-md-6 mt-4 pt-2">
                <div className="card features feature-success features-classic h-100 p-4 rounded-md shadow border-0">
                  <div className="fea-icon bg-soft rounded-md">
                    <i className={element.icon}></i>
                  </div>

                  <div className="content mt-4">
                    <h5 className="mb-3">{element.title}</h5>
                    <Link to={element.linkTo} className="title text-dark">
                      Read More{" "}
                      <i className="uil uil-arrow-right align-middle"></i>
                    </Link>
                  </div>
                </div>
              </div>
            );
          })}

          {/* <div className="col-xl-4 col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card features feature-success features-classic p-4 rounded-md shadow border-0">
              <div className="fea-icon bg-soft rounded-md">
                <i className="uil uil-cube"></i>
              </div>

              <div className="content mt-4">
                <h5 className="mb-3">Price Protect</h5>
                <a
                  href="page-single-service.html"
                  className="title text-dark"
                >
                  Read More{" "}
                  <i className="uil uil-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card features feature-warning features-classic p-4 rounded-md shadow border-0">
              <div className="fea-icon bg-soft rounded-md">
                <i className="uil uil-airplay"></i>
              </div>

              <div className="content mt-4">
                <h5 className="mb-3">Wide Good VAS Products</h5>
                <a
                  href="page-single-service.html"
                  className="title text-dark"
                >
                  Read More{" "}
                  <i className="uil uil-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card features feature-danger features-classic p-4 rounded-md shadow border-0">
              <div className="fea-icon bg-soft rounded-md">
                <i className="uil uil-illustration"></i>
              </div>

              <div className="content mt-4">
                <h5 className="mb-3">Warranty Programme</h5>
                <a
                  href="page-single-service.html"
                  className="title text-dark"
                >
                  Read More{" "}
                  <i className="uil uil-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card features feature-warning features-classic p-4 rounded-md shadow border-0">
              <div className="fea-icon bg-soft rounded-md">
                <i className="uil uil-dribbble"></i>
              </div>

              <div className="content mt-4">
                <h5 className="mb-3">Free Pick-up and Drop</h5>
                <a
                  href="page-single-service.html"
                  className="title text-dark"
                >
                  Read More{" "}
                  <i className="uil uil-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card features feature-danger features-classic p-4 rounded-md shadow border-0">
              <div className="fea-icon bg-soft rounded-md">
                <i className="uil uil-airplay"></i>
              </div>

              <div className="content mt-4">
                <h5 className="mb-3">E-Commerce</h5>
                <a
                  href="page-single-service.html"
                  className="title text-dark"
                >
                  Read More{" "}
                  <i className="uil uil-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card features feature-primary features-classic p-4 rounded-md shadow border-0">
              <div className="fea-icon bg-soft rounded-md">
                <i className="uil uil-brackets-curly"></i>
              </div>

              <div className="content mt-4">
                <h5 className="mb-3">Accesories</h5>
                <a
                  href="page-single-service.html"
                  className="title text-dark"
                >
                  Read More{" "}
                  <i className="uil uil-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card features feature-success features-classic p-4 rounded-md shadow border-0">
              <div className="fea-icon bg-soft rounded-md">
                <i className="uil uil-puzzle-piece"></i>
              </div>

              <div className="content mt-4">
                <h5 className="mb-3">Distribution</h5>
                <a
                  href="page-single-service.html"
                  className="title text-dark"
                >
                  Read More{" "}
                  <i className="uil uil-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div>

          <div className="col-xl-4 col-lg-4 col-md-6 mt-4 pt-2">
            <div className="card features feature-success features-classic p-4 rounded-md shadow border-0">
              <div className="fea-icon bg-soft rounded-md">
                <i className="uil uil-puzzle-piece"></i>
              </div>

              <div className="content mt-4">
                <h5 className="mb-3">Electronic Retail Programme</h5>
                <a
                  href="page-single-service.html"
                  className="title text-dark"
                >
                  Read More{" "}
                  <i className="uil uil-arrow-right align-middle"></i>
                </a>
              </div>
            </div>
          </div> */}
        </div>
      </div>
    </section>
  );
};

export default ComingSoonCard;
