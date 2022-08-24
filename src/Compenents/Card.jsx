import React from "react";
import { Link } from "react-router-dom";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="container h-100">
        <div className="row h-100">
          <div className="col-lg-12 col-md-6">
            <div className="row h-100">
              <div className="col-lg-12 mb-4 pb-2 picture-item">
                <div className="card blog blog-primary h-100 hover-zoom shadow rounded border border-3 overflow-hidden">
                  <div className="text-center h-100 position-relative overflow-hidden">
                    <img src={props.imgSrc} className="img-fluid" alt="" />
                  </div>

                  <div className="card-body content">
                    <Link
                      to={props.linkTO}
                      className="h5 title text-dark d-block mb-0"
                    >
                      {props.heading}
                    </Link>
                    <p className="text-muted mt-2 mb-2">{props.description}</p>
                    <Link to={props.heading} className="btn btn-primary">
                      Learn More{" "}
                      <i className="uil uil-arrow-right align-middle"></i>
                    </Link>
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </React.Fragment>
  );
};

export default Card;
