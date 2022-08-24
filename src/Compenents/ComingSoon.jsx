import React from "react";
import { Link } from "react-router-dom";

const ComingSoon = ({ title = "", subTitle = "", ComingSoon = [] }) => {
  return (
    <section className="section pt-0">
      <div className="container">
        <div className="row">
          <div className="row justify-content-center mb-3">
            <div className="col-12">
              <div className="section-title mb-4 pb-2 text-center">
                <h1 className="display-5 pb-2">
                  <span className="underline">{title}</span>
                </h1>
                <p className="text-muted para-desc mx-auto mb-0">{subTitle}</p>
              </div>
            </div>
          </div>

          {ComingSoon.map((feature, idx) => {
            return (
              <div className="col-md-3">
                <div
                  key={idx}
                  className="features feature-primary text-center border-0 px-lg-4 position-relative"
                >
                  <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto">
                    <i className={"uil uil-" + feature.icon}></i>
                  </div>

                  <div className="content mt-4 pt-2">
                    <Link className="h4" to={feature.linkTo}>
                      {feature.title}
                    </Link>
                    <p className="text-muted mb-0 mt-3">
                      {feature.description}
                    </p>
                  </div>
                </div>
              </div>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
