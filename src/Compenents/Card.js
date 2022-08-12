import React from "react";

const Card = (props) => {
  return (
    <React.Fragment>
      <div class="container">
        <div class="row">
          <div class="col-lg-12 col-md-6">
            <div class="row">
              <div class="col-lg-12 mb-4 pb-2 picture-item">
                <div class="card blog blog-primary hover-zoom shadow rounded overflow-hidden">
                  <div class="image position-relative  overflow-hidden">
                    <img src={props.imgSrc} class="img-fluid" alt="" />
                  </div>

                  <div class="card-body content">
                    <a
                      href="blog-detail-five.html"
                      class="h5 title text-dark d-block mb-0"
                    >
                      {props.heading}
                    </a>
                    <p class="text-muted mt-2 mb-2">{props.description}</p>
                    <a href="blog-detail-five.html" class="btn btn-primary">
                      Learn More{" "}
                      <i class="uil uil-arrow-right align-middle"></i>
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
