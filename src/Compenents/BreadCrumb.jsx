import React from "react";
import { Link } from "react-router-dom";
const BreadCrumb = (props) => {
  return (
    <section
      className="bg-half-80 d-table bg-primary bg-gradient w-100"
      style={{ background: "url('images/bg/services.jpg')" }}
    >
      <div className="bg-overlay bg-gradient-overlay"></div>
      <div className="container">
        <div className="row g-0 align-items-center mt-5">
          <div className="col-lg-8 col-md-6">
            <div className="title-heading text-md-start text-center">
              <h5 className="heading fw-semibold page-heading text-white title-dark">
                {props.heading}
              </h5>
              <p className="text-white-50 mb-0">
                Walking is the best possible exercise
              </p>
            </div>
          </div>

          <div className="col-lg-4 col-md-6 mt-4 mt-sm-0">
            <div className="text-md-end text-center">
              <nav aria-label="breadcrumb" className="d-inline-block">
                <ul separator="<" className="breadcrumb breadcrumb-muted mb-0 p-0">
                  <li className="breadcrumb-item" >
                    <Link to="/">Home </Link>
                  </li>
                  <li className="breadcrumb-item active" aria-current="page">
                    {props.heading}
                  </li>
                </ul>
              </nav>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default BreadCrumb;
