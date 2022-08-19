import React, { useState } from "react";
import { Link, useNavigate } from "react-router-dom";

export default function QuickServiceSection({
  title = "",
  subTitle = "",
  QuickServices = [],
}) {
  const [mouseHover, setMouseHover] = useState(-1);
  const quickServiceSize =
    QuickServices.length > 0 ? 24 / QuickServices.length : 12;
  const navigate = useNavigate();

  return (
    <section className="section pt-2">
      <div className="container">
        <div className="row justify-content-center">
          <div className="col-12">
            <div className="section-title mb-4 pb-2 text-center">
              <h4 className="display-3 mb-3"><span className="underline">{title}</span></h4>
              <p className="text-muted lead para-desc mx-auto mb-0">
                {subTitle}
              </p>
            </div>
          </div>
        </div>
      </div>
      <div className="container">
        <div className="row">
          {QuickServices.map((service, index) => {
            return (
              <div
                className={"mt-4 mb-4 col-sm- col-md-" + quickServiceSize}
                onClick={() => {
                  navigate(service.linkTo);
                }}
                onMouseEnter={() => {
                  setMouseHover(index);
                }}
                onMouseLeave={() => {
                  setMouseHover(-1);
                }}
              >
                <div className="features feature-primary border-0 d-flex clickable">
                  <div
                    className={
                      "fea-icon rounded-circle bg-light icon" +
                      (mouseHover === index ? " shadow-lg " : " shadow-sm ")
                    }
                  >
                    <i className={"las la-2x " + service.icon}></i>
                  </div>

                  <div className="content flex-1 ms-3">
                    <Link
                      to={service.linkTo}
                      className={
                        "title h5 " +
                        (mouseHover === index
                          ? " text-primary "
                          : " text-dark ")
                      }
                    >
                      {service.title}
                    </Link>
                    <p className="text-muted mt-2 mb-0">
                      {service.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
        <div className="d-flex justify-content-center">
          <Link className="btn btn-primary mt-5" to="/ourservices">
            VIEW ALL SERVICE
            <i className="uil uil-arrow-right align-middle ps-2" />
          </Link>
        </div>
      </div>
    </section>
  );
}
