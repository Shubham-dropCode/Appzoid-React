import React from "react";

const ComingSoon = () => {
  return (
    <section className="section">
      <div className="container">
        <div className="row">
          <div className="row justify-content-center mb-3">
            <div className="col-12">
              <div className="section-title mb-4 pb-2 text-center">
                <h4 className="title mb-3">Coming Soon</h4>
                <p className="text-muted para-desc mx-auto mb-0">
                  Click below links to view our Upcoming Projects
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="features feature-primary process-bar text-center border-0 px-lg-4 position-relative">
              <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto">
                <i className="uil  uil-clock-ten"></i>
              </div>

              <div className="content mt-4 pt-2">
                <a className="h4" href="">
                  Buy Back Product
                </a>
                <p className="text-muted mb-0 mt-3">
                  Write a short description, that will describe the title or
                  something informational and useful.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3">
            <div className="features feature-primary process-bar text-center border-0 px-lg-4 position-relative">
              <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto">
                <i className="uil uil-clock-two"></i>
              </div>

              <div className="content mt-4 pt-2">
                <a className="h4" href="">
                  Price Product
                </a>
                <p className="text-muted mb-0 mt-3">
                  Write a short description, that will describe the title or
                  something informational and useful.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="features feature-primary process-bar text-center border-0 px-lg-4 position-relative">
              <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto">
                <i className="uil uil-clock"></i>
              </div>

              <div className="content mt-4 pt-2">
                <h4>Warranty Programme</h4>
                <p className="text-muted mb-0 mt-3">
                  Write a short description, that will describe the title or
                  something informational and useful.
                </p>
              </div>
            </div>
          </div>
          <div className="col-md-3 ">
            <div className="features feature-primary text-center border-0 px-lg-4 position-relative">
              <div className="fea-icon bg-soft rounded-circle shadow icon h5 mb-0 mx-auto">
                <i className="uil uil-clock-seven"></i>
              </div>

              <div className="content mt-4 pt-2">
                <h4>Free Pick and Drop</h4>
                <p className="text-muted mb-0 mt-3">
                  Write a short description, that will describe the title or
                  something informational and useful.
                </p>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ComingSoon;
