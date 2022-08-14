import React from "react";
import { Link } from "react-router-dom";

export default function Hero({
  bgImage = "slide-1-1.jpg",
  title = "Welcome to Appzoid & <br /> Resolution Pvt Ltd",
  subTitle = "Specialized in all brand Smart device Service",
  ctaLink = ""
}) {
  return (
    <React.Fragment>
      <div className="bg-home zoom-image d-flex align-items-center">
        <img
          className="bg-overlay image-wrap"
          src={"../images/bg/" + bgImage}
          alt=""
        />
        <div className="bg-overlay bg-linear-gradient"></div>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-12">
              <div className="title-heading text-center">
                <h4
                  className="display-2 fw-bold text-white title-dark"
                  dangerouslySetInnerHTML={{ __html: title }}
                ></h4>
                <p
                  className="para-desc mx-auto text-white-50"
                  dangerouslySetInnerHTML={{ __html: subTitle }}
                ></p>
                <div className="mt-4 pt-2">
                  <Link to={ctaLink} className="btn btn-primary m-1">
                    REQUEST FOR SERVICE
                  </Link>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
}
