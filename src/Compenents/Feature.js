import React from "react";

const Feature = () => {
  return (
    <React.Fragment>
      <section className="section pb-0">
        <div className="container">
          <div className="row">
            <div className="col-lg-3 col-md-4">
              <div className="features feature-primary feature-bg border-0 p-4 rounded shadow">
                <div className="fea-icon rounded text-white title-dark">
                  <i className="uil uil-wrench"></i>
                </div>

                <div className="content mt-3">
                  <a
                    href="page-single-service.html"
                    className="title h5 text-dark"
                  >
                    Honest Services
                  </a>
                  <p className="text-muted para mt-2 mb-0">
                    We are so confident with our service that if we can’t fix
                    the problem, you don’t pay. All repairs come with a 30 day
                    guarantee
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4 ">
              <div className="features feature-primary feature-bg border-0 p-4 rounded shadow">
                <div className="fea-icon rounded text-white title-dark">
                  <i className="uil uil-cog"></i>
                </div>

                <div className="content mt-3">
                  <a
                    href="page-single-service.html"
                    className="title h5 text-dark"
                  >
                    Quick Repair
                  </a>
                  <p className="text-muted para mt-2 mb-0">
                    Our company is reliable, and our work is trusted. We provide
                    worry-free service you can always count on
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="features feature-primary feature-bg border-0 p-4 rounded shadow">
                <div className="fea-icon rounded text-white title-dark">
                  <i className="uil uil-history"></i>
                </div>

                <div className="content mt-3">
                  <a
                    href="page-single-service.html"
                    className="title h5 text-dark"
                  >
                    On time delivery
                  </a>
                  <p className="text-muted para mt-2 mb-0">
                    Choose the delivery method that matches your requirements.
                    We provides fast and quick pick and drop facility
                  </p>
                </div>
              </div>
            </div>

            <div className="col-lg-3 col-md-4">
              <div className="features feature-primary feature-bg border-0 p-4 rounded shadow">
                <div className="fea-icon rounded text-white title-dark">
                  <i className="uil uil-bolt"></i>
                </div>

                <div className="content mt-3">
                  <a
                    href="page-single-service.html"
                    className="title h5 text-dark"
                  >
                    We are pasionate
                  </a>
                  <p className="text-muted para mt-2 mb-0">
                    Everything we are doing with enthusiasm as it makes us feel
                    satisfied and cheerful, full of energy which is the vitality
                    of life
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>
    </React.Fragment>
  );
};

export default Feature;
