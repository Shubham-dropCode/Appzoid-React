import React from "react";
import bgImg from "../images/bg/finance01.jpg";

const Hero = () => {
  return (
    <React.Fragment>
      <div className="bg-home zoom-image d-flex align-items-center">
        <img
          className="bg-overlay image-wrap"
          src="../images/bg/slide-1-1.jpg"
        />
        <div className="bg-overlay bg-linear-gradient"></div>
        <div className="container">
          <div className="row justify-content-center mt-5">
            <div className="col-12">
              <div className="title-heading text-center">
                <h4 className="display-2 fw-bold text-white title-dark">
                  Welcome to Appzoid & <br /> Resolution Pvt Ltd
                </h4>
                <p className="para-desc mx-auto text-white-50">
                  Specialized in all brand Smart device Service
                </p>
                <div className="mt-4 pt-2">
                  <a href="" className="btn btn-primary m-1">
                    Our Service
                  </a>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Hero;
