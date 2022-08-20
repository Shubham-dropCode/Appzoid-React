import React from "react";

const Card = (props) => {
  return (
    <React.Fragment>
      <div className="container">
        <div className="row">
          <div className="col-lg-12 col-md-6">
            <div className="row">
              <div className="col-lg-12 mb-4 pb-2 picture-item">
                <div className="card blog blog-primary hover-zoom shadow rounded border border-3 overflow-hidden">
                  <div className="image position-relative  overflow-hidden">
                    <img src={props.imgSrc} className="img-fluid" alt="" />
                  </div>

                  <div className="card-body content">
                    <a
                      href="blog-detail-five.html"
                      className="h5 title text-dark d-block mb-0"
                    >
                      {props.heading}
                    </a>
                    <p className="text-muted mt-2 mb-2">{props.description}</p>
                    <a href="blog-detail-five.html" className="btn btn-primary">
                      Learn More{" "}
                      <i className="uil uil-arrow-right align-middle"></i>
                    </a>
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
